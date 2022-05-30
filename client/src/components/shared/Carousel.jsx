import React, { useEffect, useState } from 'react';
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
  display: ${({ visible }) => (visible ? null : 'none')};
`;

const CarouselButton = styled(Button)`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  margin: ${({ marginIndex, margin }) => {
    const margins = [0, 0, 0, 0];
    margins[marginIndex] = margin;
    console.log(margins);
    return margin ? margins.join(' ') : null;
  }};

  &:hover {
    //background-color: red;
  }
  svg {
    filter: drop-shadow(.5px .5px 0px rgb(255 255 255 / 1))
    drop-shadow(.5px -.5px 0px rgb(255 255 255 / 1))
    drop-shadow(-.5px .5px 0px rgb(255 255 255 / 1))
    drop-shadow(-.5px -.5px 0px rgb(255 255 255 / 1))
  }
`;

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
