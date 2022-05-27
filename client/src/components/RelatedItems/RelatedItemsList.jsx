import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import RelatedItemsEntry from 'RelatedItems/RelatedItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
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
    const relatedProducts = allProducts.data.filter((item) => (
      relatedItemsArray.data.indexOf(item.id) >= 0));
    setAllRelated(relatedProducts);
    setArrayRelated(relatedItemsArray.data);

    relatedItemsArray.data.forEach((itemId) => {
      relatedItemsStyles.push(axios.get(`/products/${itemId}/styles`));
    });
    const relatedStyles = await Promise.all(relatedItemsStyles);

    const relatedProductsCopy = relatedProducts.slice();
    relatedStyles.forEach((item) => {
      relatedProductsCopy.forEach((product) => {
        const productCopy = product;
        if (productCopy.id.toString() === item.data.product_id) {
          productCopy.img = item.data.results[0].photos[0].url;
        }
      });
    });
    setAllRelated(relatedProductsCopy);
  };

  const fetch

  useEffect(() => { fetchData(); }, []);

  const currentChars = ['char1', 'char2', 'char3'];
  const currentItemVals = ['1', '2', '3'];
  const currentRelatedVals = ['2', '3', '4'];

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
      <Carousel items={relatedItemsEntries} size={4} />
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        currentChars={currentChars}
        currentItemVals={currentItemVals}
        currentRelatedVals={currentRelatedVals}
      />

    </div>
  );
}

export default RelatedItemsList;
