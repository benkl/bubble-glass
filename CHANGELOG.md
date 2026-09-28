# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.1.0 - 2026-09-28

### Changed

- Restored the original Bubble theme's edge roundness. Home Assistant cards
  use 28px again and control buttons 50px, matching the upstream Bubble theme.
- Bubble Card geometry now follows the original theme's pill look: cards are
  fully rounded (`calc(var(--row-height, 56px) / 2)`), icon containers are
  circles (`50%`), and pop-ups keep their 42px default. Removed the per-card
  radius overrides so every element inherits the pill cascade the way the
  original theme did.

## v1.0.0 - 2026-09-28

### Added

- Initial release: glass theme for Home Assistant with light and dark modes
  in one theme, first-class Bubble Card styling via documented theme
  variables, card-mod rules for standard cards and the app header, HACS
  theme packaging with validation workflow, and an example dashboard.
