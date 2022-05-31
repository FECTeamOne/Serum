import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'shared/Button.jsx';
import ImageButton from 'shared/ImageButton.jsx';

function ExpandedImageGallery({ photos, mainImageIndex, onClose }) {
  const [imageIsZoomedIn, setImageIsZoomedIn] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [imageDims, setImageDims] = useState({x: 0, y: 0});
  const image = useRef(null);

  const photoUrl = photos[mainImageIndex].url;

  // TODO: move to ZoomView
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    //const image = new Image();
    //image.onload = () => 
  }, [photos, mainImageIndex]);


  const relativeCoords = {
    x: (mouseCoords.x / windowWidth),
    y: (mouseCoords.y / windowHeight),
  };

  const journey = {
    x: 2.5 * image.current?.naturalWidth - windowWidth,
    y: 2.5 * image.current?.naturalHeight - windowHeight,
  }

  return (
    <Styled>
      <img
        ref={image}
        src={photoUrl}
        aria-label={`Current style ${mainImageIndex} expanded view`}
        onClick={() => { setImageIsZoomedIn(!imageIsZoomedIn); }}
        style={{
          width: `${image.current?.naturalWidth * 2.5}px`,
          transform: `translate(-${relativeCoords.x * journey.x}px, -${relativeCoords.y * journey.y}px)`,
          transformOrigin: 'top left'
        }}
      />

      <ExitButton onClick={onClose}>
        X
      </ExitButton>
    </Styled>
  );
}
//style={{transform: `scale(2.5) translate(-${relativeCoords.x}%, -${relativeCoords.y}%`}}

const Styled = styled.div`
 `;

const Img = styled.img`
  color: blue;
`;
const Img2 = styled.img`

  ${({ imageIsZoomedIn, mouseCoords, windowWidth, windowHeight }) => {
    if (!imageIsZoomedIn) {
      return css`
        height: 100vh;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
      `;
    }

       console.log(relativeCoords);
    return css`
  `;
  }}
`;

const ExitButton = styled(Button)`
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
`;

export default ExpandedImageGallery;
