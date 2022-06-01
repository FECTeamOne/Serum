import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Modal({
  modalIsVisible, handleClose, allChars, currentItemVals, currentRelatedVals,
}) {
  if (!modalIsVisible) {
    return null;
  }

  return (
    <Overlay onClick={handleClose}>
      <Content>
        <BodyWrapper>
          {currentItemVals.map((item) => (
            <Body key={item.id}>
              {item}
            </Body>
          ))}
        </BodyWrapper>
        <BodyWrapper>
          {allChars.map((item) => (
            <Body key={item.id}>
              {item}
            </Body>
          ))}
        </BodyWrapper>
        <BodyWrapper>
          {currentRelatedVals.map((item) => (
            <Body key={item.id}>
              {item}
            </Body>
          ))}
        </BodyWrapper>
      </Content>
    </Overlay>
  );
}

Modal.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  modalIsVisible: PropTypes.number.isRequired,
  handleClose: PropTypes.number.isRequired,
  currentItemVals: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentRelatedVals: PropTypes.arrayOf(PropTypes.object).isRequired,
  allChars: PropTypes.arrayOf(PropTypes.object).isRequired,
  // size: PropTypes.number.isRequired,
};

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
  z-index:1;
`;

const Content = styled.div`
  position: fixed;
  left:400px;
  top:200px;
  right:400px;
  bottom:200px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
`;

const BodyWrapper = styled.div`
  padding: 10px;
  color: #eee;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 200px;
  height: 300px
  margin: 10px;
  padding: 10px;
  color: #eee;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export default Modal;
