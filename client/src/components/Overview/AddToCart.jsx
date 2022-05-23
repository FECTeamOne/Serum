import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Select({ value, options = [], onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

function AddToCart({ skus }) {
  const [selectedSize, setSelectedSize] = useState();
  // should quantities be state? it's computed from selectedSize and i only added it to state so updates to it would trigger a rerender and update the <Select /> for quantity
  const [quantities, setQuantities] = useState([1]);
  const [selectedQuantity, setSelectedQuantity] = useState();

  const sizes = Object.values(skus).map(sku => sku.size);

  useEffect(() => {
    setSelectedSize(Object.values(skus)[0].size);
  }, [skus]);

  useEffect(() => {
    if (selectedSize) {
      const maxQuantity = Object.values(skus).find(sku => sku.size === selectedSize).quantity;
      setQuantities(Array(Math.min(maxQuantity, 15)).fill().map((_, i) => i + 1));
      setSelectedQuantity(1);
    }
  }, [selectedSize]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  return (
    <form>
      <Select
        value={selectedSize}
        options={sizes}
        onChange={handleSizeChange}
      />
      <Select
        value={selectedQuantity}
        options={quantities}
        onChange={handleQuantityChange}
      />
    </form>
  );
}

AddToCart.propTypes = {
  skus: PropTypes.object.isRequired,
};

export default AddToCart;
