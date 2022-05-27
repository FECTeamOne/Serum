import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'shared/Carousel.jsx';
import ImageButton from 'shared/ImageButton.jsx';

function ImageGallery({ photos }) {
  // TODO: create photo_ids for photos
  const [mainImageIndex, setMainImageIndex] = useState(0);
  photos.forEach((photo, i) => {
    photo.photo_id = i.toString();
  });

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  const images = photos.map((photo, i) => (
    <ImageButton
      url={photo.url}
      key={`image gallery main phtoo ${photo.photo_id}`}
      aria-label={`Current style ${i}`}
      width="var(--size-12)"
      height="var(--size-14)"
    />
  ));

  const thumbnails = photos.map((photo, i) => (
    <ImageButton
      url={photo.url}
      key={`image gallery thumbnail ${photo.photo_id}`}
      aria-label={`Current style thumbnail ${i}`}
      onClick={() => { handleThumbnailClick(i); }}
      height="var(--size-8)"
      width="var(--size-7)"
    />
  ));

  return (
    <>
      <Carousel
        items={thumbnails}
        size={4}
        direction="column"
        arrowHeight="var(--space-4)"
        arrowWidth="var(--space-4)"
      />
      <Carousel
        items={images}
        size={1}
        arrowHeight="var(--space-6)"
        arrowWidth="var(--space-6)"
      />
    </>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    ),
  ).isRequired,
};

export default ImageGallery;
