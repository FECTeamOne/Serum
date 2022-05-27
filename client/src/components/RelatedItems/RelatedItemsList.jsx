import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import RelatedItemsEntry from 'RelatedItems/RelatedItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
import { products } from 'tests/testData.js';
import Modal from './Modal.jsx';
import axios from 'axios';

// need to pass {currentItemId} into the props
function RelatedItemsList({ currentItemId }) {
  const [showModal, setShowModal] = useState(false);
  const [arrayRelated, setArrayRelated] = useState([]);
  const [allRelated, setAllRelated] = useState([]);
  const [currentRelated, setCurrentRelated] = useState(0);

  const relatedItemsStyles = [];

  const fetchData = async () => {
    const [relatedItemsArray, allProducts] = await Promise.all([axios.get('/products/40346/related'), axios.get('/products')]);
    const temps = allProducts.data.filter((item) => (relatedItemsArray.data.indexOf(item.id) >= 0));
    setAllRelated(temps);
    setArrayRelated(relatedItemsArray.data);
    relatedItemsArray.data.forEach((itemId) => {
      relatedItemsStyles.push(axios.get(`/products/${itemId}/styles`));
    });
    const test = await Promise.all(relatedItemsStyles);
    const allRelatedCopy = temps.slice();
    test.forEach((item) => {
      allRelatedCopy.forEach((product) => {
        const tmpProduct = product;
        if (tmpProduct.id.toString() === item.data.product_id) {
          tmpProduct.img = item.data.results[0].photos[0].url;
          console.log('product in copy: ', tmpProduct);
        }
      });
    });
    setAllRelated(allRelatedCopy);
  };

  useEffect(() => { fetchData(); }, []);

  const currentItemChars = [{ char1: 'String' }, { char2: 'String' }, { char3: 'String' }];
  const currentRelatedChars = [{ char1: 'String' }, { char2: 'String' }, { char3: 'String' }];

  const relatedItemsEntries = allRelated.map((item) => (
    <RelatedItemsEntry
      key={item.id}
      img={item.img}
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
