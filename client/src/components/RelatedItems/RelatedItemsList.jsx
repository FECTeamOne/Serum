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
  const [currentRelated, setCurrentRelated] = useState(0);

  const relatedItemsStyles = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [relatedItemsIds, allProducts] = await Promise.all([axios.get('/products/40346/related'), axios.get('/products')]);
        const filteredProducts = allProducts.data.filter((item) => (
          relatedItemsIds.data.includes(item.id)));
        // console.log('filteredProduct: ', filteredProducts);

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
  const currentChars = ['char1', 'char2', 'char3'];
  const currentItemVals = ['1', '2', '3'];
  const currentRelatedVals = ['2', '3', '4'];

  const relatedItemsEntries = relatedProducts.map((item) => (
    <RelatedItemsEntry
      key={item.id}
      img={item.img}
      item={item}
      onOpen={() => setModalIsVisible(true)}
      onCompare={() => setCurrentRelated(item.id)}
    />
  ));

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <Carousel items={relatedItemsEntries} size={4} />
      <Modal
        showModal={modalIsVisible}
        onClose={() => setModalIsVisible(false)}
        currentChars={currentChars}
        currentItemVals={currentItemVals}
        currentRelatedVals={currentRelatedVals}
      />

    </div>
  );
}

RelatedItemsList.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  currentItemId: PropTypes.string.isRequired,
  // size: PropTypes.number.isRequired,
};

export default RelatedItemsList;
