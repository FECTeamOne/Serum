import React from 'react';
import Review from 'Reviews/components/Review.jsx';
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

const AddReview = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  right:  40%;
  bottom:  2%;
`;
const MoreReviews = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  right:  60%;
  bottom:  2%;
`;

function ReviewList() {
  function AddReview(e) {
    e.preventDefault();
    // TODO this will pull up the review modal window to allow for the user to add a review
  }
  function MoreReviews(e) {
    e.preventDefault();
    // TODO make a request to the api to get more/will change which reviews are being displayed
  }
  return (
    <List>
      <div>there are some reviews that are not sorted</div>
      <Review />
      <Review />
      <AddReview onClick={AddReview}> Add review</AddReview>
      <MoreReviews onClick={MoreReviews}>More reviews</MoreReviews>
    </List>
  );
}

export default ReviewList;
