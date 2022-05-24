import React, { useState } from 'react';
import styled from 'styled-components';

// TODO Change this to be the modal styles to make it a popup window
const Modal = styled.div`
  position: relative;
  border: 2px solid black;
  color: black;
  width: calc(60% - (.5em + 6px));
  float: right;
  min-height: 400px;
  margin-top: 1em;
`;
// ? below is test data, this will get passed in as props
const chars = ['Size', 'Comfort', 'Quality', 'Length', 'Fit'];
// ?
const data = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Bewlow average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

function AddReview({ handleAddReview }) {
  const [recommended, setRecommended] = useState(null);
  // TODO change this state to be better
  const [currentSize, setCurrentSize] = useState(null);
  const [currentWidth, setCurrentWidth] = useState(null);
  const [currentComfort, setCurrentComfort] = useState(null);
  const [currentQuality, setCurrentQuality] = useState(null);
  const [currentLength, setCurrentLength] = useState(null);
  const [currentFit, setCurrentFit] = useState(null);
  const states = {
    Size: [currentSize, setCurrentSize],
    Width: [currentWidth, setCurrentWidth],
    Comfort: [currentComfort, setCurrentComfort],
    Quality: [currentQuality, setCurrentQuality],
    Length: [currentLength, setCurrentLength],
    Fit: [currentFit, setCurrentFit],
  };
  // TODO
  return (
    <Modal>
      <button onClick={handleAddReview}>X</button>
      <div>
        do you recommend this product?
        <label htmlFor="1">
          <input id="1" type="radio" value="yes" checked={recommended} onChange={() => setRecommended(!recommended)} />
          yes
        </label>
        <label htmlFor="2">
          <input id="2" type="radio" value="no" checked={!recommended} onChange={() => setRecommended(!recommended)} />
          no
        </label>
      </div>
      <div>
        {chars.map((ele) => (
          <>
            {ele}
            <div>
              <div>
              {states[ele][0] ? data[ele][states[ele][0] - 1] : "None selected" }
              </div>
              {[...Array(5)].map((e, j) => {
                const val = j + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      value={val}
                      checked={val === states[ele][0]}
                      onChange={() => states[ele][1](val)}
                    />
                    {j + 1}
                  </label>
                );
              })}
            </div>
          </>
        ))}
      </div>
    </Modal>
  );
}

export default AddReview;
