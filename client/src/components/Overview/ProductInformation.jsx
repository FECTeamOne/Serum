import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {StarIconFills, StarIcon} from 'assets/StarIcon.jsx';
import Stars from 'shared/Stars.jsx';
import Text from 'shared/Text.jsx';
import Header from 'shared/Header.jsx';

/**
 * Shows general product information
 */
function ProductInformation({ product, selectedStyle}) {
  return (
    <>
      {/*TODO: get actual rating, show total number of reviews, and link to reviews*/}
      <RatingInformation>
        <Stars
          value={4.7}
        />
        <Text variant="primary">(0)</Text>
      </RatingInformation>
      <Header variant="tertiary">{product.category}</Header>
      <Header variant="title">{product.name}</Header>
      <ProductDetail>
        <Text variant="primary">{product.slogan}</Text>
        <br />
        <Text variant="secondary">{product.description}</Text>
      </ProductDetail>
      <div>
        <StylePrice isOnSale={selectedStyle?.sale_price}>
          <Text variant="primary">${selectedStyle?.original_price}</Text>
        </StylePrice>
        <SalePrice>
          <Text variant="primary">{selectedStyle?.sale_price ? `$${selectedStyle.sale_price}` : null}</Text>
        </SalePrice>
      </div>
      <Header variant="primary">{selectedStyle?.name}</Header>
      {/*TODO: show Product Overview*/}
      {/*TODO: add Share buttons*/}
    </>
  );
}

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired,
  selectedStyle: PropTypes.object.isRequired,
};

const RatingInformation = styled.span`
  margin-bottom: var(--space-4);
  display: flex;
  align-items: flex-start;
  gap: var(--space-0);

  h1 {
    color: red;
  }
`;

const ProductDetail = styled.div`
  flex-grow: 1;
`;

const StylePrice = styled.span`
  text-decoration: ${({ isOnSale }) => isOnSale && 'line-through'}
`;
const SalePrice = styled.span`
  margin-left: var(--space-2);
  color: var(--color-red);
`;

export default ProductInformation;
