import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: make Select take all unspecified props from parent

const StyledSelect = styled.select`
  margin: 0;
  border-radius: 0;
  text-align-last: left;
  padding-left: var(--space-2);
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);
  width: ${(props) => props.width};
`;
function Select({
  label,
  value,
  options,
  defaultSelection,
  disabled,
  onChange,
  ...rest
}) {
  return (
    <StyledSelect aria-label={label} value={value} onChange={onChange} {...rest}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  defaultSelection: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  options: [],
  disabled: false,
};

export default Select;
