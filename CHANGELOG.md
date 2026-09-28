# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v1.15.0 - 2026-09-28

### Changed

- Dark glass now uses a dark-blue translucent tint (`rgba(13, 19, 40, 0.45)`) rather than white overlay glass. Cards remain translucent but no longer look washed out.
- Dark pop-ups now use Bubble Card's configured `bg_color` and `bg_opacity` surface. Removed the theme-level main pop-up color that always overrode those options.

### Fixed

- Mobile reflections now turn off below 768px. The reflection pseudo-elements were decorative and could show as corner artifacts during mobile compositing.
- Mobile blur is capped at 8px for cards and 12px for the header.
- Kept Bubble Card's footer fade by allowing its `ha-card` to overflow visibly.
- Moved row blur from `.bubble-container` to its background leaf. This preserves Bubble Card's fixed-position dropdown and overlay behavior.
- Removed backdrop filters from transformed footer buttons and pop-up header actions. Those filters sample empty local backdrops and cause mobile GPU work without a visible blur.

## v1.14.0 - 2026-09-28

### Changed

- Applied a shared glass-card recipe to cards, Bubble Card rows, icons, sub-buttons, footer navigation, pop-up actions, chips, and badges.

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
