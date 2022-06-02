import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'shared/Button.jsx';

const cursorString = 'url(\'data:image/svg+xml;utf8,<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"></path><path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>\'), pointer';

function ZoomView({ imageUrl, imageDimensions, initialCoords, onZoomClose }) {
  const [mouseCoords, setMouseCoords] = useState(initialCoords);
  const [windowDimensions, setWindowDimensions] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        x: window.innerWidth,
        y: window.innerHeight
      });
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

  const calculateImageTranslation = (dimension) => {
    if (windowDimensions[dimension] > imageDimensions[dimension]) {
      const imageCoordinte = (windowDimensions[dimension] - imageDimensions[dimension]) / 2;
      return `${imageCoordinte}px`;
    }

    const maxImageCoordinate = imageDimensions[dimension] - windowDimensions[dimension];
    const relativeCoordinate = mouseCoords[dimension] / windowDimensions[dimension];
    const imageCoordinate = relativeCoordinate * maxImageCoordinate;
    return `-${imageCoordinate}px`;
  };

  // TODO: use event data from click that opened ZoomView to set initial position
  return (
    <Button
      cursor={cursorString}
      onClick={onZoomClose}
    >
      <ZoomViewImage
        src={imageUrl}
        aria-label={`Current style zoomed view`}
        style={{
          width: `${imageDimensions.x}px`,
          transform: `translate(${calculateImageTranslation('x')}, ${calculateImageTranslation('y')})`,
          transformOrigin: 'top left'
        }}
      />
    </Button>
  )
}

const ZoomViewImage = styled.img`
  user-select: none;
  user-drag: none;
`;
export default ZoomView;
