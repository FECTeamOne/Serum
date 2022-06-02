import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewList from 'Reviews/components/ReviewList.jsx';
import Ratings from 'Reviews/components/Ratings.jsx';
import Fit from 'Reviews/components/Fit.jsx';

function Reviews({ productId }) {
  const [reviewsMetadata, setReviewsMetaData] = useState('');
  const [productName, setProductName] = useState('');
  const [currentFilter, setCurrentFilter] = useState([]);
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
      <Title>
        Ratings & Reviews
      </Title>
      <Left>
        <Ratings
          reviewsMetadata={reviewsMetadata}
          name={productName}
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
        />
        <Fit reviewsMetadata={reviewsMetadata} />
      </Left>
      <ReviewList reviewsMetadata={reviewsMetadata} currentFilter={currentFilter} />
    </Container>
  );
}

const Container = styled.div`
  margin: var(--space-2);
  text-align: center;
  width: 100%;
  height: 500px;
`;
const Left = styled.div`
  width: calc(40% - (.5em + 6px));
  float: left;
  min-height: 400px;
  margin-top: 1em;
  height: 450px;
`;
const Title = styled.h2`
  font-size: var(--text-5);
  font-weight: 600;
`;

export default Reviews;
