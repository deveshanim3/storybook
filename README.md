# Education Initiative UI Component Library

This Storybook serves as the central repository and documentation for all reusable UI components in our education platform. It provides a unified environment for designers, developers, and QA teams to view, test, and ensure consistency across components.

## Getting Started

### Running Storybook

```bash
# Install dependencies (if not already done)
npm install

# Start Storybook development server
npm run storybook
```

Storybook will open automatically in your browser at `http://localhost:6006`.

## Contributing New Components

### Directory Structure

Components should follow this structure:

```
src/
├── components/
│   ├── ComponentName/
│   │   ├── ComponentName.jsx
│   │   ├── ComponentName.css
│   │   └── ComponentName.stories.jsx
```

### Creating a New Component

1. Create a new folder in `src/components/` with your component name
2. Add your component implementation (JSX and CSS)
3. Create a `.stories.jsx` file

### Story Guidelines

- **File Naming**: Use `ComponentName.stories.jsx`
- **Component Location**: Stories should import the component from their actual source
- **Story Structure**:
  - Group stories by component category (Components, Layouts, etc.)
  - Include a default export with component metadata
  - Create multiple stories showcasing component variations

### Example Story

```jsx
// Button.stories.jsx
import { Button } from './Button';

export default {
  title: 'Components/Button', // Category/ComponentName
  component: Button,
  tags: ['autodocs'], // Enables automatic documentation
  parameters: {
    // Optional parameters
  },
  argTypes: {
    // Control the props in Storybook UI
  },
};

// Create stories for different states
export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
  },
};
```

## Documentation Guidelines

- Add JSDoc comments to your component props for automatic documentation
- Use `parameters.docs.description` for detailed component descriptions
- Include usage examples in your stories

## Visual Testing with Chromatic

This project uses [Chromatic](https://www.chromatic.com/) for visual testing and UI review.

To publish your changes for review:

```bash
npx chromatic --project-token=<your-project-token>
```

## Current Components

1. **Button** - Primary interaction component with various states
2. **Card** - Container for displaying grouped content
3. **Input** - Text input field with validation states
4. **Modal** - Overlay dialog for focused interactions
5. **Header** - Application navigation and branding component

## Best Practices

- Keep components focused and single-purpose
- Maintain consistent prop naming across components
- Use design tokens for colors, spacing, etc.
- Write stories that showcase all important component states
- Test edge cases and accessibility

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Component Driven Development](https://www.componentdriven.org/)
- [Chromatic Documentation](https://www.chromatic.com/docs/)