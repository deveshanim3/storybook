// src/components/Modal/Modal.stories.jsx
import React, { useState } from 'react';
import { Modal } from '../../components/Modals/Modal';
import { Button } from '../../components/Buttons/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // Decorators can be used to wrap stories with additional functionality
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100vh', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};
// Basic Modal Example with useState to control visibility
export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button label="Open Modal" primary onClick={() => setIsOpen(true)} />
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Basic Modal"
      >
        <p>This is a basic modal with a title and content.</p>
        <p>Click outside or the X button to close it.</p>
      </Modal>
    </>
  );
};

// Modal with custom footer
export const WithFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const footer = (
    <>
      <Button label="Cancel" onClick={() => setIsOpen(false)} />
      <Button label="Confirm" primary onClick={() => setIsOpen(false)} />
    </>
  );
  
  return (
    <>
      <Button label="Open Modal with Footer" primary onClick={() => setIsOpen(true)} />
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal with Footer"
        footer={footer}
      >
        <p>This modal has a custom footer with action buttons.</p>
      </Modal>
    </>
  );
};

// Small modal
export const Small = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button label="Open Small Modal" primary onClick={() => setIsOpen(true)} />
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Small Modal"
        size="small"
      >
        <p>This is a small modal.</p>
      </Modal>
    </>
  );
};

// Large modal
export const Large = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button label="Open Large Modal" primary onClick={() => setIsOpen(true)} />
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Large Modal"
        size="large"
      >
        <div style={{ minHeight: '400px' }}>
          <p>This is a large modal with more content.</p>
          <p>It has enough space for complex forms or detailed information.</p>
        </div>
      </Modal>
    </>
  );
};

// Modal that doesn't close when clicking outside
export const NoCloseOnOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const footer = (
    <Button label="Close" primary onClick={() => setIsOpen(false)} />
  );
  
  return (
    <>
      <Button 
        label="Open Modal (No Close on Overlay)" 
        primary 
        onClick={() => setIsOpen(true)} 
      />
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Focused Modal"
        closeOnOverlayClick={false}
        footer={footer}
      >
        <p>This modal will not close when clicking outside.</p>
        <p>You must use the close button or the button in the footer.</p>
      </Modal>
    </>
  );
};