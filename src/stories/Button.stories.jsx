// src/components/Button/Button.stories.jsx
import { Button } from '../../components/Buttons/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
};

const Template = (args) => <Button {...args} />;

// Primary button story
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

// Secondary button story
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

// Large button story
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
};

// Small button story
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};

// Disabled button story
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};