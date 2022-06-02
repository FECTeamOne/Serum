import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import RelatedItemsEntry from 'RelatedItems/RelatedItemsEntry.jsx';
import Carousel from 'shared/Carousel.jsx'
import axios from 'axios';
import Modal from 'RelatedItems/Modal.jsx';

function RelatedItemsList({ currentItemId }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [allProductChars, setAllProductChars] = useState('');
  const [relatedProductChars, setRelatedProductChars] = useState('');
  const [currentProductChars, setCurrentProductChars] = useState('');
  const [currentProductName, setCurrentProductName] = useState('');
  const [currentRelatedName, setCurrentRelatedName] = useState('');
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const relatedItemsIds = await axios.get(`/products/${currentItemId}/related`);
        // const [relatedItemsIds, allProducts] = await Promise.all([axios.get(`/products/${currentItemId}/related`), axios.get('/products')]);

        // const indexRemove = relatedItemsIds.data.findIndex((id) => id === currentItemId);
        // console.log('indexRemove', indexRemove);
        // console.log('allProduct', allProducts.data);
        // if (indexRemove !== -1) { relatedItemsIds.data.splice(indexRemove, 1); }
        // const filteredProducts = allProducts.data.filter((item) => (
        //   relatedItemsIds.data.includes(item.id)));

        const filteredProducts = [];
        await Promise.all(
          relatedItemsIds.data.map(async (itemId) => {
            const relatedItem = await axios.get(`/products/${itemId}`);
            filteredProducts.push(relatedItem.data);
          }),
        );

        await Promise.all(
          relatedItemsIds.data.map(async (itemId) => {
            // get styles for item with id itemId
            const styles = await axios.get(`/products/${itemId}/styles`);
            // find the item with id itemId
            const itemWithItemId = filteredProducts.find((item) => (item.id === itemId));
            // add image from styles to item
            if (itemWithItemId) {
              itemWithItemId.img = styles.data.results[0].photos;
            }
          }),
        );

        await Promise.all(
          relatedItemsIds.data.map(async (itemId) => {
            const rating = await axios.get(`/reviews/meta?product_id=${itemId}`);
            // add ratings to item
            let totalStars = 0;
            const values = Object.values(rating.data.ratings);
            const total = values.reduce((num, totals) => Number(num) + Number(totals), 0);
            Object.entries(rating.data.ratings).forEach((item) => {
              totalStars += item[0] * item[1];
            });
            const avgStars = totalStars / total;
            const itemWithItemId = filteredProducts.find((item) => (item.id === itemId));
            // add rating to item
            if (itemWithItemId) {
              itemWithItemId.rating = avgStars;
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
  // Defining fetchData outside useEffect is worse because it reinitializes fetchData every rerender
  // useEffect(() => {fetchData();}, [currentItemId]);

  const fetchFeatures = async (relatedId) => {
    const relatedFeaturesResponse = await (
      axios.get(`/products/${relatedId}`)
    );
    const relatedFeatures = relatedFeaturesResponse.data.features;
    setCurrentRelatedName(relatedFeaturesResponse.data.name);
    const currentFeaturesResponse = await (
      axios.get(`/products/${currentItemId}`)
    );
    const currentFeatures = currentFeaturesResponse.data.features;
    setCurrentProductName(currentFeaturesResponse.data.name);
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
          relatedChars.push('');
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
          currentChars.push('');
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
      rating={item.rating}
      handleCompare={() => {
        setModalIsVisible(true);
        fetchFeatures(item.id);
      }}
    />
  ));

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <Carousel
        items={relatedItemsEntries}
        size={3}
        direction="row"
        scrollIndex={scrollIndex}
        onScroll={(index) => { setScrollIndex(index); }}
        arrowHeight="var(--size-4)"
        gap="var(--size-3)"
        buttonWidth="var(--size-3)"
      />
      { currentProductChars && allProductChars && relatedProductChars && currentRelatedName
        && currentProductName
        && (
        <Modal
          modalIsVisible={modalIsVisible}
          handleClose={() => {
            setModalIsVisible(false);
            setAllProductChars('');
            setCurrentProductChars('');
            setRelatedProductChars('');
          }}
          currentProductName={currentProductName}
          currentRelatedName={currentRelatedName}
          allChars={allProductChars}
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
