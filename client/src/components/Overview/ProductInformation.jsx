import React from 'react';
import PropTypes from 'prop-types';

/**
 * Shows general product information
 */
function ProductInformation({ product, selectedStyle}) {
  return (
    <div>
      {/*TODO: add rating stars*/}
      *****
      <br />
      {product.category}
      <br />
      {product.name}
      <br />
      Style &gt; {selectedStyle?.name}
      <br />
      {/*TODO: add strikethrough for sale*/}
      {/*TODO: show Product Overview*/}
      {/*TODO: add Share buttons*/}
      {selectedStyle?.original_price}
      {selectedStyle?.sale_price !== 0 ? selectedStyle?.sale_price : null}
    </div>
  );
}

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired,
  selectedStyle: PropTypes.object.isRequired,
};

export default ProductInformation;
