# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.14.0 - 2026-09-28

### Changed

- **Adopted one glass-card recipe for every surface**:
  - `rgba(255, 255, 255, 0.14)` translucent background.
  - `blur(12px) saturate(145%)` backdrop blur.
  - `1px solid rgba(255, 255, 255, 0.30)` border.
  - Ambient `0 8px 32px` shadow plus top, bottom, and broad inset highlights.
- Home Assistant cards, Bubble Card main rows, icon and sub-button surfaces,
  footer buttons, pop-up action buttons, chips, and badges now share the same
  visual recipe through the `glass-*`, `ha-card-*`, and `bubble-*` token cascade.
- Added radius-safe top and left reflection streaks for standard cards. The
  streaks stop before each rounded corner and do not add another border.

## v1.13.0 - 2026-09-28

### Fixed

- Footer `#hash` drawer triggers now match standard Bubble Card button surfaces.

## v1.12.0 - 2026-09-28

### Fixed

- Overrode Bubble Card's `changeLight()` inline inactive border style on footer buttons.

## v1.11.0 - 2026-09-28

### Fixed

- Pop-up close and previous buttons receive matching glass styling.

## v1.10.0 - 2026-09-28

### Fixed

- Separators render without enclosing container frames.

## v1.9.0 - 2026-09-28

### Fixed

- Eliminated double-borders by removing global `card-mod-card` border injection.

## v1.0.0 - 2026-09-28

### Added

- Initial release: glass theme for Home Assistant with light and dark modes.
