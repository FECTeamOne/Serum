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
        <Header variant="tertiary">
          {product.category}
        </Header>
        <ProductName>
          <Header variant="primary">
            {product.name}
          </Header>
        </ProductName>
        <Text variant="secondary">
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
  justify-content: space-between;
  gap: var(--size-0);
  padding: var(--size-2);
  height: var(--size-8);

  && span {
    font-size: var(--text-1);
  }

  && h2 {
    font-size: var(--text-2);
  }

  && h4 {
    font-size: var(--text-1);
  }

`;

const ProductName = styled.span`
  flex-grow: 1;
`;
