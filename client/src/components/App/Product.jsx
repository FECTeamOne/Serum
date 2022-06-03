import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import RelatedItems from 'RelatedItems/RelatedItems.jsx';
import { calculateAverageStars, calculateTotalReviews } from 'lib/reviewsMetadataFunctions.js';

function App() {
  const { id } = useParams();
  const productId = id;
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
    <Wrapper>
      <Overview
        product={productData}
        styles={productStyles}
        rating={calculateAverageStars(reviewsMetadata)}
        totalReviews={calculateTotalReviews(reviewsMetadata)}
      />
      <Reviews reviewsMetadata={reviewsMetadata} productData={productData} />
      <RelatedItems productId={productId} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

export default App;
