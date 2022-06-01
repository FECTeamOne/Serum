import React, { useEffect, useState } from 'react';
import Review from 'Reviews/components/Review.jsx';
import AddReview from 'Reviews/components/AddReview.jsx';
import styled from 'styled-components';
import axios from 'axios';

function ReviewList({reviewsMetadata, currentFilter }) {
  const productId = reviewsMetadata.product_id;
  const [currentSort, setCurrentSort] = useState('relevant');
  const [toggleModal, setToggleModal] = useState(false);
  const [reviews, setReviews] = useState({});
  const [count, setCount] = useState(2);
  const [isMoreReviews, setIsMoreReviews] = useState(true);
  useEffect(() => {
    setCount(2);
    axios.get(`/reviews?product_id=${productId}&sort=${currentSort}&count=2`)
      .then((res) => { setReviews(res.data); })
      .catch((err) => console.log(err));
  }, [currentSort]);
  useEffect(() => {
    if (!isMoreReviews) {
      return;
    }
    axios.get(`/reviews?product_id=${productId}&sort=${currentSort}&count=${count}`)
      .then((res) => {
        const filter = currentFilter.map((current) => Number(current));
        if (filter.length !== 0) {
          res.data.results = res.data.results.filter((each) => filter.indexOf(each.rating) !== -1);
        }
        setReviews(res.data);
      })
      .catch(() => setIsMoreReviews(false));
  }, [count, currentFilter]);
  const handleSort = (e) => {
    setCurrentSort(e.target.value);
  };
  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };
  const handleMoreReviews = () => {
    setCount(count + 2);
  };
  if (toggleModal) {
    return (
      <AddReview
        handleModalToggle={handleModalToggle}
        allCharacteristics={reviewsMetadata.characteristics}
        productId={Number(productId)}
      />
    );
  }
  if (!reviews.results) {
    return '';
  }
  return (
    <Right>
      <form>
        {`${reviews.results.length} reviews sorted by`}
        <StyledSelect value={currentSort} onChange={handleSort}>
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </StyledSelect>
        {currentFilter.length > 0 ? `Filtered by ${currentFilter.join(', ')} stars` : ''}
      </form>
      <AllReviews>
        {reviews.results.map((review) => <Review review={review} key={review.review_id} />)}
      </AllReviews>
      <br />
      <AddReviewButton onClick={handleModalToggle}> Add review</AddReviewButton>
      {isMoreReviews
      && <MoreReviewsButton onClick={handleMoreReviews}>More reviews</MoreReviewsButton>}
    </Right>
  );
}

const AddReviewButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  right:  25%;
  bottom:  3px;
  cursor: pointer;
  font-size: var(--text-4)
`;
const MoreReviewsButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  left:  25%;
  bottom:  3px;
  cursor: pointer;
  font-size: var(--text-4)
`;
const StyledSelect = styled.select`
  border: none;
`;
const AllReviews = styled.div`
  overflow: scroll;
  height: 400px;
  width: 500px;
`;
const Right = styled.div`
  position: relative;
  color: black;
  width: calc(60% - (.5em + 6px));
  float: right;
  min-height: 400px;
  margin-top: 1em;
  height: 450px;
`;

export default ReviewList;
