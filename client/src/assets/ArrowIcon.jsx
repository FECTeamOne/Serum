import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'assets/Icon.jsx';

const SVG = styled(Icon)`
  path {
    fill: ${({ fillColor }) => fillColor || 'var(--color-main)'};
    stroke: var(--color-bg);
  }
`;

function ArrowIcon({ outline, fillColor, ...props }) {
  if (false) {
    return (<Svg viewBox="0 0 176 404" {...props}>
      <polygon points="23.99999237060547,0 0,18 138.09600067138672,202.12899780273438 0,386.25799560546875 23.99999237060547,404.25799560546875 175.59600067138672,202.12899780273438 "/>
    </Svg>)
  }
  if (false) {
  return (
    <Icon viewBox="0 0 146 304" {...props}>
      <path fill="black" stroke="black" strokeWidth="1" d="m88,152.10634l-85,-100.60634l-0.31436,-55l141.31345,155.60634l-143.31345,155.60622l2.81436,-61l84.5,-94.60622z" />
    </Icon>
  );
  }

  return (
    <SVG viewBox="0 0 146 304" fillColor={fillColor} {...props}>
      <path strokeWidth="10" d="m87.81345,152.10634l-85.31345,-149.60634l56.18564,0l85.31345,149.60634l-85.31345,149.60622l-56.18564,0l85.31345,-149.60622z" />
    </SVG>
  );
}

ArrowIcon.propTypes = {
  fillColor: PropTypes.string,
  /**
   * Whether the arrow should have an outline. Useful for
   * increased visibility when overlayed on an image.
   */
  outline: PropTypes.bool,
};

ArrowIcon.defaultProps = {
  fillColor: 'currentColor',
  outline: false,
};

export default ArrowIcon;
