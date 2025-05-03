// src/components/Button/Button.jsx
import React from 'react';
import './Button.css';

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  disabled = false,
  ...props
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const sizeClass = `button--${size}`;
  const disabledClass = disabled ? 'button--disabled' : '';
  
  return (
    <button
      type="button"
      className={['button', mode, sizeClass, disabledClass].join(' ')}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;