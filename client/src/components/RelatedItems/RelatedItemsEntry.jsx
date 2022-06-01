import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stars from 'shared/Stars.jsx'

function RelatedItemsEntry({ img, item, rating, handleCompare }) {
  return (
    <Container>
      <img
        src={img}
        width="200"
        height="300"
        alt={`Thumbnail for related item ${item.name}`}
      />
      <Action onClick={() => { handleCompare(); }}>
        Compare
      </Action>
      <div>
        {item.category}
      </div>
      <Stars value={rating} />
      <div>
        {item.default_price}
      </div>
    </Container>
  );
}

RelatedItemsEntry.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  item: PropTypes.object.isRequired,
  handleCompare: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  // size: PropTypes.number.isRequired,
};

// const Container = styled.div`
//   text-align: center;
// `;

const Container = styled.div`
  position: relative
`;

const Action = styled.button`
  position: absolute;
  top: 5px;
  right: 45%;
  width: 80px;
  height: 35px;
  background-color: #555;
  color: white;
  font-size: 15px;
  padding: 5px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export default RelatedItemsEntry;
