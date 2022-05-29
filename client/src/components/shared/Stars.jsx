import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StarIcon } from 'assets/StarIcon.jsx';
import Button from 'shared/Button.jsx';


function Stars({
  value,
  onClick,
  interactive
}) {
  const [hoverValue, setHoverValue] = useState(0)
  const determineFillFromStarsValue = (starValue, starsValue) => {
    starValue = Number(starValue);
    if (starValue <= Math.floor(starsValue)) {
      return 1;
    }

    if (starValue <= starsValue + 1) {
      const fractionalPart = starsValue - Math.floor(starsValue);
      // Number.EPSILON is added to attempt to avoid floating point errors
      const roundedToFourth = Math.round((fractionalPart + Number.EPSILON) * 4) / 4;
      return roundedToFourth;
    }

    return 0;
  };

  const handleMouseEnter = (event) => {
    console.log('hovering', event.currentTarget.value);
    setHoverValue(Number(event.currentTarget.value));
  };

  const handleMouseLeave = (event) => {
    console.log('hovering', event.currentTarget.value);
    setHoverValue(0);
  };

  return (
    <StyledStars>
      {Array(5).fill().map((_, i) => {
        const starValue = i + 1;
        return (
          <Button
            value={`${starValue}`}
            key={starValue}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <StarIcon
              value={value === 0
                ? interactive && determineFillFromStarsValue(starValue, hoverValue)
                : determineFillFromStarsValue(starValue, value)
              }
              iconWidth="var(--size-2)"
            />
          </Button>
      )})}
    </StyledStars>
  );
}

Stars.propTypes = {
  value: PropTypes.number.isRequired,
  // use event.currentTarget.value
  onClick: PropTypes.func,
  interactive: PropTypes.bool,
}

Stars.defaultProps = {
  interactive: false,
}

const StyledStars = styled.div`
  display: flex;
`;

export default Stars;
