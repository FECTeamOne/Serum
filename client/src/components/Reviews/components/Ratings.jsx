import React from 'react';
import styled from 'styled-components';
import Stars from 'App/Stars.jsx'

const Container = styled.div`
  border: 2px solid black;
  margin: 10px;
`;
const Bar = styled.div`
  background-color: #a6a6a6;
  height: 5px;
  margin: 2px;
  border-radius: 20px;
`;
const StyledDiv = styled.div`
  padding-right: ${(props) => props.stars}%;
`;
const AllRatings = styled.div`
  text-align: left;
`;

function Ratings({ reviewsMetadata }) {
  let total = 0;
  let totalStars = 0;
  let highest = 0;
  Object.values(reviewsMetadata.ratings).forEach((num) => { total += num; });
  const temp = Object.entries(reviewsMetadata.ratings)
  temp.forEach((item) => { totalStars += item[0] * item[1]; });
  const avgStars = totalStars / total;
  Object.values(reviewsMetadata.ratings).forEach((num) => {
    if (num > highest) {
      highest = num;
    }
  });
  return (
    // TODO add in stars once that gets merged
    <Container>
      Product name here
      <Stars rating={avgStars} />
      {[...Array(5)].map((val, i) => {
        const currentStar = i + 1;
        let currentNumber = reviewsMetadata.ratings[currentStar];
        if (!currentNumber) {
          currentNumber = 0;
        }
        return (
          <AllRatings>
            {`${currentStar} stars: ${currentNumber}`}
            <StyledDiv stars={100 - (currentNumber / highest) * 100}>
              <Bar />
            </StyledDiv>
          </AllRatings>
        );
      })}
    </Container>
  );
}

export default Ratings;
