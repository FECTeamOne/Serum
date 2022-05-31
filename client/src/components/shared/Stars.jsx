import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StarIcon } from 'assets/StarIcon.jsx';
import Button from 'shared/Button.jsx';

/**
 * Five star rating component used to display a static rating
 * or used interactively to capture a rating in a form.
 */
function Stars({
  value,
  interactive,
  label,
  onClick,
}) {
  const [hoverValue, setHoverValue] = useState(0);
  const determineStarFillFromStarsValue = (starValue, starsValue) => {
    if (starValue <= Math.floor(starsValue)) {
      return 1;
    }
    if (starValue <= starsValue + 1) {
      return starsValue - Math.floor(starsValue);
    }
    return 0;
  };

  const handleMouseEnter = (i) => {
    setHoverValue(i);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <StyledStars>
      {Array(5).fill().map((_, i) => {
        const starValue = i + 1;
        if (!interactive) {
          return (
            <StarIcon
              value={determineStarFillFromStarsValue(starValue, value)}
              iconWidth="var(--size-2)"
            />
          );
        }

        return (
          <Button
            value={starValue}
            aria-label={`Select rating value ${starValue} for ${label}`}
            key={starValue}
            onClick={() => {
              if (starValue === value) {
                setHoverValue(0);
                onClick(0);
              } else {
                onClick(starValue);
              }
            }}
            onMouseEnter={() => { handleMouseEnter(i + 1); }}
            onMouseLeave={() => { handleMouseLeave(i + 1); }}
          >
            <StarIcon
              value={value === 0
                ? determineStarFillFromStarsValue(starValue, hoverValue)
                : determineStarFillFromStarsValue(starValue, value)}
              iconWidth="var(--size-2)"
            />
          </Button>
        );
      })}
    </StyledStars>
  );
}

Stars.propTypes = {
  /** The value the stars should represent */
  value: PropTypes.number.isRequired,
  /**
   * Whether the stars should be interactive, e.g. for use to capture a rating in a form
   */
  interactive: PropTypes.bool,
  /**
   * Accesibility label for when Stars is interactive. This value is used to
   * interpolate the accesibility labels for the star buttons.
   */
  label: PropTypes.string,
  /**
   * Click handler to be supplied when Stars are being used interactively.
   * Stars will pass the click handler the value that Stars should now
   * take to represent that change solicited by the click. Thus, the click
   * handler (rating) => { setRating(rating); } will provide the basic
   * interactive functionality provided the parent component has a state
   * variable 'rating'.
   */
  onClick: PropTypes.func,
};

Stars.defaultProps = {
  interactive: false,
  label: undefined,
  onClick: () => {},
};

const StyledStars = styled.div`
  display: flex;
`;

export default Stars;
