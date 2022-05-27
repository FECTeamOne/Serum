import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'shared/Select.jsx';
import Button from 'shared/Button.jsx';

const StyledAddToCart = styled.form`
  * {
    margin-bottom: var(--space-1);
  }
`;

const StyledSizeQuantity = styled.div`
  padding: 0;

  && * {
    margin-bottom: 0
  }

  & :first-child {
    margin-right: var(--space-1);
  }
`;

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
    <StyledAddToCart>
      <StyledSizeQuantity>
        <Select
          label="Select size"
          value={selectedSize}
          options={sizes}
          onChange={handleSizeChange}
          disabled={!isInStock}
          width="var(--size-10)"
        />
        <Select
          label="Select quantity"
          value={selectedQuantity}
          options={quantities}
          onChange={handleQuantityChange}
          // TODO: might need to adjust this for !isInStock
          disabled={!selectedSize}
          width="var(--size-6)"
        />
      </StyledSizeQuantity>
      <Button
        type="submit"
        onClick={handleAddToCartClick}
        hidden={!isInStock}
        width="var(--size-11)"
      >
        Add to Cart
      </Button>
    </StyledAddToCart>
  );
}

AddToCart.propTypes = {
  skus: PropTypes.object.isRequired,
};

export default AddToCart;
