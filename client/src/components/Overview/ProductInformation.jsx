import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {StarIconFills, StarIcon} from 'assets/StarIcon.jsx';
import Stars from 'shared/Stars.jsx';

const ProductCategory = styled.h1`
  font-size: var(--text-2);
  text-transform: uppercase;
`;

const ProductName = styled.h2`
  font-size: var(--text-8);
  font-weight: 500;
`;

const StylePrice = styled.span`
  text-decoration: ${({ isOnSale }) => isOnSale && 'line-through'}
`;
const SalePrice = styled.span`
  margin-left: var(--space-2);
`;

const SelectedStyle = styled.h3`
  font-size: var(--text-2);
  text-transform: uppercase;
`;
/**
 * Shows general product information
 */
function ProductInformation({ product, selectedStyle}) {
  return (
    <>
      <Stars
        interactive={true}
        value={0}
        onClick={(e) => console.log(e.currentTarget.value)}
      />
      <br />
      <ProductCategory>{product.category}</ProductCategory>
      <ProductName>{product.name}</ProductName>
      <div>
        <StylePrice isOnSale={selectedStyle?.sale_price}>
          ${selectedStyle?.original_price}
        </StylePrice>
        <SalePrice>
          {selectedStyle?.sale_price ? `$${selectedStyle.sale_price}` : null}
        </SalePrice>
      </div>
      <SelectedStyle>{selectedStyle?.name}</SelectedStyle>
      {/*TODO: add strikethrough for sale*/}
      {/*TODO: show Product Overview*/}
      {/*TODO: add Share buttons*/}
    </>
  );
}

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired,
  selectedStyle: PropTypes.object.isRequired,
};

export default ProductInformation;
