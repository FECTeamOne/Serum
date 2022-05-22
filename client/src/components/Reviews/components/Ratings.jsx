import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid black;
  margin: 10px;
`;

function Ratings() {
  return (
    <Container>
      <div>stars</div>
      <div>1, 2, 3, 4, 5 num of each</div>
    </Container>
  );
}

export default Ratings;
