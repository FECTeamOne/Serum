import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'shared/Carousel.jsx';
import ImageButton from 'shared/ImageButton.jsx';

function ImageGallery({ photos }) {
  // for use as key
  photos.forEach((photo, i) => {
    photo.photo_id = i.toString();
  });

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [thumbnailScrollIndex, setThumbnailScrollIndex] = useState(0);

  const thumbnailGallerySize = 4;

  // could this cause problems with the augmentation of photos with ids?
  // if so augment in overview before passing (should make a copy to be augmented first)
  useEffect(() => {
    setMainImageIndex(Math.min(mainImageIndex, photos.length));
    setThumbnailScrollIndex(
      Math.min(thumbnailScrollIndex, photos.length - thumbnailGallerySize + 1)
    );
  }, [photos]);

  const handleThumbnailClick = (photo_id) => {
    const index = photos.findIndex((photo) => photo.photo_id === photo_id);
    setMainImageIndex(index);
  };

  const handleThumbnailScroll = (scrollTo) => {
    setThumbnailScrollIndex(scrollTo);
  };
  const handleMainImageScroll = (scrollTo) => {
    setMainImageIndex(scrollTo);

    if (scrollTo < thumbnailScrollIndex
      || thumbnailScrollIndex + thumbnailGallerySize - 1 < scrollTo) {
      setThumbnailScrollIndex(scrollTo);
    }
  };

  const images = photos.map((photo, i) => (
    <ImageButton
      url={photo.url}
      key={`image gallery main photo ${photo.photo_id}`}
      aria-label={`Current style ${i}`}
      width="var(--size-12)"
      height="var(--size-14)"
    />
  ));

  const thumbnails = photos.map((photo) => (
    <ImageButton
      url={photo.url}
      key={`image gallery thumbnail ${photo.photo_id}`}
      aria-label={`Current style thumbnail ${photo.photo_id}`}
      onClick={() => { handleThumbnailClick(photo.photo_id); }}
      height="var(--size-8)"
      width="var(--size-7)"
      // selected={i === mainImageIndex}
    />
  ));

  return (
    <>
      <Carousel
        items={thumbnails}
        size={thumbnailGallerySize}
        direction="column"
        arrowHeight="var(--space-4)"
        arrowWidth="var(--space-4)"
        scrollTo={thumbnailScrollIndex}
        handleScroll={handleThumbnailScroll}
      />
      <Carousel
        items={images}
        size={1}
        arrowHeight="var(--space-6)"
        arrowWidth="var(--space-6)"
        scrollTo={mainImageIndex}
        handleScroll={handleMainImageScroll}
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
