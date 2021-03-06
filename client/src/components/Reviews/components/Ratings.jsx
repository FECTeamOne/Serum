import React from 'react';
import styled from 'styled-components';
import Stars from 'shared/Stars.jsx';
import { calculateAverageStars } from 'lib/reviewsMetadataFunctions.js'

function Ratings({ reviewsMetadata, name, setCurrentFilter, currentFilter }) {
  const avgStars = calculateAverageStars(reviewsMetadata);
  const highest = Math.max(...Object.values(reviewsMetadata.ratings));
  const handleStarClick = (currentStar) => {
    if (currentFilter.includes(currentStar)) {
      const temp = [...currentFilter];
      temp.splice(currentFilter.indexOf(currentStar), 1);
      setCurrentFilter(temp);
    } else {
      setCurrentFilter(currentFilter.concat([currentStar]));
    }
  };
  return (
    <Container>
      {name}
      <StyledStars>
        <Stars value={avgStars} />
      </StyledStars>
      <br />
      <h3>Rating Breakdown</h3>
      <br />
      {[...Array(5)].map((val, i) => {
        const currentStar = i + 1;
        let currentNumber = reviewsMetadata.ratings[currentStar];
        if (!currentNumber) {
          currentNumber = 0;
        }
        return (
          <AllRatings onClick={() => handleStarClick(currentStar)}>
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

const Container = styled.div`
  margin: 10px;
  font-size: var(--text-4)
`;
const Bar = styled.div`
  background-color: #a6a6a6;
  height: 5px;
  margin: 2px;
`;
const StyledDiv = styled.div`
  padding-right: ${(props) => props.stars}%;
`;
const AllRatings = styled.div`
  cursor: pointer;
  text-align: left;
`;
const StyledStars = styled.div`
  margin-left: 40%;
`;

export default Ratings;
