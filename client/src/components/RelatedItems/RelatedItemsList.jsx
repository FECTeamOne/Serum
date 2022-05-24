import React from 'react';
// import styled from 'styled-components';
import RelatedItemsEntry from 'RelatedItems/RelatedItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
import { products } from 'tests/testData.js';

function RelatedItemsList({currentItemId}) {
  // get related items from the API; [array of item id]
  const relatedItems = [products, products, products].flat();
  // get related items detail from the API; [{item 1}, {item 2}..]
  // render the related items using carousel
  const relatedItemsEntry = relatedItems.map((item) => (
    <RelatedItemsEntry key={item.id} item={item} />
  ));

  return (
    <div>
      <Carousel items={relatedItemsEntry} size={4} />
    </div>
  );
}

export default RelatedItemsList;
