import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageButton from 'shared/ImageButton.jsx';

/**
 * Displays thumbnails of the product styles and
 * allows style selection by clicking on a thumbnail
 */
function Style({ style, handleStyleSelect, selected }) {
  // TODO: handle selected overlay
  return (
    <ImageButton
      url={style.photos[0].thumbnail_url}
      aria-label={`${style.name} style selector`}
      onClick={() => handleStyleSelect(style.style_id)}
      width="var(--size-6)"
      height="var(--size-6)"
    />
  );
}

Style.propTypes = {
  style: PropTypes.object.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};


const StyledStyleSelector = styled.section`
  display: flex;
  flex-wrap: wrap;

  * {
    margin-bottom: 0;
  }
`;

function StyleSelector({ styles, selectedStyleId, handleStyleSelect }) {
  // TODO: use color-thief to extract color of thumbnails server-side
  // or parse style name
  return (
    <StyledStyleSelector>
      {styles.map((style) => (
        <Style
          key={style.style_id}
          style={style}
          handleStyleSelect={handleStyleSelect}
          selected={style.style_id === selectedStyleId}
        />
      ))}
    </StyledStyleSelector>
  );
}

StyleSelector.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyleId: PropTypes.number.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
};

export default StyleSelector;
