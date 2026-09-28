# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.11.0 - 2026-09-28

### Fixed

- **Pop-up Drawer Close & Previous Buttons Glass Styling**:
  - Pop-up close and previous buttons (`.bubble-header-action-button`, `.bubble-close-button`) now receive full glass styling with backdrop blur, 1px glass border, and volumetric shadow, matching the card icons and footer buttons.
  - Set `bubble-pop-up-close-button-border: 1px solid var(--glass-border-color)` in theme variables.
- **Bottom Menu Drawer / Pop-up Trigger Buttons**:
  - Verified and guaranteed that `#hash` pop-up and drawer triggers in `horizontal-buttons-stack` receive the identical glass pill styling as standard view buttons with no style overrides.

## v1.10.0 - 2026-09-28

### Fixed

- **Frameless Separator Typography & Lines**:
  - Explicitly set `bubble-separator-main-background-color: transparent`, `bubble-separator-border: none`, and `bubble-separator-box-shadow: none` so separators render purely as clean typography and accent lines on the background without enclosing containers or box borders.
- **Unified Drawer Triggering Buttons in Footer Menu**:
  - All buttons in the horizontal stack uniformly receive full glass pill styling.

## v1.9.0 - 2026-09-28

### Fixed

- **Completely Eliminated Double-Border and Corner Radius Mismatch on All Cards**:
  - Removed `card-mod-card` injection.
  - Standard cards receive borders and shadows through native variables, Bubble Cards receive pill geometry through `--bubble-border`.

## v1.8.0 - 2026-09-28

### Changed

- **Theme Variable Consistency & Token Unification**:
  - `primary-color` and `accent-color` synchronized across both modes.

## v1.0.0 - 2026-09-28

### Added

- Initial release: glass theme for Home Assistant with light and dark modes.
