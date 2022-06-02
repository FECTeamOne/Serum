import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Modal({ children, modalIsActive }) {
  if (!modalIsActive) {
    return null;
  }

  return (
    <StyledModal>
      {children}
    </StyledModal>
  );
};

const StyledModal = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg);
  position: fixed;
  top: 0;
  left: 0;
`;

export default Modal;
