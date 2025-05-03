// src/components/Card/Card.stories.jsx
import { Card } from '../../components/Cards/Card';
import { Button } from '../../components/Buttons/Button';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

// Basic card with just content
export const Basic = {
  args: {
    children: 'This is a basic card with just content.',
  },
};

// Card with title and content
export const WithTitle = {
  args: {
    title: 'Card Title',
    children: 'This card has a title and content.',
  },
};

// Complete card with title, subtitle and content
export const Complete = {
  args: {
    title: 'Card Title',
    subtitle: 'This is the card subtitle',
    children: (
      <>
        <p>This is a card with a title, subtitle and content.</p>
        <p>You can add multiple paragraphs or components inside.</p>
      </>
    ),
  },
};

// Flat card with no elevation
export const Flat = {
  args: {
    title: 'Flat Card',
    elevation: 'low',
    children: 'This card has minimal elevation.',
  },
};

// Card with high elevation
export const Elevated = {
  args: {
    title: 'Elevated Card',
    elevation: 'high',
    children: 'This card has high elevation.',
  },
};

// Square card with no rounded corners
export const Square = {
  args: {
    title: 'Square Card',
    rounded: false,
    children: 'This card has square corners instead of rounded ones.',
  },
};

// Card with action buttons
export const WithActions = {
  render: () => (
    <Card title="Card with Actions" subtitle="Interactive elements inside a card">
      <p>This card contains action buttons that you can interact with.</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <Button label="Accept" primary size="small" />
        <Button label="Decline" size="small" />
      </div>
    </Card>
  ),
};