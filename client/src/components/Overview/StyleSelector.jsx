import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays thumbnails of the product styles and
 * allows style selection by clicking on a thumbnail
 */
function Style({ style, handleStyleSelect, selected }) {
  // TODO: handle selected overlay
  return (
    <button
      type="button"
      onClick={() => handleStyleSelect(style.style_id)}
    >
      <img
        src={style.photos[0].thumbnail_url}
        alt={`${style.name} style thumbnail`}
        width="50"
      />
    </button>
  );
}

Style.propTypes = {
  style: PropTypes.object.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

function StyleSelector({ styles, selectedStyleId, handleStyleSelect }) {
  // TODO: use color-thief to extract color of thumbnails server-side
  // or parse style name
  return (
    <div>
      {styles.map((style) => (
        <Style
          key={style.style_id}
          style={style}
          handleStyleSelect={handleStyleSelect}
          selected={style.style_id === selectedStyleId}
        />
      ))}
    </div>
  );
}

StyleSelector.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyleId: PropTypes.number.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
};

export default StyleSelector;
