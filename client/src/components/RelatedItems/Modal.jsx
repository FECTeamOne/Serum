import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items:center;
  justify-content: center;
`;

const Content = styled.div`
  position: fixed;
  left:400px;
  top:200px;
  right:400px;
  bottom:200px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items:center;
  justify-content: center;
`;

const Body = styled.div`
  padding: 10px;
  color: #eee;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

function Modal({ showModal, onClose }) {
  if (!showModal) {
    return null;
  }
  return (
    <Overlay onClick={onClose}>
      <Content>
        <Body>
          This is a modal
        </Body>
      </Content>
    </Overlay>
  );
}

Modal.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  showModal: PropTypes.number.isRequired,
  onClose: PropTypes.number.isRequired,
  // size: PropTypes.number.isRequired,
};

export default Modal;
