import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OutfitItemsEntry from 'RelatedItems/OutfitItemsEntry.jsx';
import Carousel from 'shared/Carousel.jsx'

function OutfitItemsList({ currentItemId, product, rating, styles }) {
  const [outfitItems, setOutfitItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    // function fetchOutfit to get the current product information
    const fetchOutfit = () => {
      // const currentProductResponse = await axios.get(`products/${itemId}`);
      const currentProduct = product;
      // const styles = await axios.get(`/products/${itemId}/styles`);
      // const currentImg = styles.data.results[0].photos[0].url;
      const currentImg = styles[0].photos[0].url;
      currentProduct.img = currentImg;
      currentProduct.rating = rating;
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
      rating={item.rating}
      handleRemove={() => { handleRemove(currentItemId); }}
    />
  ));

  const AddOutfitCard = (
    <AddCard onClick={() => { handleAddOutfitClick(currentItemId); }}>
      <AddText>
        Click to Add
      </AddText>
    </AddCard>
  );
  OutfitItemsEntries.unshift(AddOutfitCard);

  return (
    <div>
      <div>YOUR OUTFIT</div>
      <Carousel
        items={OutfitItemsEntries}
        size={3}
        direction="row"
        scrollIndex={scrollIndex}
        onScroll={(index) => { setScrollIndex(index); }}
        arrowHeight="var(--size-4)"
        gap="var(--size-3)"
        buttonWidth="var(--size-3)"
      />
    </div>
  );
}

const AddCard = styled.button`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  width: 250px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddText = styled.h1`
  font-size: var(--text-4);
`;
export default OutfitItemsList;
