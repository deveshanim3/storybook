// src/components/Card/Card.jsx
import React from 'react';
import './Card.css';

export const Card = ({
  title,
  subtitle,
  children,
  elevation = 'medium',
  rounded = true,
  className = '',
  ...props
}) => {
  const elevationClass = `card--elevation-${elevation}`;
  const roundedClass = rounded ? 'card--rounded' : '';
  
  return (
    <div 
      className={['card', elevationClass, roundedClass, className].join(' ')}
      {...props}
    >
      {title && <h3 className="card__title">{title}</h3>}
      {subtitle && <div className="card__subtitle">{subtitle}</div>}
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};
export default Card;