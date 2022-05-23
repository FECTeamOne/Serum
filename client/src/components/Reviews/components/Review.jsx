// may add a diffrent file for helfult/report buttons
import React from 'react';
import styled from 'styled-components';

const StyledReview = styled.div`
  border: 2px solid black;
  margin: 10px;
`;

function Review() {
  return (
    <StyledReview>
      <h2>Review title</h2>
      {/* <br /> */}
      <p>Review body text, this will have to be a min of 50 char and a max of 1000 char</p>
      <button type="button"> Helpful? |</button>
      <button type="button">Report</button>
    </StyledReview>
  );
}

export default Review;
