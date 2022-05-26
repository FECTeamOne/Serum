import React, { useState } from 'react';
// import styled from 'styled-components';
import RelatedItemsEntry from 'RelatedItems/RelatedItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
import { products } from 'tests/testData.js';
import Modal from './Modal.jsx';

// need to pass {currentItemId} into the props
function RelatedItemsList() {
  const [showModal, setShowModal] = useState(false);

  // get related items from the API; [array of item id]
  // get related items detail from the API; [{item 1}, {item 2}..]
  const relatedItems = [products, products, products].flat();

  const relatedItemsEntries = relatedItems.map((item) => (
    <RelatedItemsEntry key={item.id} item={item} onOpen={() => setShowModal(true)} />
  ));

  // detail of Modal
  // item1: [{char1: true}, {char2: true}]
  // item2: [{char1: true}, {char2: true}]

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <Carousel items={relatedItemsEntries} size={4} />
      <Modal showModal={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
}

export default RelatedItemsList;
