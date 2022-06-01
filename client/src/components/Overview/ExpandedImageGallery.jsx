import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'shared/Button.jsx';
import ImageButton from 'shared/ImageButton.jsx';
import Modal from 'shared/Modal.jsx';
import ZoomView from 'Overview/ZoomView.jsx';

function ExpandedImageGallery({ photos, mainImageIndex, onExpandedGalleryIconClick, onExpandedGalleryClose }) {
  // TODO: is this the correct initialization?
  const [imageDimensions, setImageDimensions] = useState({ x: 0, y: 0 });
  const [imageIsZoomed, setImageIsZoomed] = useState(false);
  const [initialZoomCoords, setInitialZoomCoords] = useState({ x: 0, y: 0 });

  const getImageDimensions = useCallback((image) => {
    if (image !== null) {
      setImageDimensions({
        x: 2.5 * image?.naturalWidth,
        y: 2.5 * image?.naturalHeight,
      });
    }
  }, []);

  const handleZoomToggle = (event) => {
    if (!imageIsZoomed) {
      setInitialZoomCoords({
        x: event.clientX,
        y: event.clientY,
      });
    }
    setImageIsZoomed(!imageIsZoomed);
  };

  const icons = photos.map((photo) => (
    <ImageButton
      url={photo.url}
      key={`expanded image gallery icon ${photo.photo_id}`}
      aria-label={`Current style icon ${photo.photo_id}`}
      onClick={() => { onExpandedGalleryIconClick(photo.photo_id); }}
      height="var(--size-6)"
      width="var(--size-6)"
      // TODO: handle selected state
      // selected={i === mainImageIndex}
    />
  ));

  // TODO: add carousel
  // TODO: add icons
  // TODO: add exit button icon
  // TODO: make images not draggable, non clickable
  // TODO: make navbar visible
  return (
    <Styled>
      <StyledIconGallery>
        {icons}
      </StyledIconGallery>
      <Img
        ref={getImageDimensions}
        src={photos[mainImageIndex].url}
        aria-label={`Current style ${mainImageIndex} expanded view`}
        onClick={handleZoomToggle}
      />
      <Modal modalIsActive={imageIsZoomed}>
        <ZoomView
          imageUrl={photos[mainImageIndex].url}
          imageDimensions={imageDimensions}
          initialCoords={initialZoomCoords}
          onZoomClose={handleZoomToggle}
        />
      </Modal>
      <ExitButton onClick={onExpandedGalleryClose}>
        X
      </ExitButton>
    </Styled>
  );
}

const Styled = styled.div`
`;

const StyledIconGallery = styled.div`
  position:fixed;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: var(--space-0);
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
