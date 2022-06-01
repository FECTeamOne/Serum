import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function OutfitItemsEntry({ img, item, handleRemove }) {
  return (
    <Container>
      <img
        src={img}
        width="200"
        height="300"
        alt={`Thumbnail for Outfit item ${item.name}`}
      />
      <Action onClick={() => { handleRemove(); }}>
        Remove
      </Action>
      <div>
        {item.category}
      </div>
      <div>
        {item.default_price}
      </div>
    </Container>
  );
}

OutfitItemsEntry.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  item: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
  handleRemove: PropTypes.object.isRequired,
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
  right: 800;
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

export default OutfitItemsEntry;
