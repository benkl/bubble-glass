# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.9.0 - 2026-09-28

### Fixed

- **Completely Eliminated Double-Border and Corner Radius Mismatch on All Cards**:
  - Removed `card-mod-card` injection. `card-mod` applies global CSS rules across all `ha-card` elements in the DOM (including sub-cards and custom cards), which was drawing a secondary 1px border and a rectangular shadow on top of cards' native borders.
  - Standard Home Assistant cards now receive their borders, shadows, backgrounds, and `28px` corner radii purely through Home Assistant's official native frontend theme variables (`ha-card-background`, `ha-card-border-color`, `ha-card-border-width`, `ha-card-box-shadow`, `ha-card-border-radius`).
  - Bubble Cards receive their pill geometry and borders purely through `--bubble-border`, `--bubble-border-radius`, and `--bubble-box-shadow`.
  - Zero overlapping borders, zero misaligned corner radii.

## v1.8.0 - 2026-09-28

### Changed

- **Theme Variable Consistency & Token Unification**:
  - `primary-color` and `accent-color` now match exactly within each mode (`#00f0ff` for Dark, `#0055ff` for Light), eliminating mismatched hover/focus/switch colors.
  - All input fields, slider knobs, pins, active states, code editors, and toggle buttons consistently use `var(--accent-color)`.
  - Secondary elements (`bubble-secondary-background-color`, `bubble-icon-background-color`, `bubble-sub-button-background-color`, `bubble-select-background-color`, `bubble-pop-up-main-background-color`) now uniformly reference `var(--glass-chip-background)`.
  - Badges and assistant chips uniformly reference `var(--glass-background-soft)`.
  - Sidebar active icon now cleanly references `var(--accent-color)`.

## v1.7.0 - 2026-09-28

### Changed

- **Cleaned and Simplified Theme Codebase**: Removed 20+ redundant card-specific
  variable overrides (`bubble-button-*`, `bubble-media-player-*`, `bubble-cover-*`,
  `bubble-select-*`, `bubble-climate-*`, `bubble-calendar-*`). The theme now relies
  purely on Bubble Card's root variable cascade (`bubble-main-background-color`,
  `bubble-secondary-background-color`, `bubble-border`, `bubble-box-shadow`),
  making the YAML much cleaner, smaller, and easier to maintain.
- **Streamlined Module & Documentation**: Cleaned up the global module and example
  dashboard to present a single, canonical floating glass pill pattern for the bottom menu.

## v1.6.0 - 2026-09-28

### Fixed

- Standard cards render their glass layer via `ha-card::before` with `border-radius: inherit`.

## v1.5.0 - 2026-09-28

### Changed

- **Volumetric 3D Glass Shadows**: Added deep multi-layer ambient shadow and top/bottom dual-inset highlights/shadows to all buttons and cards to give elements tangible tactile volume and depth.
- **Removed frames on line separators / heading cards**: Excluded `hui-heading-card` and `hui-glance-card` from generic frames.
- **High Contrast Active Switches**: Brightened active switch and toggle colors.

## v1.4.3 - 2026-09-28

### Changed

- Simplified bottom menu to floating glass pills with their own blur and shadow.

## v1.4.2 - 2026-09-28

### Changed

- Footer buttons show visible backdrop blur.

## v1.4.1 - 2026-09-28

### Changed

- Example dashboard includes inline `styles:` on the horizontal-buttons-stack.

## v1.4.0 - 2026-09-28

### Changed

- Corrected footer model.

## v1.3.0 - 2026-09-28

### Added

- Global Bubble Card module.

## v1.2.0 - 2026-09-28

### Changed

- Intensified the glass effect across the interface.

## v1.1.0 - 2026-09-28

### Changed

- Restored the original Bubble theme's edge roundness.

## v1.0.0 - 2026-09-28

### Added

- Initial release: glass theme for Home Assistant with light and dark modes.
