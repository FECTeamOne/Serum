import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {StarIconFills, StarIcon} from 'assets/StarIcon.jsx';
import Stars from 'shared/Stars.jsx';
import Text from 'shared/Text.jsx';
import Header from 'shared/Header.jsx';
import A from 'shared/A.jsx';

/**
 * Shows general product information
 */
function ProductInformation({
  product,
  selectedStyle,
  rating,
  totalReviews }) {
  return (
    <>
      {/*TODO: get actual rating, show total number of reviews, and link to reviews*/}
      <RatingInformation href="#ratings-and-reviews">
        <Stars
          value={rating}
        />
        <Text variant="primary">({totalReviews || 0})</Text>
      </RatingInformation>
      <Header variant="tertiary">{product.category}</Header>
      <Header variant="title">{product.name}</Header>
      <Slogan>
        <Text variant="primary">{product.slogan}</Text>
      </Slogan>
      <Description>
        <Text variant="secondary">{product.description}</Text>
      </Description>
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

const RatingInformation = styled(A)`
  margin-bottom: var(--space-4);
  display: flex;
  align-items: flex-start;
  gap: var(--space-0);
`;

const Slogan = styled.div`
  margin-top: var(--space-6);
  margin-bottom: var(--space-1);
  font-style: italic;
`;

const Description = styled.div`
  flex-grow: 1;
  line-height: 1.5;
`;

const StylePrice = styled.span`
  text-decoration: ${({ isOnSale }) => isOnSale && 'line-through'}
`;
const SalePrice = styled.span`
  margin-left: var(--space-2);
  color: var(--color-red);
`;

export default ProductInformation;
