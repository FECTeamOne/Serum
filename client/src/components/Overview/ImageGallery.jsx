import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'App/Carousel.jsx';

function ImageGallery({ photos }) {
  // TODO: create photo_ids for photos
  const [mainImageIndex, setMainImageIndex] = useState(0);
  photos.forEach((photo, i) => {
    photo.photo_id = i;
  });

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  const images = photos.map((photo, i) => (
    <img
      key={`image gallery main phtoo ${photo.photo_id}`}
      src={photo.url}
      alt={`Current style ${i}`}
      width="500"
    />
  ));

  const thumbnails = photos.map((photo, i) => (
    <button
      key={`image gallery thumbnail ${photo.photo_id}`}
      type="button"
      onClick={() => { handleThumbnailClick(i); }}
    >
      <img
        src={photo.url}
        alt={`Current style thumnail ${i}`}
        width="50"
      />
    </button>
  ));

  return (
    <>
      <Carousel
        items={thumbnails}
        size={7}
        direction="column"
      />
      <Carousel items={images} size={1} />
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
