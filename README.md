# Bubble Glass

A clean, modern glassmorphism theme for Home Assistant with first-class [Bubble Card](https://github.com/Clooos/Bubble-Card) integration.

[![Open in Home Assistant](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=benkl&repository=bubble-glass&category=theme)

![Bubble Glass dashboard preview](docs/preview.svg)

## Features

- Liquid glass surfaces with blur, highlights, and restrained shadows.
- Unified light and dark modes with high-contrast accents.
- Bubble Card v3.4+ styling through its public CSS variables.
- Frameless separators.
- Matching glass footer navigation, drawer triggers, and pop-up close buttons.
- Offline-safe CSS gradient backgrounds.

## Requirements

- Home Assistant with YAML themes enabled:
  ```yaml
  frontend:
    themes: !include_dir_merge_named themes
  ```
- [Bubble Card](https://github.com/Clooos/Bubble-Card) v3.2+
- [card-mod](https://github.com/thomasloven/lovelace-card-mod), recommended for standard-card and header blur

## Installation

1. Open **HACS → Three-dot menu → Custom repositories**.
2. Add `https://github.com/benkl/bubble-glass` with category **Theme**.
3. Download **Bubble Glass**.
4. Run `frontend.reload_themes` from **Developer Tools → Actions**.
5. Select **Bubble Glass** in your user profile.

## Bottom menu styling

Bubble Card writes an inline `border-color: var(--primary-text-color)` to `.bubble-background-color` for inactive footer buttons. The `!important` reset below is intentional. It makes footer navigation buttons and `#hash` drawer triggers use the same single glass surface as standard Bubble Card buttons.

```yaml
type: custom:bubble-card
card_type: horizontal-buttons-stack
# ... your buttons ...
styles: |
  .horizontal-buttons-stack-card .bubble-button {
    border-radius: var(--bubble-border-radius, 32px) !important;
    overflow: hidden !important;
  }
  .horizontal-buttons-stack-card .bubble-button .bubble-background {
    background-color: var(--bubble-main-background-color, var(--glass-background)) !important;
    border: none !important;
    box-shadow: var(--bubble-box-shadow, var(--glass-shadow)) !important;
    opacity: 1 !important;
    backdrop-filter: var(--glass-backdrop-filter, blur(26px)) !important;
    -webkit-backdrop-filter: var(--glass-backdrop-filter, blur(26px)) !important;
  }
  .horizontal-buttons-stack-card .bubble-button .bubble-background-color {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
```

The global module is available at [`examples/bubble-glass-module.yaml`](examples/bubble-glass-module.yaml).

## Example dashboard

See [`examples/bubble-card-dashboard.yaml`](examples/bubble-card-dashboard.yaml).

## License

Derived from the MIT-licensed Bubble theme by Clooos. Distributed under the [MIT License](LICENSE).
