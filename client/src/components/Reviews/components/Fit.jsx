import React from 'react';
import styled from 'styled-components';

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

const Container = styled.div`
  margin: var(--space-2);
  padding: var(--space-2);
  font-size: var(--text-4)
`;
const Slider = styled.div`
  position: relative;
  margin: var(--space-1);
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
`;

export default Fit;
