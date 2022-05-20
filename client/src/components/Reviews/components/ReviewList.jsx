import React from 'react';
import Review from 'Reviews/components/Review.jsx'
import styled from 'styled-components';

const List = styled.div`
  color: red;
`;

function ReviewList() {
  return (
    <List>
      <Review />
      <Review />
    </List>
  );
}

export default ReviewList;
