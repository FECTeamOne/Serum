import React, { useEffect, useState } from 'react';
import Review from 'Reviews/components/Review.jsx';
import AddReview from 'Reviews/components/AddReview.jsx';
import styled from 'styled-components';
import axios from 'axios';

const AddReviewButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  right:  30%;
  bottom:  3px;
  cursor: pointer;
`;
const MoreReviewsButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  left:  30%;
  bottom:  3px;
  cursor: pointer;
`;
const StyledSelect = styled.select`
  border: none;
`;
const AllReviews = styled.div`
  overflow: scroll;
  height: 386px;
  width: 500px;
`;

function ReviewList({reviewsMetadata, currentFilter }) {
  const productId = reviewsMetadata.product_id;
  const [currentSort, setCurrentSort] = useState('relevant');
  const [toggleModal, setToggleModal] = useState(false);
  const [reviews, setReviews] = useState({});
  const [count, setCount] = useState(2);
  useEffect(() => {
    setCount(2);
    axios.get(`/reviews?product_id=${productId}&sort=${currentSort}&count=2`)
      .then((res) => { setReviews(res.data); })
      .catch((err) => console.log(err));
  }, [currentSort]);
  useEffect(() => {
    if (!reviews.results) {
      return;
    }
    if (reviews.results.length % 2 !== 0) {
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
      .catch((err) => console.log(err));
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
    <>
      <form>
        {`there are ${reviews.results.length} reviews that are sorted by`}
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
      <MoreReviewsButton onClick={handleMoreReviews}>More reviews</MoreReviewsButton>
    </>
  );
}

export default ReviewList;
