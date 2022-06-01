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
    const outfitItemsCopy = [...outfitItems];
    // check if current item is already in outfit
    let currentItemInOutfit = false;
    outfitItemsCopy.forEach((item) => {
      if (item.id === itemId) {
        currentItemInOutfit = true;
      }
    });
    if (!currentItemInOutfit) { outfitItemsCopy.push(currentItem); }
    setOutfitItems(outfitItemsCopy);
  };

  const handleRemove = (itemId) => {
    const outfitItemsCopy = [...outfitItems];
    outfitItemsCopy.forEach((item, index) => {
      if (item.id === itemId) {
        outfitItemsCopy.splice(index, index + 1);
      }
    });
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

  const addOutfitCard = (
    <div>
      <button type="button" onClick={() => { handleAddOutfitClick(currentItemId); }}>
        add Outfit
      </button>
    </div>
  );
  OutfitItemsEntries.unshift(addOutfitCard);

  return (
    <div>
      <div>YOUR OUTFIT</div>
      <Carousel items={OutfitItemsEntries} size={4} />
    </div>
  );
}

export default OutfitItemsList;
