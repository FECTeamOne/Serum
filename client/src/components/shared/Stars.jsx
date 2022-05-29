import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StarIcon } from 'assets/StarIcon.jsx';
import Button from 'shared/Button.jsx';

function Stars({
  value,
  onClick,
  interactive,
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
