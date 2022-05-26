import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`;

/**
 * Displays a set of items with buttons to scroll through them
 * @param {Array}  items The items to be displayed
 * @param {Number} size  How many items to display at once
 */
function Carousel({ items, size, direction = 'row' }) {
  const [start, setStart] = useState(0);
  const decrement = (event) => {
    event.preventDefault();
    setStart((oldStart) => Math.max(0, oldStart - size));
  };

  const increment = (event) => {
    event.preventDefault();
    setStart((oldStart) => Math.min(items.length - size, oldStart + size));
  };

  return (
    <StyledCarousel direction={direction}>
      <button type="button" onClick={decrement}>
        &lt;
      </button>
      {items.slice(start, start + size)}
      <button type="button" onClick={increment}>
        &gt;
      </button>
    </StyledCarousel>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  size: PropTypes.number.isRequired,
  direction: PropTypes.string,
};

export default Carousel;
