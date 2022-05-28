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

function Modal({
  showModal, onClose, currentChars, currentItemVals, currentRelatedVals,
}) {
  if (!showModal) {
    return null;
  }
  console.log('currentItemVals: ', currentItemVals);
  console.log('currentChars: ', currentChars);
  console.log('currentRelatedVals: ', currentRelatedVals);

  return (
    <Overlay onClick={onClose}>
      <Content>
        <BodyWrapper>
          {currentItemVals.map((item) => (
            <Body>
              {item}
            </Body>
          ))}
        </BodyWrapper>
        <BodyWrapper>
          {currentChars.map((item) => (
            <Body>
              {item}
            </Body>
          ))}
        </BodyWrapper>
        <BodyWrapper>
          {currentRelatedVals.map((item) => (
            <Body>
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
  showModal: PropTypes.number.isRequired,
  onClose: PropTypes.number.isRequired,
  currentItemVals: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentRelatedVals: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentChars: PropTypes.arrayOf(PropTypes.object).isRequired,
  // size: PropTypes.number.isRequired,
};

export default Modal;
