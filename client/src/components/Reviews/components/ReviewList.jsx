import React from 'react';
import Review from 'Reviews/components/Review.jsx'
import styled from 'styled-components';

const List = styled.div`
  position: relative;
  border: 2px solid black;
  color: black;
  width: calc(60% - (.5em + 6px));
  float: right;
  min-height: 400px;
  margin-top: 1em;
`;

const Buttons = styled.button`
  position: absolute;
  right:  20%;
  bottom:  2%;
`;

function ReviewList() {
  return (
    <List>
      <div>there are some reviews that are not sorted</div>
      <Review />
      <Review />
      <Buttons>Test</Buttons>
    </List>
  );
}

export default ReviewList;
