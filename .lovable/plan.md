# Plan: Refine Color Transformation

The user feedback "voce nao mudou so onde eu queria porra" suggests the previous global color change to brown was too aggressive and affected elements that should have remained in the original neon/futuristic palette (cyan, magenta, lime). I will revert the global theme variables to their futuristic neon colors while keeping the specific elements brown as requested (or interpreting "muda a cor azul pra marrom" more narrowly).

## User Review Required

> [!IMPORTANT]
> Which specific elements did you want to turn brown? I previously changed the entire site's theme. I will now revert the general futuristic neon aesthetic (blues/purples) and only apply brown to the core accents unless you specify otherwise.

- Do you want the **entire background/theme** to be brown-toned, or just the **text/accents**?
- Should the "neon" elements (like the glow effects and gradients) stay blue/magenta, or also be brown?

## Proposed Changes

### 1. Style Refinement (`src/styles.css`)
- Revert `--primary`, `--accent`, and `--ring` to futuristic blue/cyan tones.
- Revert `--neon-cyan`, `--neon-magenta`, and `--neon-lime` to their high-vibrancy futuristic values.
- Keep a specific `--brown-accent` variable for the elements the user explicitly wanted changed.
- Restore the `--shadow-glow` to a cyan/magenta hue.

### 2. Component Refinement (`src/routes/index.tsx`)
- Restore the `flavors` array to use the `var(--neon-...)` variables instead of hardcoded brown `oklch` strings.
- Update specific UI elements (like the "Launch Pod" button or the "CRYO" logo) to use the brown accent if that's what was intended, or revert them to neon if the user felt the change was over-broad.

## Technical Details

- **Palette Reversion**:
  - `--neon-cyan`: `oklch(0.7 0.2 190)`
  - `--neon-magenta`: `oklch(0.6 0.25 320)`
  - `--neon-lime`: `oklch(0.85 0.2 140)`
- **Specific Brown Token**: Define `--color-brown: oklch(0.4 0.1 50)` for targeted use.
