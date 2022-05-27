import React from 'react';
import styled from 'styled-components';
import Button from 'shared/Button.jsx';

const ImageButton = styled(Button)`
  background-image: ${({ url }) => `url('${url}')`};
  background-position: center;
  background-size: cover;
`;

export default ImageButton;
