import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'shared/Button.jsx';
import parseStyle from 'lib/parseStyle.js';

/**
 * Displays thumbnails of the product styles and
 * allows style selection by clicking on a thumbnail
 */
function Style({ style, handleStyleSelect, selected }) {
  // TODO: handle selected overlay
  return (
    <StyledStyle selected={selected}>
      <Button
        aria-label={`${style.name} style selector`}
        onClick={() => handleStyleSelect(style.style_id)}
       >
        <StyleColors colors={parseStyle(style.name)} />
      </Button>
    </StyledStyle>
  );
}

const StyledStyle = styled.div`
  button {
    border: var(--space-00) solid var(--color-bg);
    outline: ${({ selected }) => selected
    ? 'var(--space-00) solid var(--color-main)'
    : '1px solid var(--color-main)'
  };
  }
`;

const StyleColors = styled.div`
  width: var(--size-5);
  height: var(--size-5);

  ${({ colors }) => {
    if (colors.length === 1) {
      return css`
        background: ${colors[0]};
      `;
    } else {
    return css`
      background: linear-gradient( -45deg, ${colors[0]}, ${colors[0]} 47%, white 47%, white 53%, ${colors[1]} 53% ); 
    `;
  }
  }}
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

Style.propTypes = {
  style: PropTypes.object.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

StyleSelector.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyleId: PropTypes.number.isRequired,
  handleStyleSelect: PropTypes.func.isRequired,
};

const StyledStyleSelector = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
`;

export default StyleSelector;
