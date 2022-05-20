import React from 'react';
import styled from 'styled-components';
import ReviewList from 'Reviews/components/ReviewList.jsx'
import Ratings from 'Reviews/components/Ratings.jsx'
import Fit from 'Reviews/components/Fit.jsx'

const Container = styled.div`
  text-align: center;
`;

function Reviews() {
  return (
    <Container>
      <Ratings />
      <Fit />
      <ReviewList />
    </Container>
  );
}

export default Reviews;
