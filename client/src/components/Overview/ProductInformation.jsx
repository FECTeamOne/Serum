import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from 'Overview/StyleSelector.jsx';
import AddToCart from 'Overview/AddToCart.jsx';

function ProductInformation({ product, styles, selectedStyleId, handleStyleSelect }) {
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
      {selectedStyle.original_price}
      {selectedStyle.sale_price !== 0 ? selectedStyle.sale_price : null}
      <StyleSelector
        styles={styles}
        selectedStyleId={selectedStyleId}/>
        handleStyleSelect={handleStyleSelect}
      <AddToCart />
    </div>
  );
}

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired,
  styles: PropTypes.array.isRequired,
};

export default ProductInformation;
