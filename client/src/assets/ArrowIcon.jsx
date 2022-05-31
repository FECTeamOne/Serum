import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'assets/Icon.jsx';

const StyledArrowIcon = styled(Icon)`
  path {
    fill: ${({ fillColor }) => fillColor};
    stroke: var(--color-bg);
    stroke-width: 10;
  }
`;

function ArrowIcon({ fillColor, ...props }) {
  return (
    <StyledArrowIcon viewBox="0 0 146 304" fillColor={fillColor} {...props}>
      <path d="m87.81345,152.10634l-85.31345,-149.60634l56.18564,0l85.31345,149.60634l-85.31345,149.60622l-56.18564,0l85.31345,-149.60622z" />
    </StyledArrowIcon>
  );
}

ArrowIcon.propTypes = {
  /** The color to be used for the arrow interior */
  fillColor: PropTypes.string,
};

ArrowIcon.defaultProps = {
  fillColor: 'var(--color-main)',
};

export default ArrowIcon;
