import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import XIcon from 'assets/XIcon.jsx';
import Button from 'shared/Button.jsx';
import ImageButton from 'shared/ImageButton.jsx';
import Modal from 'shared/Modal.jsx';
import Carousel from 'shared/Carousel.jsx';
import ZoomView from 'Overview/ZoomView.jsx';

function ExpandedImageGallery({
  photos,
  mainImageIndex,
  handleExpandedGalleryScroll,
  onExpandedGalleryClose
}) {
  const [imageIsZoomed, setImageIsZoomed] = useState(false);
  // TODO: should this be in state or just a variable?
  const [initialZoomCoords, setInitialZoomCoords] = useState({ x: 0, y: 0 });

  const imageRefs = {};
  photos.forEach((photo) => {
    imageRefs[photo.photo_id] = useRef(null);
  });

  const getImageDimensions = () => {
    if (imageRefs[mainImageIndex].current !== null) {
      const dimensions = imageRefs[mainImageIndex].current.getBoundingClientRect();
      return {
        x: 2.5 * dimensions.width,
        y: 2.5 * dimensions.height,
      };
    }
  };

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
      onClick={() => { handleExpandedGalleryScroll(photo.photo_id); }}
      height="var(--size-6)"
      width="var(--size-6)"
      // TODO: handle selected state
      // selected={i === mainImageIndex}
    />
  ));

  const images = photos.map((photo, i) => (
    <Button
      ref={imageRefs[i]}
      key={`expanded image gallery main photo ${photo.photo_id}`}
      aria-label={`Current style ${i} expanded view`}
      height="100vh"
      cursor="zoom-in"
      onClick={handleZoomToggle}
    >
      <img
        src={photo.url}
        height="100%"
        alt={`expanded gallery main ${photo.photo_id}`}
      />
    </Button>
  ));

  // TODO: make carousel fixed width
  // TODO: make icons stay on top of image
  // TODO: add exit button icon
  // TODO: make images not draggable, non clickable
  // TODO: make navbar visible
  return (
    <StyledExpandedImageGallery>
      <StyledIconGallery>
        {icons}
      </StyledIconGallery>
      <Carousel
        label="expanded image gallery"
        items={images}
        size={1}
        width="100%"
        scrollIndex={mainImageIndex}
        onScroll={handleExpandedGalleryScroll}
        arrowWidth="var(--size-3)"
        arrowOutline
        buttonWidth="var(--size-7)"
        buttonMargin="auto"
      />
      <Modal modalIsActive={imageIsZoomed}>
        <ZoomView
          imageUrl={photos[mainImageIndex].url}
          imageDimensions={getImageDimensions()}
          initialCoords={initialZoomCoords}
          onZoomClose={handleZoomToggle}
        />
        <ExitButton onClick={onExpandedGalleryClose}>
          <XIcon
            iconWidth="var(--size-5)"
            iconHeight="var(--size-5)"
          />
        </ExitButton>
      </Modal>
      <ExitButton>
        <Button
          aria-label="Exit expanded image gallery"
          onClick={onExpandedGalleryClose}
        >
          <XIcon
            iconWidth="var(--size-5)"
            iconHeight="var(--size-5)"
          />
        </Button>
      </ExitButton>
    </StyledExpandedImageGallery>
  );
}

ExpandedImageGallery.propTypes = {
  photos: PropTypes.array,
};

const StyledExpandedImageGallery = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledIconGallery = styled.div`
  position:fixed;
  z-index: 1;
  left: var(--space-6);
  bottom: var(--space-4);
  display: flex;
  flex-direction: row;
  gap: var(--space-0);

  button {
    box-sizing: content-box;
    border: 1px solid var(--color-bg);
  }
`;

const ExitButton = styled(Button)`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: var(--space-5);
  padding-right: var(--space-6);
  cursor: default;
`;

export default ExpandedImageGallery;
