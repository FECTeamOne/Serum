import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stars from 'shared/Stars.jsx'
import { StarIcon } from 'assets/StarIcon.jsx'

function RelatedItemsEntry({ img, item, rating, handleCompare }) {
  return (
    <Container>
      <ImageCard img={img}>
        <StarButton type="button" onClick={() => { handleCompare(); }}>
          ⭐
        </StarButton>
      </ImageCard>
      <div>
        {item.category}
      </div>
      <div>
        {item.default_price}
      </div>
      <Stars value={rating} />
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

const ImageCard = styled.div`
  background-image: url(${(props) => props.img});
  background-size:200px 300px;
  background-repeat: no-repeat;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const StarButton = styled.div`
  background: none!important;
  border: none;
  padding: 0!important;
  cursor: pointer;
`;

export default RelatedItemsEntry;
