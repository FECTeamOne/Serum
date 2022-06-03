import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Modal({
  modalIsVisible, handleClose, allChars, currentItemVals, currentRelatedVals,
  currentProductName, currentRelatedName,
}) {
  if (!modalIsVisible) {
    return null;
  }

  return (
    <Overlay onClick={handleClose}>
      <Content>
        <FeatureWrapper>
          <FeatureTitle>{currentProductName}</FeatureTitle>
          {currentItemVals.map((val) => (
            <Feature key={val}>
              {val}
            </Feature>
          ))}
        </FeatureWrapper>
        <FeatureWrapper>
          <FeatureTitle>Features</FeatureTitle>
          {allChars.map((char) => (
            <Feature key={char}>
              {char}
            </Feature>
          ))}
        </FeatureWrapper>
        <FeatureWrapper>
          <FeatureTitle>{currentRelatedName}</FeatureTitle>
          {currentRelatedVals.map((val) => (
            <Feature key={val}>
              {val}
            </Feature>
          ))}
        </FeatureWrapper>
      </Content>
    </Overlay>
  );
}

Modal.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  modalIsVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  currentItemVals: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRelatedVals: PropTypes.arrayOf(PropTypes.string).isRequired,
  allChars: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRelatedName: PropTypes.string.isRequired,
  currentProductName: PropTypes.string.isRequired,
  // size: PropTypes.number.isRequired,
};

const Overlay = styled.div`
  position: fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items:center;
  justify-content: center;
  z-index:1;
`;

const Content = styled.div`
  position: fixed;
  left:350px;
  top:150px;
  right:350px;
  bottom:150px;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 33% 33% 33%;

`;

const FeatureWrapper = styled.div`
  padding: 10px;
  color: #eee;
  // border-top: 1px solid #eee;
  // border-bottom: 1px solid #eee;
  grid-row-start: 2;
  // grid-column-start: 2;
  display: grid;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
`;

const FeatureTitle = styled.h1`
  padding: 10px;
  color: #eee;
  // border-top: 1px solid #eee;
  // border-bottom: 1px solid #eee;
  grid-column-start: 2;
  font-size: var(--text-5);
  margin-bottom: 200px;
`;

const Feature = styled.h1`
  margin: 10px;
  padding: 10px;
  color: #eee;
  // border-top: 1px solid #eee;
  // border-bottom: 1px solid #eee;
  grid-column-start: 2;
  font-size: var(--text-3);
`;

export default Modal;
