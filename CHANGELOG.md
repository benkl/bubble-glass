# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

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

- **Resolved Double-Border and Corner Radius Artifacts on Bubble Cards**:
  `card-mod-card` was applying rectangular `ha-card` borders and backdrop filters
  to the outer wrapper of all custom cards, causing rectangular 28px corners
  to render directly behind Bubble Card's own pill-shaped elements.
- Standard cards now render their glass layer via `ha-card::before` with `border-radius: inherit`,
  guaranteeing clean corner rounding without clipping or double borders.
- Explicitly excluded `:host(bubble-card) ha-card`, `:host(.type-custom-bubble-card) ha-card`,
  and `ha-card.type-custom-bubble-card` from card-mod so Bubble Card's native pill geometry
  and sub-buttons render cleanly without any foreign outer container.

## v1.5.0 - 2026-09-28

### Changed

- **Volumetric 3D Glass Shadows**: Added deep multi-layer ambient shadow and top/bottom dual-inset highlights/shadows to all buttons and cards to give elements tangible tactile volume and depth.
- **Removed frames on line separators / heading cards**: Added card-mod host exclusions for `hui-heading-card`, `hui-glance-card`, and the outer wrapper of `type-custom-bubble-card` so line separators and title headings render frameless without enclosing glass boxes.
- **High Contrast Active Switches**: Brightened active switch and toggle colors (vibrant `#00f0ff` cyan in dark mode, `#0055ff` electric blue in light mode) with matching high-contrast track opacity so active/on states pop unmistakably.

## v1.4.3 - 2026-09-28

### Changed

- Simplified bottom menu to floating glass pills with their own blur and shadow.
  Removed the outer slab box background entirely so individual buttons float
  cleanly over the dashboard content.

## v1.4.2 - 2026-09-28

### Changed

- Footer buttons now show visible backdrop blur. Stock Bubble Card puts a
  hardcoded 80% opacity on `.bubble-background`, which was hiding the blur
  behind it; the `styles:` block now forces `opacity: 1` and uses the
  `glass-chip-background` token (thin translucent tint) so the 14px blur
  dominates instead of a flat color.

## v1.4.1 - 2026-09-28

### Changed

- Example dashboard now includes inline `styles:` on the horizontal-buttons-stack
  card, so the glass footer works without the module system. This is the
  recommended approach since the module file is not discovered by all Bubble
  Card installations.

## v1.4.0 - 2026-09-28

### Changed

- Corrected the footer model after inspecting the live DOM: stock Bubble Card
  leaves the fixed bar itself without a background, and each button carries
  its own tint layer plus an active-fill layer with a dark stock border. The
  bar now becomes the glass slab via the module, button tints went back to
  translucent glass values (`bubble-horizontal-buttons-stack-background-color`),
  and the dark per-button border is hidden so one clean edge renders.

## v1.3.0 - 2026-09-28

### Added

- Global Bubble Card module (`examples/bubble-glass-module.yaml`) that blurs
  Bubble Card rows and turns the bottom menu into a pinned blurred glass
  slab, so scrolling content smears behind it.
- Glass-chip styling for the bottom menu buttons.

## v1.2.0 - 2026-09-28

### Changed

- Intensified the glass effect across the interface: stronger card blur and
  saturation, a diagonal sheen highlight on standard cards, brighter inset
  edges, deeper shadows, and thinner header and dialog tints carried by blur.
- Rebuilt both backgrounds with richer four-stop gradients.

## v1.1.0 - 2026-09-28

### Changed

- Restored the original Bubble theme's edge roundness. Home Assistant cards
  use 28px again and control buttons 50px, matching the upstream Bubble theme.

## v1.0.0 - 2026-09-28

### Added

- Initial release: glass theme for Home Assistant with light and dark modes
  in one theme, first-class Bubble Card styling via documented theme
  variables, card-mod rules for standard cards and the app header, HACS
  theme packaging with validation workflow, and an example dashboard.
