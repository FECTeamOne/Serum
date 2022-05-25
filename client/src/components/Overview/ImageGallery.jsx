import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'App/Carousel.jsx';

function ImageGallery({ photos }) {
  // TODO: create photo_ids for photos
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  const images = photos.map((photo, i) => (
    <img
      key={i}
      src={photo.url}
      alt={`alt text`}
      width="500"
    />
  ));

  const thumbnails = photos.map((photo, i) => (
    <button
      type="button"
      onClick={() => { handleThumbnailClick(i); }}
    >
      <img
        key={i}
        src={photo.url}
        alt={`alt text`}
        width="50"
      />
    </button>
  ));

  return (
    <>
      <Carousel items={thumbnails} size={7} />
      <Carousel items={images} size={1} />
    </>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.objectOf(
    PropTypes.string,
  ).isRequired,
};

export default ImageGallery;
