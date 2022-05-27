import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewList from 'Reviews/components/ReviewList.jsx';
import Ratings from 'Reviews/components/Ratings.jsx';
import Fit from 'Reviews/components/Fit.jsx';
// import { reviewsMetadata } from 'tests/testData.js'

const Container = styled.div`
  text-align: center;
  postiton: relative;
  width: 100%;
  overflow: auto;
`;
const Left = styled.div`
  border: 2px solid black;
  width: calc(40% - (.5em + 6px));
  float: left;
  min-height: 400px;
  margin-top: 1em;
`;
const Right = styled.div`
  position: relative;
  border: 2px solid black;
  color: black;
  width: calc(60% - (.5em + 6px));
  float: right;
  min-height: 400px;
  margin-top: 1em;
`;
// TODO meta data req will happen here
function Reviews({ productId }) {
  const [reviewsMetadata, setReviewsMetaData] = useState('');
  const [productName, setProductName] = useState('');
  const [currentFilter, setCurrentFilter] = useState([1]);
  useEffect(() => {
    axios.get(`/reviews/meta?product_id=${productId}`)
      .then((res) => { setReviewsMetaData(res.data); })
      .catch((err) => console.log(err));
    axios.get(`/products/${productId}`)
      .then((res) => { setProductName(res.data.name); })
      .catch((err) => console.log(err));
  }, []);
  if (!reviewsMetadata) {
    return '';
  }
  return (
    <Container>
      <Left>
        <Ratings
          reviewsMetadata={reviewsMetadata}
          name={productName}
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
        />
        <Fit reviewsMetadata={reviewsMetadata} />
      </Left>
      <Right>
        <ReviewList reviewsMetadata={reviewsMetadata} currentFilter={currentFilter} />
      </Right>
    </Container>
  );
}

export default Reviews;
