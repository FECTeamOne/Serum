import React from 'react';
import styled from 'styled-components';
import ReviewList from 'Reviews/components/ReviewList.jsx'
import Ratings from 'Reviews/components/Ratings.jsx'
import Fit from 'Reviews/components/Fit.jsx'

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

function Reviews() {
  return (
    <Container>
      <Left>
        <Ratings />
        <Fit />
      </Left>
      <ReviewList />
    </Container>
  );
}

export default Reviews;
