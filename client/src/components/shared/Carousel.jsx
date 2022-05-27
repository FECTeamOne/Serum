import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'shared/Button.jsx';
import ArrowIcon from 'assets/ArrowIcon.jsx';

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;

const CarouselItem = styled.div`
  display: ${({ visible }) => (visible ? '' : 'none')};
`;

const CarouselButton = styled(Button)`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

/**
 * Displays a set of items with buttons to scroll through them
 * @param {Array}  items The items to be displayed
 * @param {Number} size  How many items to display at once
 */
function Carousel({
  items,
  size,
  direction = 'row',
  arrowWidth,
  arrowHeight,
}) {
  const [start, setStart] = useState(0);
  const decrement = (event) => {
    setStart(Math.max(0, start - size));
  };

  const increment = (event) => {
    setStart(Math.min(items.length - size + 1, start + size));
  };

  return (
    <StyledCarousel direction={direction}>
      <CarouselButton
        type="button"
        onClick={decrement}
        visible={start !== 0}
      >
        <ArrowIcon
          iconWidth={arrowWidth}
          iconHeight={arrowHeight}
          rotation={2 + Number(direction === 'column')}
        />
      </CarouselButton>
      {items.map((item, i) => (
        <CarouselItem
          visible={start <= i && i < start + size}
          key={item.key}
        >
          {item}
        </CarouselItem>
      ))}
      <CarouselButton
        type="button"
        onClick={increment}
        visible={start < items.length - size}
      >
        <ArrowIcon
          iconWidth={arrowWidth}
          iconHeight={arrowHeight}
          rotation={Number(direction === 'column')}
        />
      </CarouselButton>
    </StyledCarousel>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  size: PropTypes.number.isRequired,
  direction: PropTypes.string,
};

export default Carousel;
