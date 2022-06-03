import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewList from 'Reviews/components/ReviewList.jsx';
import Ratings from 'Reviews/components/Ratings.jsx';
import Fit from 'Reviews/components/Fit.jsx';

function Reviews({ reviewsMetadata, productData }) {
  const productName = productData.name
  const [currentFilter, setCurrentFilter] = useState([]);
  if (!reviewsMetadata) {
    return '';
  }
  return (
    <Container>
      <Title>
        <a id="ratings-and-reviews">Ratings & Reviews</a>
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
