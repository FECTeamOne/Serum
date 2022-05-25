import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
`;
const Slider = styled.div`
  position: relative;
  margin: 5px;
`;
const Pointer = styled.label`
  display: float;
  position: absolute;
  z-index: 2;
  left: ${props => props.data}%;
  top: 75%;
  font-weight: bold;
`;
const Bar = styled.div`
  background-color: #a6a6a6;
  height: 5px;
  margin: 2px;
  border-radius: 20px;
`;

function Fit({ reviewsMetadata }) {
  return (
    <Container>
      {Object.keys(reviewsMetadata.characteristics).map((characteristic) => {
        let data = reviewsMetadata.characteristics[characteristic].value * 20;
        if (data > 95) {
          data = 95;
        }
        return (
          <Slider key={reviewsMetadata.characteristics[characteristic].id}>
            {characteristic}
            <Bar>
              <Pointer data={data}>
                ^
              </Pointer>
            </Bar>
          </Slider>
        );
      })}
    </Container>
  );
}

export default Fit;
