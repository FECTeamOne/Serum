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

const data = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Bewlow average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

function AddReview({ handleAddReview, chars }) {
  const [recommended, setRecommended] = useState(null);
  const [reviewText, setReviewText] = useState({
    summary: '',
    body: '',
    nickname: '',
    email: '',
  });
  const [characteristics, setCharacteristics] = useState({
    Size: null,
    Width: null,
    Comfort: null,
    Quality: null,
    Length: null,
    Fit: null,
  });
  function handelReviewSubmit(e) {
    e.preventDefault();
  }
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
      <div className="Characteristics">
        {chars.map((ele) => (
          <>
            {ele}
            <div>
              <div>
                {characteristics[ele] ? data[ele][characteristics[ele] - 1] : "None selected" }
              </div>
              {[...Array(5)].map((e, j) => {
                const val = j + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      value={val}
                      checked={val === characteristics[ele]}
                      onChange={() => {
                        const newstate = { ...characteristics };
                        newstate[ele] = val;
                        setCharacteristics(newstate);
                      }}
                    />
                    {j + 1}
                  </label>
                );
              })}
            </div>
          </>
        ))}
      </div>
      <div>
        <form onSubmit={handelReviewSubmit}>
          <div>
            Summary
            <input
              type="textarea"
              onChange={(e) => {
                const temp = { ...reviewText };
                temp.summary = e.target.value;
                setReviewText(temp);
              }}
              placeholder="Example: Best purchase ever!" />
          </div>
          <div>
            Review
            <input
              type="textarea"
              placeholder="Why did you like the product or not?"
              onChange={(e) => {
                const temp = { ...reviewText };
                temp.body = e.target.value;
                setReviewText(temp);
              }}
            />
          </div>
          {reviewText.body.length <= 50 ? `Minimum required characters left ${50 - reviewText.body.length}` : 'Minimum reached'}
          <div>
            <input type="file" /> {/* need to add in stateful for this */}
          </div>
          <div>
            nickname
            <input
              type="textarea"
              placeholder="Example: jackson11!"
              onChange={(e) => {
                const temp = { ...reviewText };
                temp.nickname = e.target.value;
                setReviewText(temp);
              }}
            />
          </div>
          For privacy reasons, do not use your full name or email address
          <div>
            Email
            <input
              type="textarea"
              placeholder="Example: jackson11@email.com"
              onChange={(e) => {
                const temp = { ...reviewText };
                temp.email = e.target.value;
                setReviewText(temp);
              }}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </Modal>
  );
}

export default AddReview;
