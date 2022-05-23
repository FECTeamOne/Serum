import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from 'Overview/StyleSelector.jsx';
import AddToCart from 'Overview/AddToCart.jsx';

<<<<<<< HEAD
/**
 * Shows general product information
 */
function ProductInformation({ product, styles, selectedStyleId, handleStyleSelect }) {
  // TODO: how to avoid optional chaining?
=======
function ProductInformation({ product, styles, selectedStyleId }) {
>>>>>>> 0aa29b1 (Add product details to ProductInformation)
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
<<<<<<< HEAD
      {selectedStyle?.original_price}
      {selectedStyle?.sale_price !== 0 ? selectedStyle?.sale_price : null}
      {/*TODO: show Product Overview*/}
      {/*TODO: add Share buttons*/}
      <StyleSelector
        styles={styles}
        selectedStyleId={selectedStyleId}
        handleStyleSelect={handleStyleSelect}
      />
=======
      {selectedStyle.original_price}
      {selectedStyle.sale_price !== 0 ? selectedStyle.sale_price : null}
      <StyleSelector
        styles={styles}
        selectedStyleId={selectedStyleId}/>
>>>>>>> 0aa29b1 (Add product details to ProductInformation)
      <AddToCart />
    </div>
  );
}

ProductInformation.propTypes = {
<<<<<<< HEAD
  product: PropTypes.object.isRequired,
  styles: PropTypes.array.isRequired,
  selectedStyleId: PropTypes.number.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
=======
  product: PropTypes.object,
  styles: PropTypes.array,
>>>>>>> 0aa29b1 (Add product details to ProductInformation)
};

export default ProductInformation;
