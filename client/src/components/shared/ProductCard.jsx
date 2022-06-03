import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from 'shared/Text.jsx'
import Header from 'shared/Header.jsx'
import Stars from 'shared/Stars.jsx'

/**
 *
 */
export default function ProductCard({ product, imageUrl, rating }) {
  return (
    <StyledProductCard>
      <Img src={imageUrl} />
      <CardText>
        <Header variant="secondary">
          {product.category}
        </Header>
        <ProductName>
          <Header variant="primary">
            {product.name}
          </Header>
        </ProductName>
        <Text variant="primary">
          ${product.default_price}
        </Text>
        <Stars value={rating} />
      </CardText>
    </StyledProductCard>
  );
}

// height: var(--size-11);
const StyledProductCard = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  width: var(--size-10);
  border: var(--size-00) solid var(--color-main);
`;

const Img = styled.img`
  width: var(--size-10);
  height: var(--size-10);
  object-fit: cover;
  object-position: center;
  flex: 0 0 main-size;
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
