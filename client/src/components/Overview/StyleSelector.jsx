import React from 'react';
import PropTypes from 'prop-types';

function Style({ style, handleStyleSelect, selected }) {
  // TODO: handle selected
  return (
    <div onClick={() => handleStyleSelect(style.style_id)}>
      <img
        src={style.photos[0].thumbnail_url}
        alt={`${style.name} style thumbnail`}
        width="50"
      />
    </div>
  );
}

Style.propTypes = {
  style: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
};

function StyleSelector({ styles, selectedStyleId, handleStyleSelect }) {
  // TODO: use color-thief to extract average color of thumbnails server-side
  const stylesArray = styles.map((style) => (
    <Style
      key={style.style_id}
      style={style}
      handleStyleSelect={handleStyleSelect}
      selected={style.styled_id === selectedStyleId}
    />
  ));

  return (
    <div>
      { stylesArray }
    </div>
  );
}

StyleSelector.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyleId: PropTypes.number.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
};

export default StyleSelector;
