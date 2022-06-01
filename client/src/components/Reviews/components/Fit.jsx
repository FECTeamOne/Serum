import React from 'react';
import styled from 'styled-components';

const stats = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Bewlow average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

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
            <Test>
              <div>{stats[characteristic][0]}</div>
              <div>{stats[characteristic][4]}</div>
            </Test>
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

const Test = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--text-2);
`;
const Container = styled.div`
  margin: var(--space-2);
  padding: var(--space-2);
  font-size: var(--text-4);
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
  top: 83%;
  font-weight: bold;
`;
const Bar = styled.div`
  background-color: #a6a6a6;
  height: 5px;
  margin: 2px;
`;

export default Fit;
