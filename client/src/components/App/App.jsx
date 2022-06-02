import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from 'App/Navbar.jsx';
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import axios from 'axios';
import RelatedItems from 'RelatedItems/RelatedItems.jsx';
import { StarIconFills } from 'assets/StarIcon.jsx'
import GlobalStyle from '../../globalStyles.js';

function App() {
  const productId = 40344; // * temp till we use react router
  const [reviewsMetadata, setReviewsMetaData] = useState('');
  const [productData, setProductData] = useState('');
  const [productStyles, setProductStyles] = useState('');
  useEffect(() => {
    axios.get(`/reviews/meta?product_id=${productId}`)
      .then((res) => { setReviewsMetaData(res.data); })
      .catch((err) => console.log(err));
    axios.get(`/products/${productId}`)
      .then((res) => { setProductData(res.data); })
      .catch((err) => console.log(err));
    axios.get(`/products/${productId}/styles`)
      .then((res) => { setProductStyles(res.data); })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <StarIconFills />
      <GlobalStyle />
      <StarIconFills />
      <Wrapper>
        <Navbar />
        <Overview productId={40344} />
        <Reviews reviewsMetadata={reviewsMetadata} productData={productData} />
        <RelatedItems productId={40344} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin:auto;
  width: fit-content;
`;

export default App;
