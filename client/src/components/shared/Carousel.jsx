import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'shared/Button.jsx';
import ArrowIcon from 'assets/ArrowIcon.jsx';

// TODO: update docs
/**
 * Displays a set of items with buttons to scroll through them
 * @param {Array}  items The items to be displayed
 * @param {Number} size  How many items to display at once
 */
function Carousel({
  items,
  size,
  scrollIndex,
  handleScroll = () => {},
  direction = 'row',
  arrowWidth,
  arrowHeight,
  margin,
  buttonWidth,
  hover,
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
        marginIndex={direction === 'row' ? 1 : 2}
        margin={margin}
        buttonWidth={buttonWidth}
        hover={hover}
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
        marginIndex={Number(direction === 'row')}
        margin={margin}
        marginIndex={direction === 'row' ? 3 : 0}
        buttonWidth={buttonWidth}
        hover={hover}
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

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;

const CarouselItem = styled.div`
  display: ${({ visible }) => (visible ? null : 'none')};
`;

const CarouselButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  width: ${({ buttonWidth }) => buttonWidth};
  margin: ${({ marginIndex, margin }) => {
    const margins = [0, 0, 0, 0];
    margins[marginIndex] = margin;
    return margin ? margins.join(' ') : null;
  }};
  
  &:hover {
    background-color: ${({ hover }) => hover && "rgb(0 0 0 / .1)"};
  }
`;


export default Carousel;
