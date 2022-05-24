import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from 'Overview/StyleSelector.jsx';
import AddToCart from 'Overview/AddToCart.jsx';

/**
 * Shows general product information
 */
function ProductInformation({ product, styles, selectedStyleId, handleStyleSelect }) {
  // TODO: how to avoid optional chaining?
  const selectedStyle = styles?.find(style => style.style_id === selectedStyleId);

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
      {selectedStyle?.sale_price !== 0 ? selectedStyle?.sale_price : null}
      <StyleSelector
        styles={styles}
        selectedStyleId={selectedStyleId}
        handleStyleSelect={handleStyleSelect}
      />
      <AddToCart />
    </div>
  );
}

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired,
  styles: PropTypes.array.isRequired,
  selectedStyleId: PropTypes.number.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
};

export default ProductInformation;
