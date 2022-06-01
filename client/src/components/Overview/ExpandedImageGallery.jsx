import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'shared/Button.jsx';
import ImageButton from 'shared/ImageButton.jsx';
import ZoomView from 'Overview/ZoomView.jsx';

function ExpandedImageGallery({ photos, mainImageIndex, onExpandedGalleryClose }) {
  // TODO: is this the correct initialization
  const [imageDimensions, setImageDimensions] = useState({ x: 0, y: 0 });
  const [imageIsZoomed, setImageIsZoomed] = useState(false);
  const [expandedImageIndex, setExpandedImageIndex] = useState(mainImageIndex);

  const getImageDimensions = useCallback((image) => {
    if (image !== null) {
      setImageDimensions({
        x: 2.5 * image.current?.naturalWidth,
        y: 2.5 * image.current?.naturalHeight,
      });
    }
  }, []);
    //x: 2.5 * image.current?.naturalWidth - windowWidth,
    //y: 2.5 * image.current?.naturalHeight - windowHeight,

  const handleZoomToggle = () => {
    setImageIsZoomed(!imageIsZoomed);
  }

  return (
    <Styled>
      <Img
        callbackRef={getImageDimensions}
        src={photos[mainImageIndex].url}
        aria-label={`Current style ${mainImageIndex} expanded view`}
        onClick={() => { setImageIsZoomed(!imageIsZoomed); }}
      />
      <ZoomView
        imageUrl={photos[mainImageIndex].url}
        imageDimensions={imageDimensions}
        onClick={() => { setImageIsZoomed(!imageIsZoomed); }}
      />
      <ExitButton onClick={onExpandedGalleryClose}>
        X
      </ExitButton>
    </Styled>
  );
}

const Styled = styled.div`
 `;

const Img = styled.img`
  height: 100vh;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;

const ExitButton = styled(Button)`
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
`;

export default ExpandedImageGallery;
