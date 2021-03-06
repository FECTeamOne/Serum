import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'shared/Select.jsx';
import Button from 'shared/Button.jsx';
import Text from 'shared/Text.jsx';

function AddToCart({ skus }) {
  const [selectedSize, setSelectedSize] = useState('default');
  // TODO: should quantities be state?
  // It's computed from selectedSize and I only added it to state so
  // updates to it would trigger a rerender and update
  // the <Select /> for quantity selection
  const [quantities, setQuantities] = useState([1]);
  const [selectedQuantity, setSelectedQuantity] = useState(String.fromCharCode(8212));
  const [shouldPromptForSize, setShouldPromptForSize] = useState(false);

  const availableSkus = Object.values(skus).filter((sku) => sku.quantity > 0);
  const isInStock = availableSkus.length > 0;
  let sizes;

  if (isInStock) {
    sizes = availableSkus.map((sku) => sku.size);
  } else {
    sizes = ['OUT OF STOCK'];
  }

  useEffect(() => {
    setShouldPromptForSize(false);

    if (isInStock) {
      setSelectedSize('default');
    } else {
      setSelectedSize('OUT OF STOCK');
    }
  }, [skus]);

  useEffect(() => {
    if (selectedSize === 'default' || !isInStock) {
      const mdash = String.fromCharCode(8212);
      setQuantities([mdash]);
      setSelectedQuantity(mdash);
    }
    if (selectedSize !== 'default') {
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
    setShouldPromptForSize(false);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleAddToCartClick = (event) => {
    event.preventDefault();

    if (selectedSize === 'default') {
      setShouldPromptForSize(true);
    } else {
      // TODO: actually add the purchase to cart
      // and send PUT request
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
        <StyledSize
          shouldPromptForSize={shouldPromptForSize}
        >
          <Text variant="secondary">
            Please select size.
          </Text>
          <Select
            label="Select Size"
            value={selectedSize}
            options={sizes}
            selectionPrompt="Select Size"
            onChange={handleSizeChange}
            disabled={!isInStock}
            width="var(--size-11)"
          />
        </StyledSize>
        <Select
          label="Select quantity"
          value={selectedQuantity}
          options={quantities}
          onChange={handleQuantityChange}
          disabled={selectedSize === 'default' || !isInStock}
          width="var(--size-8)"
        />
      </StyledSizeQuantity>
      <Button
        type="submit"
        variant="primary"
        onClick={handleAddToCartClick}
        hidden={!isInStock}
        width="var(--size-12)"
      >
        Add to Cart
      </Button>
    </StyledAddToCart>
  );
}

AddToCart.propTypes = {
  skus: PropTypes.object.isRequired,
};

const StyledSizeQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 0 0 main-size;
  margin-bottom: var(--space-4);
`;

const StyledSize = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: var(--color-red);
    visibility: ${(props) => (props.shouldPromptForSize ? null : 'hidden')};
    padding-bottom: var(--space-1);
  }
`;

const StyledAddToCart = styled.form`
`;

export default AddToCart;
