import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Display a set of item with buttons to scroll through them
 * @param {Array}  items The items to be displayed
 * @param {Number} size  How many items to display at once
 */
 
function Carousel({ items, size }) {
  const [start, setStart] = useState(0);

  const decrement = (event) => {
    event.preventDefault();
    setStart((oldStart) => Math.max(0, oldStart - size));
  };

  const increment = (event) => {
    event.preventDefault();
    setStart((oldStart) => Math.min(items.length - size + 1, oldStart + size));
  };

  return (
    <div>
      <button type="button" onClick={decrement}>
        &lt;
      </button>
      {items.slice(start, start + size)}
      <button type="button" onClick={increment}>
        &gt;
      </button>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  size: PropTypes.number.isRequired,
};

export default Carousel;
