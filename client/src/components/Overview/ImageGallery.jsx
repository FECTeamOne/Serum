import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from 'shared/Carousel.jsx';
import { ImageButton, SelectableImageButton } from 'shared/ImageButton.jsx';
import Modal from 'shared/Modal.jsx';
import ExpandedImageGallery from 'Overview/ExpandedImageGallery.jsx';

function ImageGallery({ photos }) {
  // for use as key
  photos.forEach((photo, i) => {
    photo.photo_id = i;
  });

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [thumbnailScrollIndex, setThumbnailScrollIndex] = useState(0);
  const [expandedViewIsActive, setExpandedViewIsActive] = useState(false);

  const thumbnailGallerySize = 6;

  const handleThumbnailClick = (photo_id) => {
    const index = photos.findIndex((photo) => photo.photo_id === photo_id);
    setMainImageIndex(index);
  };

  const handleThumbnailScroll = (scrollIndex) => {
    setThumbnailScrollIndex(scrollIndex);
  };
  const handleMainImageScroll = (scrollIndex) => {
    setMainImageIndex(scrollIndex);

    if (scrollIndex < thumbnailScrollIndex
      || thumbnailScrollIndex + thumbnailGallerySize - 1 < scrollIndex) {
      setThumbnailScrollIndex(scrollIndex);
    }
  };

  const thumbnails = photos.map((photo) => (
    <SelectableImageButton
      selected={photo.photo_id === mainImageIndex}
      url={photo.thumbnail_url}
      key={`image gallery thumbnail ${photo.photo_id}`}
      aria-label={`Current style thumbnail ${photo.photo_id}`}
      onClick={() => { handleThumbnailClick(photo.photo_id); }}
      height="var(--size-8)"
      width="var(--size-7)"
    />
  ));

  const images = photos.map((photo, i) => (
    <ImageButton
      url={photo.url}
      key={`image gallery main photo ${photo.photo_id}`}
      aria-label={`Current style ${i}`}
      width="var(--size-13)"
      height="var(--size-15)"
      onClick={() => { setExpandedViewIsActive(true); }}
      cursor="zoom-in"
    />
  ));

  return (
    <StyledImageGallery>
      <Carousel
        label="thumbnail gallery"
        items={thumbnails}
        size={thumbnailGallerySize}
        scrollIndex={thumbnailScrollIndex}
        onScroll={handleThumbnailScroll}
        direction="column"
        gap="var(--size-1)"
        buttonMargin="var(--size-4)"
        buttonHeight="var(--size-5)"
        buttonsAfterCarousel
        arrowWidth="var(--size-1)"
      />
      <Carousel
        label="main image gallery"
        items={images}
        size={1}
        scrollIndex={mainImageIndex}
        onScroll={handleMainImageScroll}
        arrowWidth="var(--size-2)"
        arrowOutline
        buttonWidth="var(--size-7)"
        buttonMargin="calc(-1 * var(--size-7))"
        hover
      />
      <Modal modalIsActive={expandedViewIsActive}>
        <ExpandedImageGallery
          photos={photos}
          mainImageIndex={mainImageIndex}
          handleExpandedGalleryScroll={handleMainImageScroll}
          onExpandedGalleryClose={() => { setExpandedViewIsActive(false); }}
        />
      </Modal>
    </StyledImageGallery>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string,
    ),
  ).isRequired,
};

const StyledImageGallery = styled.section`
  display:flex;
  gap: var(--space-1);
`;

export default ImageGallery;
