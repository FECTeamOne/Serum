import React from 'react';
// import styled from 'styled-components';
import OutfitItemsEntry from 'RelatedItems/OutfitItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
import { products } from 'tests/testData.js';

// need to pass {currentItemId} into the props
function OutfitItemsList() {
  // get related items from the API; [array of item id]
  // get related items detail from the API; [{item 1}, {item 2}..]
  const OutfitItems = products.slice();

  const OutfitItemsEntries = OutfitItems.map((item) => (
    <OutfitItemsEntry
      key={item.id}
      item={item}
    />
  ));

  return (
    <div>
      <div>YOUR OUTFIT</div>
      <Carousel items={OutfitItemsEntries} size={2} />
    </div>
  );
}

export default OutfitItemsList;
