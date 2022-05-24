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
const chars = ['Size', 'Comfort'];

function AddReview({ handleAddReview }) {
  const [recommended, setRecommended] = useState(false);
  return (
    <Modal>
      <button onClick={handleAddReview}>X</button>
      do you recommend this product?
      <div>
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
        {chars.map((ele, i) => (
          <>
            {ele}
            <div>
              {[...Array(5)].map((e, j) => (
                <label>
                  <input type="radio" name={ele} value={j + 1} />
                  {j + 1}
                </label>
              ))}
            </div>
          </>
        ))}
      </div>
    </Modal>
  );
}

export default AddReview;
