import React, { useState } from 'react';
import Carousel from 'App/Carousel.jsx';

function ImageGallery({ photos }) {
  // TODO: create photo_ids for photos
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  }

  const images = photos.map((photo, i) => (
    <img
      key={i}
      src={photo.url}
      alt={`alt text`}
      width="500"
    />
  ));

  const thumbnails = photos.map((photo, i) => (
    <img
      key={i}
      src={photo.url}
      alt={`alt text`}
      width="50"
      onClick={(event) => {handleThumbnailClick(i)}}
    />
  ));

  return (
    <>
      <Carousel items={thumbnails} size={7} />
      <Carousel items={images} size={1} />
    < />
  );
}

export default ImageGallery;
