// may add a diffrent file for helfult/report buttons
import React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow, parseISO } from 'date-fns';

const StyledReview = styled.div`
  border: 2px solid black;
  margin: 10px;
`;
const Stars = styled.p`
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
  padding-top: 10px;
  font-size: 150%;
`;
const Buttons = styled.button`
  background: none!important;
  border: none;
  cursor: pointer;
`;

function Review({ review }) {
  let date;
  let rec;
  function ReviewClick(e, type) {
    console.log('clicked')
    e.preventDefault();
    // send request to review.review_id, type (helpful or report)
  }
  function PareseData() {
    date = formatDistanceToNow(parseISO(review.date));
    if (review.recommend) {
      rec = '✅';
    }
  }
  PareseData();
  return (
    <StyledReview>
      <Stars>{review.rating}</Stars>
      {/* need to add fn to display stars */}
      <User>
        {rec}
        {review.reviewer_name}
        {`, ${date} ago`}
      </User>
      <br />
      <Title>{review.summary}</Title>
      <br />
      <p>{review.body}</p>
      <Buttons onClick={(e) => ReviewClick(e, 'helpful')}>
        {`Helpful? ${review.helpfulness}`}
      </Buttons>
      <Buttons type="button" onClick={(e) => ReviewClick(e, 'report')}>| Report</Buttons>
    </StyledReview>
  );
}

export default Review;
