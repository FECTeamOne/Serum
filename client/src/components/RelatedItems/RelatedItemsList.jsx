import React from 'react';
// import styled from 'styled-components';
import RelatedItemsEntry from 'RelatedItems/RelatedItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
import { products } from 'tests/testData.js';

// need to pass {currentItemId} into the props
function RelatedItemsList() {
  // get related items from the API; [array of item id]
  // get related items detail from the API; [{item 1}, {item 2}..]
  const relatedItems = [products, products, products].flat();

  const relatedItemsEntry = relatedItems.map((item) => (
    <RelatedItemsEntry key={item.id} item={item} />
  ));

  return (
    <Carousel items={relatedItemsEntry} size={4} />
  );
}

export default RelatedItemsList;
