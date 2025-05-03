// src/components/Modal/Modal.jsx
import React, { useEffect } from 'react';
import './Modal.css';
export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnOverlayClick = true,
  className = '',
  ...props
}) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'visible';
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };
  const sizeClass = `modal--${size}`;
  return (
    <div className="modal-overlay" onClick={handleOverlayClick} aria-modal="true" role="dialog">
      <div 
        className={['modal', sizeClass, className].join(' ')} 
        {...props}
      >
        <div className="modal__header">
          {title && <h2 className="modal__title">{title}</h2>}
          <button className="modal__close-button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        
        <div className="modal__content">
          {children}
        </div>
        
        {footer && (
          <div className="modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;