import React, { useEffect, useState } from 'react';
import Review from 'Reviews/components/Review.jsx';
import AddReview from 'Reviews/components/AddReview.jsx';
import styled from 'styled-components';
// import { reviews } from 'tests/testData.js'
import axios from 'axios';

const AddReviewButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  right:  30%;
  bottom:  1%;
  cursor: pointer;
`;
const MoreReviewsButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  position: absolute;
  left:  30%;
  bottom:  1%;
  cursor: pointer;
`;
const StyledSelect = styled.select`
  border: none;
`;

function ReviewList({reviewsMetadata}) {
  const productId = reviewsMetadata.product_id;
  const [currentSort, setCurrentSort] = useState('relevant');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [reviews, setReviews] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() => {
    // TODO add in page once it is not erroring anymore
    // TODO could optimize this at somepoint (making first request before and passing it down)
    axios.get(`/reviews?product_id=${productId}&sort="${currentSort}"&count=3`)
      .then((res) => { setReviews(res.data); })
      .catch((err) => console.log(err));
  }, [currentSort]);
  const handleSort = (e) => {
    setCurrentSort(e.target.value);
  };
  const handleModalToggle = () => {
    setModalIsVisible(!modalIsVisible);
  };
  const handleMoreReviews = () => {
    setPage(page + 1);
    axios.get(`/reviews?product_id=${productId}&sort="${currentSort}"&count=2&page=${page}`)
      .then((res) => {
        res.data.results = [...res.data.results, ...reviews.results];
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  };
  if (modalIsVisible) {
    const productCharacteristics = Object.keys(reviewsMetadata.characteristics);
    return (
      <AddReview
        handleModalToggle={handleModalToggle}
        productCharacteristics={productCharacteristics}
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
      </form>
      {reviews.results.map((review) => <Review review={review} key={review.review_id} />)}
      <br />
      <AddReviewButton onClick={handleModalToggle}> Add review</AddReviewButton>
      <MoreReviewsButton onClick={handleMoreReviews}>More reviews</MoreReviewsButton>
    </>
  );
}

export default ReviewList;
