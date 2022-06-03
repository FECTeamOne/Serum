import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import XIcon from 'assets/XIcon.jsx';
import Text from 'shared/Text.jsx'
import Header from 'shared/Header.jsx'

function OutfitItemsEntry({ img, item, handleRemove }) {
  return (
    <Container>
      <ImageCard
        img={img}
      >
        <XIcon onClick={() => { handleRemove(item.id); }} />
      </ImageCard>
      <CardText>
        <Header variant="secondary">
          {item.category}
        </Header>
        <ProductName>
          <Header variant="primary">
            {item.name}
          </Header>
        </ProductName>
        <Text variant="primary">
          $
          {item.default_price}
        </Text>
      </CardText>
    </Container>
  );
}

OutfitItemsEntry.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  item: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  // size: PropTypes.number.isRequired,
};

// const Container = styled.div`
//   text-align: center;
// `;
const Container = styled.div`
  position: relative
`;

const Action = styled.button`
  background: none!important;
  border: none;
  padding: 10px;
  cursor: pointer;
  text-align: right;
  font-size: 27px;
  margin-left: 80%;
`;

const ImageCard = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-1);
  padding: var(--size-3);
  height: var(--size-8);
`;

const ProductName = styled.span`
  flex-grow: 1;
`;


export default OutfitItemsEntry;
