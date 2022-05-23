import React, {useState} from 'react';
import PropTypes from 'prop-types';

function AddToCart({ skus }) {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState();

  const sizes = Object.values(skus).map(sku => (
    sku.size
  ));

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  return (
    <form>
      <select
        value={selectedSize}
        onChange={handleSizeChange}
      >
        {sizes.map(size => (
          <option value={size}>{size}</option>
        ))}
      </select>
    </form>
  );
}

AddToCart.propTypes = {
  skus: PropTypes.object.isRequired,
};

export default AddToCart;
