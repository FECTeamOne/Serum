import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'assets/Icon.jsx';

/**
 * Definitions for the gradient fills used to display fractional
 * values in StarIcon. These definitions need to placed in the DOM
 * so that StarIcon can access them by their id and use them.
 */
function StarIconFills() {
  // If an offset of .25 is used for a star that has a value of .25,
  // it won't look right because the fill will barely be visible.
  // Instead the following values for 0, .25, .5, .75, and 1 have
  // been eyeballed
  const fillOffsets = [0, 0.46, 0.5, 0.565, 1];

  return (
    <InvisibleIcon viewBox="0 0 20 19">
      <defs>
        {fillOffsets.map((fillOffset, i) => (
          <linearGradient key={fillOffset} id={`star-icon-gradient-${i}`}>
            <stop offset={fillOffset} stopColor="black" />
            <stop offset={fillOffset} stopColor="white" />
          </linearGradient>
        ))}
      </defs>
    </InvisibleIcon>
  );
}

/**
 * A star icon capable of displaying fractional values rounded
 * to the nearest fourth.
 */
function StarIcon({
  value,
  ...props
}) {
  // Number.EPSILON is added to attempt to avoid floating point errors
  const valueRoundedToFourth = Math.round((value + Number.EPSILON) * 4);
  return (
    <Icon viewBox="0 0 20 19" {...props}>
      <path fill={`url(#star-icon-gradient-${valueRoundedToFourth})`} d="m10,0l-2.582,6.953l-7.418,0.304l5.822,4.602l-2.002,7.141l6.18,-4.11l6.18,4.11l-2.002,-7.14l5.822,-4.604l-7.418,-0.305l-2.582,-6.951z" />
      <path d="m10,4.308l1.176,3.167l0.347,0.936l0.997,0.042l3.374,0.14l-2.647,2.09l-0.784,0.62l0.27,0.963l0.91,3.25l-2.813,-1.872l-0.83,-0.553l-0.83,0.552l-2.814,1.87l0.91,-3.248l0.27,-0.962l-0.783,-0.62l-2.648,-2.092l3.374,-0.14l0.996,-0.04l0.347,-0.936l1.178,-3.167m0,-4.308l-2.582,6.953l-7.418,0.304l5.822,4.602l-2.002,7.141l6.18,-4.11l6.18,4.11l-2.002,-7.14l5.822,-4.604l-7.418,-0.305l-2.582,-6.951z" />
    </Icon>
  );
}

StarIcon.propTypes = {
  /**
   * The numeric value from 0 to 1 that the star should represent.
   * This value is rounded to the nearest fourth
   */
  value: PropTypes.number,
};

StarIcon.defaultProps = {
  value: 1,
};

const InvisibleIcon = styled(Icon)`
  width: 0;
  height: 0;
`;

export { StarIconFills, StarIcon };
