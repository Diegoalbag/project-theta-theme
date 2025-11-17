# Theta Theme Default

This is the first theme boilerplate for the project.

It provides a starting point for developing themes, with example section components and a basic project structure.

## Installation

```bash
npm install theta-theme-default
# or
yarn add theta-theme-default
```

## Usage

### Import Components and Styles

```typescript
import { Hero, Header } from 'theta-theme-default';
import 'theta-theme-default/style.css';
```

### Using the Hero Component

The Hero component accepts a `heroImage` prop for flexibility:

```typescript
import { Hero } from 'theta-theme-default';
import MyHeroImage from './public/my-hero.png';

export default function Page() {
  return <Hero heroImage={MyHeroImage} />;
}
```

**Options for `heroImage` prop:**
- Import your own image: `import MyImage from './image.png'`
- Use a public URL: `heroImage="https://example.com/image.png"`
- Use the default: Leave empty or use `heroImage="/Hero.png"` (requires copying `dist/Hero.png` to your public folder)

## Building

```bash
yarn build:vite  # Build with Vite (recommended)
yarn build       # Build with TypeScript compiler
```

## Package Contents

- `dist/index.js` - ES module
- `dist/index.cjs` - CommonJS module
- `dist/theta-theme-default.css` - Compiled Tailwind CSS
- `dist/Hero.png` - Default hero image asset
