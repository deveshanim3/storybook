// src/components/Header/Header.stories.jsx
import React from 'react';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Buttons/Button';

export default {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

// Simple header with just a title
export const Simple = {
  args: {
    title: 'Application Name',
  },
};

// Header with navigation items
export const WithNavigation = {
  args: {
    title: 'App Name',
    navItems: ['Home', 'Products', 'Services', 'About', 'Contact'],
  },
};

// Header with actions
export const WithActions = {
  args: {
    title: 'Dashboard',
    navItems: ['Home', 'Analytics', 'Reports'],
    actions: [
      <Button key="login" label="Login" size="small" />,
      <Button key="signup" label="Sign Up" primary size="small" />,
    ],
  },
};

// Dark theme header
export const DarkTheme = {
  args: {
    title: 'Dark App',
    variant: 'dark',
    navItems: ['Home', 'Features', 'Pricing'],
    actions: [
      <Button key="login" label="Login" size="small" />,
    ],
  },
};

// Primary theme header
export const PrimaryTheme = {
  args: {
    title: 'Brand App',
    variant: 'primary',
    navItems: ['Dashboard', 'Projects', 'Team', 'Settings'],
    actions: [
      <Button key="account" label="My Account" size="small" />,
    ],
  },
};

// Sticky header
export const StickyHeader = {
  args: {
    title: 'Sticky Header',
    sticky: true,
    navItems: ['Home', 'Features', 'Pricing', 'Team', 'Contact'],
    actions: [
      <Button key="action" label="Get Started" primary size="small" />,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'This header will stick to the top of the viewport when scrolling.',
      },
    },
  },
};

// Header with logo
export const WithLogo = {
  args: {
    // src/components/Header/Header.stories.jsx (continued)
    title: 'Logo App',
    logo: <div style={{ 
      width: '32px', 
      height: '32px', 
      backgroundColor: '#1ea7fd', 
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold'
    }}>A</div>,
    navItems: ['Home', 'Products', 'Support'],
  },
};

// Complex header with all features
export const Complex = {
  args: {
    title: 'Enterprise Suite',
    logo: <div style={{ 
      width: '32px', 
      height: '32px', 
      backgroundColor: '#1ea7fd', 
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold'
    }}>E</div>,
    variant: 'light',
    sticky: true,
    navItems: ['Dashboard', 'Analytics', 'Projects', 'Teams', 'Resources'],
    actions: [
      <Button key="settings" label="Settings" size="small" />,
      <Button key="profile" label="Profile" primary size="small" />,
    ],
  },
};