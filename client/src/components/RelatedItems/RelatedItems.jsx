import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;
const Left = styled.div`
  border: 2px solid black;
  width: 384px;
  float: left;
  height: 500px;
  margin-top: 1em;
`;

function RelatedItems() {
  return (
    <Container>
      <Left>
        <img
          src="https://source.unsplash.com/oEcsvUfCr1c/384x192"
          width="384"
          height="192"
          alt="header"
        />
        <div>
          CATEGORY
        </div>
        <div>
          TEXT
        </div>
      </Left>
    </Container>
  );
}

export default RelatedItems;
