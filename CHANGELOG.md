# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.10.0 - 2026-09-28

### Fixed

- **Frameless Separator Typography & Lines**:
  - Explicitly set `bubble-separator-main-background-color: transparent`, `bubble-separator-border: none`, and `bubble-separator-box-shadow: none` so `.bubble-separator.separator-container` never draws an enclosing container box, borders, or shadows.
  - Separators now render strictly as clean icons, typography, and line dividers.
- **Unified Drawer Triggering Buttons in Footer Menu**:
  - All buttons in the horizontal stack (regular navigation and pop-up / drawer `#hash` triggers alike) uniformly receive full glass pill styling (`backdrop-filter`, `border`, `box-shadow`).
- **Complete Theme Token Unification**:
  - Standardized all sub-buttons, icon containers, badges, chips, controls, inputs, and highlights to reference shared glass tokens.

## v1.9.0 - 2026-09-28

### Fixed

- **Completely Eliminated Double-Border and Corner Radius Mismatch on All Cards**:
  - Removed `card-mod-card` injection.
  - Standard Home Assistant cards now receive their borders, shadows, backgrounds, and `28px` corner radii purely through Home Assistant's official native frontend theme variables.
  - Bubble Cards receive their pill geometry and borders purely through `--bubble-border`, `--bubble-border-radius`, and `--bubble-box-shadow`.
  - Zero overlapping borders, zero misaligned corner radii.

## v1.8.0 - 2026-09-28

### Changed

- **Theme Variable Consistency & Token Unification**:
  - `primary-color` and `accent-color` now match exactly within each mode (`#00f0ff` for Dark, `#0055ff` for Light).
  - Controls, inputs, and chips unified around centralized glass tokens.

## v1.7.0 - 2026-09-28

### Changed

- Cleaned and simplified theme codebase; eliminated redundant card-specific overrides.

## v1.6.0 - 2026-09-28

### Fixed

- Standard cards render their glass layer via `ha-card::before` with `border-radius: inherit`.

## v1.5.0 - 2026-09-28

### Changed

- Volumetric 3D glass shadows on buttons.
- High contrast active switches.

## v1.0.0 - 2026-09-28

### Added

- Initial release: glass theme for Home Assistant with light and dark modes.
