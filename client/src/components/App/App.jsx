import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from 'App/Navbar.jsx';
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import axios from 'axios';
import RelatedItems from 'RelatedItems/RelatedItems.jsx';
import { StarIconFills } from 'assets/StarIcon.jsx'
import { calculateAverageStars, calculateTotalReviews } from 'lib/reviewsMetadataFunctions.js';
import GlobalStyle from '../../globalStyles.js';

function App() {
  const productId = 40344; // * temp till we use react router
  const [reviewsMetadata, setReviewsMetaData] = useState('');
  const [productData, setProductData] = useState('');
  const [productStyles, setProductStyles] = useState('');

  useEffect(() => {
    let productPageIsMounted = true;

    const fetchData = async (endpoint, callback) => {
      try {
        const response = await axios.get(endpoint);
        if (productPageIsMounted) {
          callback(response.data);
        }
      } catch (error) {
        console.log('Error fetching data:\n', error);
        fetchData(endpoint, callback);
      }
    }

    fetchData(`/reviews/meta?product_id=${productId}`, (metadata) => {
      setReviewsMetaData(metadata);
    });

    fetchData(`/products/${productId}`, (product) => {
      setProductData(product);
    });

    fetchData(`/products/${productId}/styles`, (styles) => {
      const sortedStyles = styles.results.sort(
        (style1, style2) => style1.styled_id - style2.styled_id
      );
      setProductStyles(sortedStyles);
    });

    return () => { productPageIsMounted = false; }
  }, [productId]);

  return (
    <>
      <GlobalStyle />
      <StarIconFills />
      <Navbar />
      <Wrapper>
        <Overview
          product={productData}
          styles={productStyles}
          rating={calculateAverageStars(reviewsMetadata)}
          totalReviews={calculateTotalReviews(reviewsMetadata)}
        />
        <Reviews reviewsMetadata={reviewsMetadata} productData={productData} />
        <RelatedItems productId={40344} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

export default App;
