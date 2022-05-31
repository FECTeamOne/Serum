import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'assets/Icon.jsx';

function ArrowIcon({ outline, ...props }) {
  if (outline) {
    return (
      <Icon viewBox="0 0 275 420" {...props}>
        <path fill="none" stroke="white" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="90" d="m65.5,66l144,144l-144,144" />
        <path fill="none" stroke="black" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="40" d="m65.5,66l144,144l-144,144" />
      </Icon>
    );
  }

  return (
      <Icon viewBox="0 0 200 350" {...props}>
        <path fill="none" stroke="black" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="40" d="m28,31l144,144l-144,144" />
      </Icon>
  );
}

ArrowIcon.propTypes = {
  /**
   * Whether the arrow should have an outline. Useful for
   * increased visibility when overlayed on an image.
   */
  outline: PropTypes.bool,
};

ArrowIcon.defaultProps = {
  outline: false,
};

export default ArrowIcon;
