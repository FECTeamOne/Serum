import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import OutfitItemsEntry from 'RelatedItems/OutfitItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
import axios from 'axios';

function OutfitItemsList({ currentItemId }) {
  const [outfitItems, setOutfitItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    // function fetchOutfit to get the current product information
    const fetchOutfit = async (itemId) => {
      const currentProductResponse = await axios.get(`products/${itemId}`);
      const currentProduct = currentProductResponse.data;
      const styles = await axios.get(`/products/${itemId}/styles`);
      const currentImg = styles.data.results[0].photos[0].url;
      currentProduct.img = currentImg;
      setCurrentItem(currentProduct);
    };

    fetchOutfit(currentItemId);
  }, [currentItemId]);

  const handleAddOutfitClick = (itemId) => {
    // check if current item is already in outfit
    const currentItemInOutfit = outfitItems.some((item) => item.id === itemId);
    if (!currentItemInOutfit) { setOutfitItems([...outfitItems, currentItem]); }
  };

  const handleRemove = (itemId) => {
    const outfitItemsCopy = [...outfitItems];
    const indexRemove = outfitItemsCopy.findIndex((item) => item.id === itemId);
    outfitItemsCopy.splice(indexRemove, 1);
    setOutfitItems(outfitItemsCopy);
  };

  const OutfitItemsEntries = outfitItems.map((item) => (
    <OutfitItemsEntry
      key={item.id}
      img={item.img}
      item={item}
      handleRemove={() => { handleRemove(currentItemId); }}
    />
  ));

  const AddOutfitCard = (
    <div>
      <button type="button" onClick={() => { handleAddOutfitClick(currentItemId); }}>
        add Outfit
      </button>
    </div>
  );
  OutfitItemsEntries.unshift(AddOutfitCard);

  return (
    <div>
      <div>YOUR OUTFIT</div>
      <Carousel items={OutfitItemsEntries} size={4} />
    </div>
  );
}

export default OutfitItemsList;
