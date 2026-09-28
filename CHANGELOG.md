# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.13.0 - 2026-09-28

### Fixed

- **Footer Hash Buttons Now Match Standard Bubble Buttons**:
  - The Firefox dump showed the footer's `.bubble-background` had `opacity: 0.5` and `--bubble-button-background-color: rgba(0, 0, 0, 0)`, while regular Bubble buttons use their main Bubble surface and root `bubble-box-shadow`.
  - Footer buttons now use the same `bubble-main-background-color`, `bubble-box-shadow`, pill radius, and backdrop blur as standard Bubble Card buttons.
  - Removed the extra footer-only border and chip treatment that made drawer triggers look different from the rest of Bubble Card.
  - The JS-written inactive `.bubble-background-color` layer is fully transparent, so it cannot add a second border or shadow.

## v1.12.0 - 2026-09-28

### Fixed

- Overrode Bubble Card's `changeLight()` inline inactive border style on footer buttons with targeted `!important` rules.

## v1.11.0 - 2026-09-28

### Fixed

- Pop-up close and previous buttons receive matching glass styling.

## v1.10.0 - 2026-09-28

### Fixed

- Separators render without enclosing container frames.

## v1.9.0 - 2026-09-28

### Fixed

- Eliminated double-borders by removing `card-mod-card`.

## v1.0.0 - 2026-09-28

### Added

- Initial release: glass theme for Home Assistant with light and dark modes.
