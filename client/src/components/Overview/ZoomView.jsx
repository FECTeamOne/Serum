import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'shared/Button.jsx';
import ImageButton from 'shared/ImageButton.jsx';

function ZoomView({ imageUrl, imageDimensions, initialCoords, onZoomClose }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [mouseCoords, setMouseCoords] = useState(initialCoords);

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

    window.addEventListener('pointermove', handleMouseMove);
    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  const maxImageCoords = {
    x: imageDimensions.x - windowWidth,
    y: imageDimensions.y - windowHeight,
  };

  const relativeCoords = {
    x: (mouseCoords.x / windowWidth),
    y: (mouseCoords.y / windowHeight),
  };

  // TODO: add check for whether window dimensions are larger than image
  // TODO: use event data from click that opened ZoomView to set initial position
  return (
    <div>
      <img
        onClick={onZoomClose}
        src={imageUrl}
        aria-label={`Current style zoomed view`}
        style={{
          width: `${imageDimensions.x}px`,
          transform: `translate(-${relativeCoords.x * maxImageCoords.x}px, -${relativeCoords.y * maxImageCoords.y}px)`,
          transformOrigin: 'top left'
        }}
      />
    </div>
  )
}

export default ZoomView;
