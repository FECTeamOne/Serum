import React, { useEffect, useState } from 'react';
import Review from 'Reviews/components/Review.jsx';
import AddReview from 'Reviews/components/AddReview.jsx';
import styled from 'styled-components';
import { reviews, reviewsMetadata } from 'tests/testData.js'
import axios from 'axios';

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
const StyledSelect = styled.select`
  border: none;
`;

function ReviewList() {
  const [currentSort, setCurrentSort] = useState('relevant');
  const [toggleModal, setToggleModal] = useState(false);
  useEffect(() => {
    // TODO axios.get() with currentSort param
  }, [currentSort]);
  const handleSort = (e) => {
    setCurrentSort(e.target.value);
  };
  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
    // TODO this will pull up the review modal window to allow for the user to add a review
  };
  const handleMoreReviews = () => {
    // TODO make a request to the api to get more/will change which reviews are being displayed
  };
  if (toggleModal) {
    const productCharacteristics = Object.keys(reviewsMetadata.characteristics);
    return (
      <AddReview
        handleModalToggle={handleModalToggle}
        productCharacteristics={productCharacteristics}
      />
    );
  }
  return (
    <List>
      <form>
        {`there are ${reviews.results.length} reviews that are sorted by`}
        <StyledSelect value={currentSort} onChange={handleSort}>
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </StyledSelect>
      </form>
      {reviews.results.map((review) => <Review review={review} key={review.review_id} />)}
      <AddReviewButton onClick={handleModalToggle}> Add review</AddReviewButton>
      <MoreReviewsButton onClick={handleMoreReviews}>More reviews</MoreReviewsButton>
    </List>
  );
}

export default ReviewList;
