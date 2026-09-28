# Changelog

All notable changes to this project are documented here. Versions follow
[semver](https://semver.org/). HACS shows the latest GitHub release tag.


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
- The module's slab rules moved from the per-button layers to the
  `.horizontal-buttons-stack-card` bar itself: background, blur, edge,
  radius, and lift all on the pinned element that scrolling content passes
  underneath.

### Added

- README troubleshooting for a module that is not loading (empty second
  `<style>` tag in the footer's shadow DOM) and a per-card `styles:`
  fallback that needs no module system.

## v1.3.0 - 2026-09-28

### Added

- Global Bubble Card module (`examples/bubble-glass-module.yaml`) that blurs
  Bubble Card rows and turns the bottom menu into a pinned blurred glass
  slab, so scrolling content smears behind it.
- Glass-chip styling for the bottom menu buttons: each chip is a `::before`
  layer with `border-radius: inherit` (radii can never disagree), Bubble
  Card's own highlight layer keeps filling with the accent color when
  active, and its stock border is hidden so only one edge renders. No
  per-chip blur: the slab already blurs, and stacked filtered layers bleed
  past rounded corners on WebKit.
- `glass-chip-background` token (light and dark) consumed by the module.

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
