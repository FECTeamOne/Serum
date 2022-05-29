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
  const [allProductChars, setAllProductChars] = useState('');
  const [relatedProductChars, setRelatedProductChars] = useState('');
  const [currentProductChars, setCurrentProductChars] = useState('');

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

  const fetchFeatures = async (relatedId) => {
    const relatedFeaturesResponse = await (
      axios.get(`/products/${relatedId}`)
      // [{f1: value}, {f2: value}...]
    );
    const relatedFeatures = relatedFeaturesResponse.data.features;

    const currentFeaturesResponse = await (
      axios.get(`/products/${currentItemId}`)
    );
    const currentFeatures = currentFeaturesResponse.data.features;

    // create allKeys(array), push object1.keys and object2.keys without duplicate
    const relatedKeys = relatedFeatures.map((item) => (item.feature));
    const currentKeys = currentFeatures.map((item) => (item.feature));

    const allFeatures = relatedKeys.slice();
    currentKeys.forEach((key) => {
      if (!allFeatures.includes(key)) {
        allFeatures.push(key);
      }
    });

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

    setAllProductChars(allFeatures);
    setRelatedProductChars(relatedChars);
    setCurrentProductChars(currentChars);
  };
  // click on compare, input relatedId
  // fetchFeatures of currentRelated

  const relatedItemsEntries = relatedProducts.map((item) => (
    <RelatedItemsEntry
      key={item.id}
      img={item.img}
      item={item}
      handleCompare={() => {
        setModalIsVisible(true);
        fetchFeatures(item.id);
      }}
    />
  ));

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <Carousel items={relatedItemsEntries} size={4} />
      { currentProductChars && allProductChars && relatedProductChars
        && (
        <Modal
          modalIsVisible={modalIsVisible}
          handleClose={() => {
            setModalIsVisible(false);
            setAllProductChars('');
            setCurrentProductChars('');
            setRelatedProductChars('');
          }}
          currentChars={allProductChars}
          currentItemVals={currentProductChars}
          currentRelatedVals={relatedProductChars}
        />
        )}
    </div>
  );
}

RelatedItemsList.propTypes = {
  currentItemId: PropTypes.string.isRequired,
};

export default RelatedItemsList;
