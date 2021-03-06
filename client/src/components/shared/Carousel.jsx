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
  label,
  scrollIndex,
  onScroll,
  direction,
  gap,
  width,
  height,
  arrowWidth,
  arrowHeight,
  arrowOutline,
  buttonWidth,
  buttonHeight,
  buttonMargin,
  buttonsAfterCarousel,
  hover,
}) {
  const placeInRange = (index) => {
    const adjustedIndex = Math.min(index, items.length - size);
    return Math.max(0, adjustedIndex);
  };

  const determineMarginIndex = (button) => {
    if (button === 'back') {
      if (direction === 'row') {
        // right
        return 1;
      }
      if (direction === 'column') {
        if (buttonsAfterCarousel) {
          // top
          return 0;
        }
        // bottom
        return 2;
      }
    }
    if (button === 'forward') {
      if (direction === 'row') {
        // left
        return 3;
      }
      if (direction === 'column') {
        if (buttonsAfterCarousel) {
          // bottom
          return 2;
        }
        // top
        return 0;
      }
    }
  };

  const adjustedScrollIndex = placeInRange(scrollIndex);

  const carouselItems = items.map((item, i) => (
    <CarouselItem
      key={item.key}
      visible={adjustedScrollIndex <= i && i < adjustedScrollIndex + size}
    >
      {item}
    </CarouselItem>
  ));

  return (
    <StyledCarousel direction={direction} gap={gap} height={height} width={width}>

      {buttonsAfterCarousel ? carouselItems : null}

      <CarouselButton
        type="button"
        aria-label={`Back button for ${label} carousel`}
        onClick={() => { onScroll(placeInRange(adjustedScrollIndex - size), size); }}
        visible={adjustedScrollIndex !== 0}
        width={buttonWidth}
        height={buttonHeight}
        buttonMargin={buttonMargin}
        marginIndex={determineMarginIndex('back')}
        buttonsAfterCarousel={buttonsAfterCarousel}
        hover={hover}
      >

        <ArrowIcon
          iconWidth={arrowWidth}
          iconHeight={arrowHeight}
          outline={arrowOutline}
          fillColor={buttonsAfterCarousel && adjustedScrollIndex === 0
            ? 'var(--color-disabled)'
            : undefined}
          rotation={2 + Number(direction === 'column')}
        />
      </CarouselButton>

      {buttonsAfterCarousel ? null : carouselItems}

      <CarouselButton
        type="button"
        aria-label={`Forward button for ${label} carousel`}
        onClick={() => { onScroll(placeInRange(adjustedScrollIndex + size), size); }}
        visible={adjustedScrollIndex < items.length - size}
        width={buttonWidth}
        height={buttonHeight}
        buttonMargin={buttonMargin}
        marginIndex={determineMarginIndex('forward')}
        buttonsAfterCarousel={buttonsAfterCarousel}
        hover={hover}
      >
        <ArrowIcon
          iconWidth={arrowWidth}
          iconHeight={arrowHeight}
          outline={arrowOutline}
          fillColor={buttonsAfterCarousel && (adjustedScrollIndex >= items.length - size)
            ? 'var(--color-disabled)'
            : undefined}
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
  /**
   * Accessibility label for carousel. Used to interpolate aria-labels
   * for the forward and back buttons
   */
  label: PropTypes.string.isRequired,
  /** The index in items of the first item that should appear in the
   * carousel. This prop should be used to make Carousel behave as a
   * controlled component.
   */
  scrollIndex: PropTypes.number.isRequired,
  /**
   * Function to be called when one of the carousel buttons is
   * clicked and the carousel should scroll. When this occurs
   * onScroll is called with two arguments: index and size. Index
   * is the value that scrollIndex should take to reflect the button
   * click and size is the value of size, provided for convenience.
   * Passing hand(eScroll the following function suffices to provide
   * the basic carousel behavior: (index) => { setScrollIndex(index); },
   * where setScrollIndex is the setter for the state variable passed
   * to scrollIndex.
   */
  onScroll: PropTypes.func.isRequired,
  /**
   * Carousel direction. Use 'row' for horizontal and 'column' for
   * vertical.
   */
  direction: PropTypes.string,
  /**
   * Space between carousel items. Also applies to the buttons.
   */
  gap: PropTypes.string,
  /**
   * Width to be used for the arrow icons, e.g. "100px" or "var(--size-3)"
   */
  arrowWidth: PropTypes.string,
  /**
   * Height to be used for the arrow icons, e.g. "100px" or "var(--size-3)"
   */
  arrowHeight: PropTypes.string,
  /** Whether the arrow icons should have an outline. Useful
   * when the buttons are overlayed on an image for increased visibility.
   */
  arrowOutline: PropTypes.bool,
  /** Width for the carousel buttons, e.g. "100px" or "var(--size-3)" */
  buttonWidth: PropTypes.string,
  /**
   * Margin for the carousel buttons, e.g. "100px" or "var(--size-3)".
   * Can be negative to overlap the buttons onto the Carousel.
   */
  buttonMargin: PropTypes.string,
  /**
   * Whether buttons should appear together after the carousel.
   * False means that the back button appears before the carousel items
   * and the forward button appears after them.
   */
  buttonsAfterCarousel: PropTypes.bool,
  /**
   * Whether the buttons should show a transparent background when hovered.
   * Useful when the button is overlapped onto an image to improve
   * visibility/discoverability of the carousel scrolling.
   */
  hover: PropTypes.bool,
};

Carousel.defaultProps = {
  direction: 'row',
  gap: undefined,
  arrowWidth: undefined,
  arrowHeight: undefined,
  arrowOutline: false,
  buttonWidth: undefined,
  buttonHeight: undefined,
  buttonMargin: undefined,
  buttonsAfterCarousel: false,
  hover: false,
};

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
`;

const CarouselItem = styled.div`
  display: ${({ visible }) => (visible ? null : 'none')};
`;

const CarouselButton = styled(Button)`
  flex: 0 0 main-size;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  visibility: ${({ visible, buttonsAfterCarousel }) => {
    if (buttonsAfterCarousel) {
      return 'visible';
    }
    return visible ? 'visible' : 'hidden';
  }};

  margin: ${({ marginIndex, buttonMargin }) => {
    const margins = [0, 0, 0, 0];
    margins[marginIndex] = buttonMargin;
    return buttonMargin ? margins.join(' ') : null;
  }};
  
  &:hover {
    background-color: ${({ hover }) => hover && 'var(--color-transparent-grey)'};
  }
`;

export default Carousel;
