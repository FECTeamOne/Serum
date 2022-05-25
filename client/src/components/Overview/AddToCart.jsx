import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// TODO: make Select take all unspecified props from parent
function Select({
  label,
  value,
  options,
  defaultSelection,
  disabled,
  onChange,
}) {
  return (
    <select aria-label={label} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  defaultSelection: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  options: [],
  disabled: false,
};

function AddToCart({ skus }) {
  const [selectedSize, setSelectedSize] = useState();
  // TODO: should quantities be state?
  // It's computed from selectedSize and I only added it to state so
  // updates to it would trigger a rerender and update
  // the <Select /> for quantity selection
  const [quantities, setQuantities] = useState([1]);
  const [selectedQuantity, setSelectedQuantity] = useState();
  const [promptForSize, setPromptForSize] = useState(false);

  const availableSkus = Object.values(skus).filter((sku) => sku.quantity > 0);
  const isInStock = availableSkus.length > 0;
  let sizes = [];

  if (isInStock) {
    sizes = availableSkus.map((sku) => sku.size);
  } else {
    sizes = ['OUT OF STOCK'];
  }

  useEffect(() => {
    if (isInStock) {
      // TODO: change to 'Select Size'
      setSelectedSize(Object.values(availableSkus)[0].size);
    }
  }, [skus]);

  useEffect(() => {
    if (selectedSize) {
      const maxQuantity = Object.values(skus)
        .find((sku) => sku.size === selectedSize)
        .quantity;

      // TODO: pull out range function into lib and use it here
      setQuantities(Array(Math.min(maxQuantity, 15)).fill().map((_, i) => i + 1));
      setSelectedQuantity(1);
    }
  }, [selectedSize]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
    setPromptForSize(false);
  };

  const handleAddToCartClick = (event) => {
    event.preventDefault();

    // TODO: account for default selection
    if (!selectedSize) {
      setPromptForSize(true);
    } else {
      // TODO: actually add the purchase to cart
      const selectedSku = Object.keys(skus)
        .find((sku) => skus[sku].size === selectedSize);
      const purchase = {
        sku: selectedSku,
        quantity: selectedQuantity,
      };
    }
  };

  return (
    <form>
      <Select
        label="Select size"
        value={selectedSize}
        options={sizes}
        onChange={handleSizeChange}
        disabled={!isInStock}
      />
      <Select
        label="Select quantity"
        value={selectedQuantity}
        options={quantities}
        onChange={handleQuantityChange}
        // TODO: might need to adjust this for !isInStock
        disabled={!selectedSize}
      />
      <button
        type="submit"
        onClick={handleAddToCartClick}
        hidden={!isInStock}
      >
        Add to Cart
      </button>
    </form>
  );
}

AddToCart.propTypes = {
  skus: PropTypes.object.isRequired,
};

export default AddToCart;
