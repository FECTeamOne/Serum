import React from 'react';
import PropTypes from  'prop-types';
import styled from 'styled-components';
import Button from 'shared/Button.jsx';

/**
 * A button that uses an image for its display
 */
const ImageButton = styled(Button)`
  background-image: ${({ url }) => `url('${url}')`};
  background-position: center;
  background-size: cover;
  cursor: ${({ cursor }) => cursor || 'pointer'};
`;

ImageButton.propTypes = {
  /** The url/src for the image to be used in the button */
  url: PropTypes.string.isRequired,
};

export default ImageButton;
