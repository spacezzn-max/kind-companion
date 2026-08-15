# Plan: Transform to Futuristic Ice Cream Parlor Landing Page

Transform the existing coffee roaster landing page into a futuristic, neon-inspired ice cream parlor called "Cryo-Cream".

## User Review Required

> [!IMPORTANT]
> The design will use a dark theme with vibrant neon accents (cyan, magenta, lime) to achieve a "futuristic" aesthetic.

- Do you have specific brand colors in mind for "Cryo-Cream"?
- Should we include a section for "Signature Flavors" like Liquid Nitrogen Vanilla or Quantum Chocolate?

## Proposed Changes

### Styling & Theme (`src/styles.css`)
- Update color tokens to a dark, neon-futuristic palette.
- Set background to a deep space black/blue.
- Define neon gradients for buttons and accents.
- Update typography to a modern, geometric sans-serif (e.g., Space Grotesk).

### Content & Components (`src/routes/index.tsx`)
- Replace coffee-related constants (`roasts`, `steps`) with futuristic ice cream data.
- Update the Hero section:
    - Title: "The Future of Frozen."
    - Subtitle: "Molecular gelato crafted at absolute zero. Delivered in cryo-pods."
- Update "Roasts" section to "Flavor Lab":
    - Items: Neon-colored gelato options with scientific tasting notes.
- Update "How it works" section:
    - Steps: Molecular Synthesis, Cryo-Flash Freeze, Warp Speed Delivery.
- Remove the temporary debug overlay text.
- Replace the coffee hero image with a futuristic dessert visual (or a themed placeholder/gradient if assets aren't available).

## Technical Details
- Use `oklch` for neon colors to ensure maximum vibrance.
- Maintain TanStack Start architecture and responsive Tailwind layouts.
- Remove the fixed overlay added in previous turns.
