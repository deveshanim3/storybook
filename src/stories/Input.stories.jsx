// src/components/Input/Input.stories.jsx
import React, { useState } from 'react';
import { Input } from '../../components/Input/Input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

// Basic input
export const Basic = {
  args: {
    placeholder: 'Enter text',
  },
};

// Labeled input
export const WithLabel = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

// Input with helper text
export const WithHelperText = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters',
  },
};

// Error state
export const WithError = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'Please enter a valid email address',
    error: true,
    value: 'invalid-email',
  },
};

// Disabled input
export const Disabled = {
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this field',
    disabled: true,
  },
};

// Required input
export const Required = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
};

// Interactive example with state
export const Interactive = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Enter a username (min 3 characters)');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (newValue.length < 3 && newValue.length > 0) {
      setError(true);
      setHelperText('Username must be at least 3 characters');
    } else {
      setError(false);
      setHelperText('Enter a username (min 3 characters)');
    }
  };

  return (
    <Input
      label="Interactive Username"
      placeholder="Start typing..."
      value={value}
      onChange={handleChange}
      error={error}
      helperText={helperText}
    />
  );
};