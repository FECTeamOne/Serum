import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import XIcon from 'assets/XIcon.jsx';
import Button from 'shared/Button.jsx';
import { SelectableImageButton } from 'shared/ImageButton.jsx';
import Modal from 'shared/Modal.jsx';
import Carousel from 'shared/Carousel.jsx';
import ZoomView from 'Overview/ZoomView.jsx';

const cursorString = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24"><path fill="white" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>\'), pointer';

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
      const naturalDimensions = {
        width: imageRefs[mainImageIndex].current.naturalWidth,
        height: imageRefs[mainImageIndex].current.naturalHeight,
      };

      return {
        x: Math.max(2.5 * dimensions.width, naturalDimensions.width),
        y: Math.max(2.5 * dimensions.height, naturalDimensions.height),
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
    <SelectableImageButton
      selected={photo.photo_id === mainImageIndex}
      url={photo.thumbnail_url}
      key={`expanded image gallery icon ${photo.photo_id}`}
      aria-label={`Current style icon ${photo.photo_id}`}
      onClick={() => { handleExpandedGalleryScroll(photo.photo_id); }}
      height="var(--size-6)"
      width="var(--size-6)"
    />
  ));

  const images = photos.map((photo, i) => (
    <Button
      key={`expanded image gallery main photo ${photo.photo_id}`}
      aria-label={`Current style ${i} expanded view`}
      height="100vh"
      cursor={cursorString}
      onClick={handleZoomToggle}
    >
      <ExpandedImage
        ref={imageRefs[i]}
        src={photo.url}
        alt={`expanded gallery main ${photo.photo_id}`}
      />
    </Button>
  ));

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
        width="100vw"
        height="100vh"
        scrollIndex={mainImageIndex}
        onScroll={handleExpandedGalleryScroll}
        arrowWidth="var(--size-3)"
        arrowOutline
        buttonMargin="auto"
        buttonWidth="var(--size-7)"
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

const ExpandedImage = styled.img`
  max-height: 100%;
  max-width: calc(100vw - 2 * var(--size-7));
  user-select: none;
  user-drag: none;
`;

const StyledExpandedImageGallery = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledIconGallery = styled.div`
  position:fixed;
  z-index: 1;
  left: var(--space-7);
  bottom: var(--space-6);
  display: flex;
  flex-direction: row;
  gap: var(--space-2);

  button {
    box-sizing: content-box;
    outline: 1px solid var(--color-bg);
  }
`;

const ExitButton = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: var(--space-5);
  padding-right: var(--space-6);
  cursor: default;
`;

export default ExpandedImageGallery;
