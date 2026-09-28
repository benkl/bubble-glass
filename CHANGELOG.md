# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.12.0 - 2026-09-28

### Fixed

- **Overrode Bubble Card JS Inline Border Style Injection**:
  - In `horizontal-buttons-stack/changes.js`, Bubble Card's `changeLight()` method executes dynamically on state updates and writes `style="border-color: var(--primary-text-color);"` directly onto `.bubble-background-color` nodes as an inline HTML attribute whenever a button doesn't have an active light.
  - Added targeted rules forcing `border-color: transparent !important`, `border-width: 0px !important`, and `border: none !important` on `.bubble-background-color` to neutralize the JS inline attribute injection.
  - All buttons in the stack (regular links and `#hash` drawer triggers) now consistently render as clean glass pills with zero dark ghost outlines.

## v1.11.0 - 2026-09-28

### Fixed

- **Pop-up Drawer Close & Previous Buttons Glass Styling**:
  - Pop-up close and previous buttons (`.bubble-header-action-button`, `.bubble-close-button`) receive full glass styling with backdrop blur and 1px glass border.

## v1.10.0 - 2026-09-28

### Fixed

- **Frameless Separator Typography & Lines**:
  - Set `bubble-separator-main-background-color: transparent`, `bubble-separator-border: none`, and `bubble-separator-box-shadow: none`.

## v1.9.0 - 2026-09-28

### Fixed

- Eliminated double-borders by removing `card-mod-card`.

## v1.0.0 - 2026-09-28

### Added

- Initial release: glass theme for Home Assistant with light and dark modes.
