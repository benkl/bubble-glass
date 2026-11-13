# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.

## v2.1.0 - 2026-11-13

### Changed

- The dashboard header has no bar any more. Background, bottom border, and shadow are gone, so the title and tabs float on the aurora. While content scrolls underneath, a faint veil (`glass-header-scrolled`, card-mod) and a plain blur keep the title readable. Edit mode keeps its own header color.
- The header blur no longer boosts saturation, which showed as a brighter strip at the top of the page.
- `app-theme-color` is set explicitly, so the phone status bar and browser chrome match the top of the background instead of turning transparent.

### Fixed

- Active switch buttons were unreadable: white text on a light-cyan fill, with the icon in the same cyan and therefore invisible. Filled buttons and non-light slider fills now use a deeper azure (`bubble-button-accent-color`, 4.5:1 or better with white). Module v2.1 puts white text and a white icon on a lighter chip.
- Warm-white lights in dark mode painted a pale khaki surface under white text. `bubble-light-white-color` is now a deeper warm tone. Module v2.1 adds a soft text shadow on active rows in dark mode.
- Cards scrolling under the footer showed through the footer buttons. The buttons now use a near-solid `glass-surface-float`, and Bubble Card's footer fade uses an opaque page color, so content fades out behind the footer.

## v2.0.0 - 2026-11-13

A visual overhaul and a pass against the current Home Assistant frontend, Bubble Card 3.4.3, and card-mod 4.2.1.

### Changed

- New glass recipe: neutral smoky tint in dark mode and frosted white in light mode. Surfaces get a sheen, a rim light, a lit top edge, a soft bottom shade, and layered depth shadows. Bubble rows use a lighter shadow than cards, so stacked rows no longer smear together.
- Rim light: a gradient ring over each card and Bubble row edge. It is bright at the top-left and fades around the edge, with a faint glint at the bottom-right. Drawn by card-mod and the module, with the plain border as fallback.
- New aurora background with five light sources and a fine grain layer that prevents gradient banding. Uses the `fixed` keyword, so Home Assistant pins it to the viewport while cards scroll.
- Refined azure accent (`#6cc4ff` dark, `#1b6fdc` light) replaces neon `#00f0ff`/`#0055ff`. A full `ha-color-primary-*` scale now themes current Home Assistant buttons, switches, links, and focus rings, which ignored `primary-color` before.
- Mode-specific state colors for lights, climate modes, locks, alarms, fans, and switches. Light mode uses darker variants that stay readable on white glass.
- Icon and sub-button chips are a distinct inset tint instead of the same color as the row.
- Module v2.0: row sheen and rim light, chip hairlines, and a floating shadow and rim on footer buttons. Sub-button cards with `hide_main_background` stay clear.
- Focus rings follow the accent color.
- `examples/bubble-card-dashboard.yaml` relies on the module for the footer and uses lighter pop-up settings.
- Token names: `glass-background*`, `glass-chip-background`, and `glass-shadow` became `glass-surface*`, `glass-chip`, and `glass-shadow*`. See the README token table.

### Fixed

- Fonts applied nowhere. The theme set `primary-font-family` and `paper-font-*`, which current Home Assistant no longer reads. It now sets `ha-font-family-body` and `ha-font-family-heading`.
- Primary buttons were unreadable: white text on neon cyan in dark mode, and navy text on blue in light mode. `text-primary-color` now contrasts with the accent.
- Menus, pickers, slider surfaces, and map overlays were nearly transparent in light mode, because `card-background-color` was set to the 14% glass tint. It is now a solid surface. Glass stays on cards only.
- Standard cards had no blur. Home Assistant cards are now frosted through card-mod. Bubble Card is excluded so its fixed footer and menus stay in place. HA's own transparent cards (heading, toggle group, transparent clock and date) are skipped.
- `card-mod-root` was ignored, because card-mod uses only `card-mod-root-yaml` when both exist. The header edge now comes from Home Assistant's native `app-header-border-bottom`.
- Every card was set to `overflow: hidden`, which clipped chart tooltips and focus rings. Removed together with the decorative 1px edge lines and their mobile artifacts.
- Removed variables that nothing reads any more: the paper-*, switch-*, and pop-up background color keys, among others. Bubble Card always overrides the pop-up color inline from `bg_color`/`bg_opacity`.

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
