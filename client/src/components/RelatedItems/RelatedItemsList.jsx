import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import RelatedItemsEntry from 'RelatedItems/RelatedItemsEntry.jsx';
import Carousel from 'App/Carousel.jsx'
import Modal from './Modal.jsx';
import axios from 'axios';

// need to pass {currentItemId} into the props
function RelatedItemsList({ currentItemId }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentRelated, setCurrentRelated] = useState('');
  const [allProductChars, setAllProductChars] = useState('');
  const [relatedProductChars, setRelatedProductChars] = useState('');
  const [currentProductChars, setcurrentProductChars] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [relatedItemsIds, allProducts] = await Promise.all([axios.get('/products/40346/related'), axios.get('/products')]);
        const filteredProducts = allProducts.data.filter((item) => (
          relatedItemsIds.data.includes(item.id)));

        await Promise.all(
          relatedItemsIds.data.map(async (itemId) => {
            // get styles for item with id itemId
            const styles = await axios.get(`/products/${itemId}/styles`);
            // find the item with id itemId
            const itemWithItemId = filteredProducts.find((item) => (item.id === itemId));
            // add image from styles to item
            if (itemWithItemId) {
              itemWithItemId.img = styles.data.results[0].photos[0].url;
            }
          }),
        );
        setRelatedProducts(filteredProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentItemId]);
  // Defining fetchData outside of our useEffect hook is worse because it reinitializes fetchData on every rerender
  // useEffect(() => {fetchData();}, [currentItemId]);
  // const currentCharsTest = ['char1', 'char2', 'char3'];
  // const currentItemVals = ['1', '2', '3'];
  // const currentRelatedVals = ['2', '3', '4'];

  const fetchFeatures = async (relatedId) => {
    const relatedFeatures = [];
    const currentFeatures = [];
    await (
      axios.get(`/products/${relatedId}`)
        .then((res) => (res.data.features.forEach((feature) => {
          relatedFeatures.push(feature);
        })))
        // [{f1: value}, {f2: value}...]
    );
    await (
      axios.get(`/products/${currentItemId}`)
        .then((res) => (res.data.features.forEach((feature) => {
          currentFeatures.push(feature);
        })))
        // [{f1: value}, {f2: value}...]
    );
    console.log('relatedFeatures: ', relatedFeatures);
    console.log('currentFeatures: ', currentFeatures);
    // create allKeys(array), push object1.keys and object2.keys without duplicate
    const relatedKeys = [];
    relatedFeatures.forEach((item) => (relatedKeys.push(item.feature)));
    console.log('relatedKeys: ', relatedKeys);

    const currentKeys = [];
    currentFeatures.forEach((item) => (currentKeys.push(item.feature)));
    console.log('currentKeys : ', currentKeys);

    const allFeatures = relatedKeys.slice();
    currentKeys.forEach((key) => {
      if (allFeatures.indexOf(key) < 0) {
        allFeatures.push(key);
      }
    });
    console.log('allFeatures: ', allFeatures);

    // create relatedChars(array), for allKeys, if object1.keys includes it,
    // push the value, else, push '',
    // feature = ['f1', 'f2', 'f3'...]
    // featureObject = [{feature: f1, value: v1}, {feature:f2, value: v2}...]
    const relatedChars = [];
    allFeatures.forEach((feature) => {
      for (let i = 0; i < relatedFeatures.length; i += 1) {
        if (relatedFeatures[i].feature === feature) {
          relatedChars.push(relatedFeatures[i].value);
          break;
        } else if (i === relatedFeatures.length - 1) {
          relatedChars.push('NA');
        }
      }
    });
    console.log('relatedChars: ', relatedChars);

    const currentChars = [];
    allFeatures.forEach((feature) => {
      for (let i = 0; i < currentFeatures.length; i += 1) {
        if (currentFeatures[i].feature === feature) {
          currentChars.push(currentFeatures[i].value);
          break;
        } else if (i === currentFeatures.length - 1) {
          currentChars.push('NA');
        }
      }
    });
    console.log('currentChars: ', currentChars);
    setAllProductChars(allFeatures);
    setRelatedProductChars(relatedChars);
    setcurrentProductChars(currentChars);
  };
  // click on compare, input relatedId
  // fetchFeatures of currentRelated

  const relatedItemsEntries = relatedProducts.map((item) => (
    <RelatedItemsEntry
      key={item.id}
      img={item.img}
      item={item}
      onOpen={() => setModalIsVisible(true)}
      onCompare={() => fetchFeatures(item.id)}
    />
  ));

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <Carousel items={relatedItemsEntries} size={4} />
      { currentProductChars && allProductChars && relatedProductChars
        &&
      <Modal
        showModal={modalIsVisible}
        onClose={() => setModalIsVisible(false)}
        currentChars={allProductChars}
        currentItemVals={currentProductChars}
        currentRelatedVals={relatedProductChars}
      />}
    </div>
  );
}

RelatedItemsList.propTypes = {
  currentItemId: PropTypes.string.isRequired,
};

export default RelatedItemsList;
