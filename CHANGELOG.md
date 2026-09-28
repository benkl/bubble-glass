# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.2.0 - 2026-09-28


### Changed

- Intensified the glass effect across the interface: stronger card blur and
  saturation, a diagonal sheen highlight on standard cards, brighter inset
  edges, deeper shadows, and thinner header and dialog tints carried by blur.
- Rebuilt both backgrounds with richer four-stop gradients (dark: cyan,
  violet, blue, and magenta orbs over a deep navy base; light: sky, lavender,
  blue, and peach orbs over a cool white base) so translucent surfaces have
  more to refract.
- Fixed the dull bottom button row: Bubble Card renders the footer background
  at a hardcoded 80% opacity, so the row now uses a near-solid tinted chip
  with a crisp 1px ring shadow and a stronger lift. Applies to light and dark.
- The sidebar now blurs behind its translucent background via card-mod, and
  badges and chips received glass tints in both modes.
- Bubble Card surfaces use cooler, more visible tint layers in both modes.

### Added

- `glass-rim-color` token for the bottom inner edge of standard cards.

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
