// may add a diffrent file for helfult/report buttons
import React from 'react';
import styled from 'styled-components';

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

function Review({ review }) {
  function ReviewClick(e, type) {
    e.preventDefault();
    // send request to review.review_id, type (helpful or report)
  }
  return (
    <StyledReview>
      <Stars>{review.rating}</Stars>
      {/* need to add fn to display stars */}
      <User>
        {review.reviewer_name}
        ,
        {review.date}
        {/* need to parse data */}
      </User>
      <br />
      <Title>{review.summary}</Title>
      <br />
      <p>{review.body}</p>
      <button type="button" onClick={(e) => ReviewClick(e, 'helpful')}> Helpful? # |</button>
      <button type="button" onClick={(e) => ReviewClick(e, 'report')}>| Report</button>
    </StyledReview>
  );
}

export default Review;
