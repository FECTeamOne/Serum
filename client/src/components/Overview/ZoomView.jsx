import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'shared/Button.jsx';
import ImageButton from 'shared/ImageButton.jsx';
import Modal from 'shared/Modal.jsx';

function ZoomView({ imageUrl, imageDimensions }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

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

  const maxImageCoords = {
    x: 2.5 * imageDimensions.x - windowWidth,
    y: 2.5 * imageDimensions.y - windowHeight,
  };
  const relativeCoords = {
    x: (mouseCoords.x / windowWidth),
    y: (mouseCoords.y / windowHeight),
  };

  // TODO: add check for whether window dimensions are larger than image
  return (
    <div>
      <img
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
