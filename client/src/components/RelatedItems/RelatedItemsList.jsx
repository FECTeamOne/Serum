import React, { useState } from 'react';
// import styled from 'styled-components';
import RelatedItemsEntry from 'RelatedItems/RelatedItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
import { products } from 'tests/testData.js';
import Modal from './Modal.jsx';

// need to pass {currentItemId} into the props
function RelatedItemsList({ currentItem }) {
  const [showModal, setShowModal] = useState(false);
  const [currentRelated, setCurrentRelated] = useState(0);

  // get related items from the API; [array of item id]
  // get related items detail from the API; [{item 1}, {item 2}..]
  const relatedItems = products.slice();
  // change the product id for test only;
  // relatedItems.forEach((item, index) => { item.id = index; });
  console.log(relatedItems);
  // detail of Modal
  const currentItemChars = [{ char1: 'String' }, { char2: 'String' }, { char3: 'String' }];
  const currentRelatedChars = [{ char1: 'String' }, { char2: 'String' }, { char3: 'String' }];

  const relatedItemsEntries = relatedItems.map((item) => (
    <RelatedItemsEntry
      key={item.id}
      item={item}
      onOpen={() => setShowModal(true)}
      onCompare={() => setCurrentRelated(item.id)}
    />
  ));

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <Carousel items={relatedItemsEntries} size={2} />
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        currentItemChars={currentItemChars}
        currentRelatedChars={currentRelatedChars}
      />

    </div>
  );
}

export default RelatedItemsList;
