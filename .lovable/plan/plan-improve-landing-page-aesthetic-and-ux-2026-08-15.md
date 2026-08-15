# Plan: Improve Landing Page Aesthetic and UX

Enhance the visual appeal and user experience of the Cryo-Cream landing page with better layouts, interactive elements, and more refined futuristic styling.

## Proposed Changes

### Styling & Animation (`src/styles.css`)
- Add a custom `shimmer` and `float` animation for futuristic elements.
- Refine color tokens for better contrast and "premium" feel.
- Add utility for glassmorphism effects.

### UI Enhancements (`src/routes/index.tsx`)
- **Hero Section**:
    - Add a floating "Cryo-Pod" visual element (CSS-based abstract).
    - Implement a text-reveal animation or staggered entrance.
- **Flavor Lab (Products)**:
    - Use more card-like structures with hover effects that reveal scientific specs.
    - Add color-coded status badges for each flavor.
- **Process Section**:
    - Convert to a more visual "blueprint" style layout.
- **General**:
    - Add a "Scientific Log" ticker at the bottom for immersion.
    - Improve spacing and typography hierarchy.

## Technical Details
- Use Tailwind's `@keyframes` and `@utility` for new animations.
- Implement Framer Motion (if already in project, otherwise standard CSS transitions) for smooth state changes.
- Ensure full responsiveness for smaller viewports.
