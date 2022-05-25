import React from 'react';
import styled from 'styled-components';
import ReviewList from 'Reviews/components/ReviewList.jsx';
import Ratings from 'Reviews/components/Ratings.jsx';
import Fit from 'Reviews/components/Fit.jsx';
import { reviewsMetadata } from 'tests/testData.js'

const Container = styled.div`
  text-align: center;
`;
const Left = styled.div`
  border: 2px solid black;
  width: calc(40% - (.5em + 6px));
  float: left;
  min-height: 400px;
  margin-top: 1em;
`;
// TODO meta data req will happen here
function Reviews() {
  return (
    <Container>
      <Left>
        <Ratings reviewsMetadata={reviewsMetadata} />
        <Fit reviewsMetadata={reviewsMetadata} />
      </Left>
      <ReviewList reviewsMetadata={reviewsMetadata} />
    </Container>
  );
}

export default Reviews;
