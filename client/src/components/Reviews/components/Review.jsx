// may add a diffrent file for helfult/report buttons
import React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow, parseISO } from 'date-fns';
import Stars from 'App/Stars.jsx'

const StyledReview = styled.div`
  border: 2px solid black;
  margin: 10px;
`;
const Star = styled.p`
  padding-top: 10px;
  float: left;
  padding-left: 10px;
`;
const User = styled.p`
  padding-top: 10px;
  float: right;
  padding-right: 10px;
`;
const Title = styled.h2`
  padding-top: 15px;
  font-size: 150%;
`;
const Buttons = styled.button`
  background: none!important;
  border: none;
  cursor: pointer;
`;

function Review({ review }) {
  let date;
  let rec = '';
  const handleReviewClick = (e, type) => {
    e.preventDefault();
    // send request to review.review_id, type (helpful or report)
  };
  const parseData = () => {
    date = formatDistanceToNow(parseISO(review.date));
    if (review.recommend) {
      rec = '✅';
    }
  };
  parseData();
  return (
    <StyledReview>
      <Star>
        <Stars rating={review.rating} />
      </Star>
      {/* need to add fn to display stars */}
      <User>
        {`${rec} ${review.reviewer_name}, ${date} ago`}
      </User>
      <br />
      <Title>{review.summary}</Title>
      <br />
      <p>{review.body}</p>
      <Buttons onClick={(e) => handleReviewClick(e, 'helpful')}>
        {`Helpful? ${review.helpfulness}`}
      </Buttons>
      <Buttons type="button" onClick={(e) => handleReviewClick(e, 'report')}>| Report</Buttons>
    </StyledReview>
  );
}

export default Review;
