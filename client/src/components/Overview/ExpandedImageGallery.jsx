import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageButton from 'shared/ImageButton.jsx';

function ExpandedImageGallery({ photos, mainImageIndex, onClose }) {
  const photoUrl = photos[mainImageIndex].url
  return (
    <Styled>
      <img
        src={photoUrl}
        aria-label={`Current style ${mainImageIndex} expanded view`}
        onClick={onClose}
      />
    </Styled>
  );
}

const Styled = styled.div`
position: fixed;

  img {
    height: 100vh;
  }
`;

export default ExpandedImageGallery;
