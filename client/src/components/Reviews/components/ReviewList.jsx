import React from 'react';
import Review from 'Reviews/components/Review.jsx'
import styled from 'styled-components';

const List = styled.div`
  color: black;
  width: calc(60% - (.5em + 6px));
  float: right;
  min-height: 400px;
  margin-top: 1em;
`;

function ReviewList() {
  return (
    <List>
      <div>there are some reviews that are not sorted</div>
      <Review />
      <Review />
    </List>
  );
}

export default ReviewList;
