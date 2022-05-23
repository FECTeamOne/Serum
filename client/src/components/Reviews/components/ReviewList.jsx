import React from 'react';
import Review from 'Reviews/components/Review.jsx';
import styled from 'styled-components';
import { reviews } from '../../../testData.js'

const List = styled.div`
  position: relative;
  border: 2px solid black;
  color: black;
  width: calc(60% - (.5em + 6px));
  float: right;
  min-height: 400px;
  margin-top: 1em;
`;

const AddReviewButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  right:  40%;
  bottom:  2%;
  cursor: pointer;
`;
const MoreReviewsButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  right:  60%;
  bottom:  2%;
  cursor: pointer;
`;

function ReviewList() {
  function HandleAddReview(e) {
    e.preventDefault();
    // TODO this will pull up the review modal window to allow for the user to add a review
  }
  function HandleMoreReviews(e) {
    e.preventDefault();
    // TODO make a request to the api to get more/will change which reviews are being displayed
  }
  return (
    <List>
      <div>{`there are ${reviews.results.length} reviews that are not sorted`}</div>
      {reviews.results.map((review) => <Review review={review} key={review.review_id} />)}
      <AddReviewButton onClick={HandleAddReview}> Add review</AddReviewButton>
      <MoreReviewsButton onClick={HandleMoreReviews}>More reviews</MoreReviewsButton>
    </List>
  );
}

export default ReviewList;
