// src/components/Input/Input.jsx
import React from 'react';
import './Input.css';
export const Input = ({
  label,
  placeholder,
  type = 'text',
  helperText,
  error = false,
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  const inputId = `input-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random().toString(36).substring(2, 9)}`;
  const errorClass = error ? 'input--error' : '';
  const disabledClass = disabled ? 'input--disabled' : '';
  
  return (
    <div className={['input-wrapper', errorClass, disabledClass, className].join(' ')}>
      {label && (
        <label className="input__label" htmlFor={inputId}>
          {label} {required && <span className="input__required">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        className="input__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {helperText && (
        <div 
          id={`${inputId}-helper`}
          className={`input__helper-text ${error ? 'input__helper-text--error' : ''}`}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;