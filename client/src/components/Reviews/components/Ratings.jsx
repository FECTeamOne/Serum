import React from 'react';
import styled from 'styled-components';
import Stars from 'App/Stars.jsx';

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
  cursor: pointer;
  text-align: left;
`;

function Ratings({ reviewsMetadata, name, setCurrentFilter, currentFilter }) {
  let totalStars = 0;
  const values = Object.values(reviewsMetadata.ratings);
  const total = values.reduce((num, totals) => Number(num) + Number(totals), 0);
  Object.entries(reviewsMetadata.ratings).forEach((item) => { totalStars += item[0] * item[1]; });
  const avgStars = totalStars / total;
  const highest = Math.max(...values);
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
      <Stars rating={avgStars} />
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

export default Ratings;
