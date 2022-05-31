import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A generic Select component meant as a replacement for
 * the select tag.
 */
const StyledSelect = styled.select`
  margin: 0;
  border-radius: 0;
  border: 1px solid;
  text-align-last: left;
  padding-left: var(--space-2);
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);
  width: ${({ width }) => width};
  border-color: ${({ disabled }) => (disabled ? 'var(--color-disabled)' : 'var(--color-main)')};
  color: ${({ disabled }) => (disabled ? 'var(--color-disabled)' : 'var(--color-main)')};
`;

function Select({
  value,
  onChange,
  label,
  options,
  selectionPrompt,
  disabled,
  ...props
}) {
  return (
    <StyledSelect
      aria-label={label}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    >
      {selectionPrompt ? (
        <option
          key="default"
          value={"default"}
          disabled
        >
          {selectionPrompt}
        </option>
      ) : null}
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
}

Select.propTypes = {
  /** The value the select should take. This is the
   * prop for using Select as a controlled component */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /* Change handler for the Select. Used to make
   * Select a controlled component */
  onChange: PropTypes.func.isRequired,
  /* Accesibility label text */
  label: PropTypes.string.isRequired,
  /** Contains the text of the options that are to be used in Select.
   * The elements are used for both the displayed text and the
   * value of the option itself. */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  /* String to be displayed by default, e.g. as a placeholder to
   * prompt the user to the purpose of the Select: 'Select Size'.
   * Initialize the state variable used for the 'value' parameter
   * to 'default' in this case. */
  selectionPrompt: PropTypes.string,
  /* Whether the Select should be disabled */
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  selectionPrompt: null,
  disabled: false,
};

export default Select;
