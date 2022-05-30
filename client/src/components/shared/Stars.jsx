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
  const determineStarFillFromStarsValue = (star, starsValue) => {
    const starValue = Number(star);

    if (starValue <= Math.floor(starsValue)) {
      return 1;
    }

    if (starValue <= starsValue + 1) {
      return starsValue - Math.floor(starsValue);
    }

    return 0;
  };

  const handleMouseEnter = (event) => {
    setHoverValue(Number(event.currentTarget.value));
  };

  const handleMouseLeave = (event) => {
    setHoverValue(0);
  };

  return (
    <StyledStars>
      {Array(5).fill().map((_, i) => {
        const starValue = i + 1;

        if (!interactive) {
          return (
            <StarIcon
              value={value === 0
                ? interactive && determineStarFillFromStarsValue(starValue, hoverValue)
                : determineStarFillFromStarsValue(starValue, value)}
              iconWidth="var(--size-2)"
            />
          );
        }

        return (
          <Button
            value={`${starValue}`}
            label={`Select rating value ${starValue} for ${label}`}
            key={starValue}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <StarIcon
              value={value === 0
                ? interactive && determineStarFillFromStarsValue(starValue, hoverValue)
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
   * Use event.currentTarget.value to access the value of the star clicked
   * since the button contains children elements that won't have a value and
   * which event.target might refer to.
   */
  onClick: PropTypes.func,
};

Stars.defaultProps = {
  interactive: false,
  onClick: () => {},
};

const StyledStars = styled.div`
  display: flex;
`;

export default Stars;
