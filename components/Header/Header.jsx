// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

export const Header = ({
  logo,
  title,
  navItems = [],
  actions = [],
  variant = 'light',
  sticky = false,
  className = '',
  ...props
}) => {
  const variantClass = `header--${variant}`;
  const stickyClass = sticky ? 'header--sticky' : '';
  
  return (
    <header 
      className={['header', variantClass, stickyClass, className].join(' ')}
      {...props}
    >
      <div className="header__branding">
        {logo && (
          <div className="header__logo">
            {typeof logo === 'string' ? (
              <img src={logo} alt={`${title} logo`} />
            ) : (
              logo
            )}
          </div>
        )}
        {title && <h1 className="header__title">{title}</h1>}
      </div>
      
      {navItems.length > 0 && (
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                {typeof item === 'string' ? (
                  <a href="/#" className="header__nav-link">{item}</a>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
      
      {actions.length > 0 && (
        <div className="header__actions">
          {actions.map((action, index) => (
            <div key={index} className="header__action">
              {action}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;