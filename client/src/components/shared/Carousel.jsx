import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'shared/Button.jsx';
import ArrowIcon from 'assets/ArrowIcon.jsx';

/**
 * Displays a set of items with buttons to scroll through them
 */
function Carousel({
  items,
  size,
  scrollIndex,
  handleScroll,
  direction,
  arrowWidth,
  arrowHeight,
}) {
  const placeInRange = (index) => {
    const adjustedIndex = Math.min(index, items.length - size + 1);
    return Math.max(0, adjustedIndex);
  };

  const adjustedScrollIndex = placeInRange(scrollIndex);

  return (
    <StyledCarousel direction={direction}>

      <CarouselButton
        type="button"
        onClick={() => { handleScroll(placeInRange(adjustedScrollIndex - size), size); }}
        visible={adjustedScrollIndex !== 0}
      >
        <ArrowIcon
          iconWidth={arrowWidth}
          iconHeight={arrowHeight}
          rotation={2 + Number(direction === 'column')}
        />
      </CarouselButton>

      {items.map((item, i) => (
        <CarouselItem
          visible={adjustedScrollIndex <= i && i < adjustedScrollIndex + size}
          key={item.key}
        >
          {item}
        </CarouselItem>
      ))}

      <CarouselButton
        type="button"
        onClick={() => { handleScroll(placeInRange(adjustedScrollIndex + size), size); }}
        visible={adjustedScrollIndex < items.length - size}
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
  /** The items to be displayed in the carousel */
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  /** How many items to display at once */
  size: PropTypes.number.isRequired,
  /** The index in items of the first item that should appear in the
   * carousel. This prop should be used to make Carousel behave as a
   * controlled component.
   */
  scrollIndex: PropTypes.number.isRequired,
  /**
   * Function to be called when one of the carousel buttons is
   * clicked and the carousel should scroll. When this occurs
   * handleScroll is called with two arguments: index and size. Index
   * is the value that scrollIndex should take to reflect the button
   * click and size is the value of size, provided for convenience.
   * Passing handleScroll the following function suffices to provide
   * the basic carousel behavior: (index) => { setScrollIndex(index); },
   * where setScrollIndex is the setter for the state variable passed
   * to scrollIndex.
   */
  handleScroll: PropTypes.func.isRequired,
  /**
   * Carousel direction. Use 'row' for horizontal and 'column' for
   * vertical.
   */
  direction: PropTypes.string,
  /**
   * Width to be used for the arrow icon, e.g. "100px" or "var(--size-3)"
   */
  arrowWidth: PropTypes.string,
  /**
   * Height to be used for the arrow icon, e.g. "100px" or "var(--size-3)"
   */
  arrowHeight: PropTypes.string,
};

Carousel.defaultProps = {
  direction: 'row',
  arrowWidth: 'var(--size-2)',
  arrowHeight: 'var(--size-2)',
};

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

export default Carousel;
