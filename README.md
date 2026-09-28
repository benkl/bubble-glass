# Bubble Glass

A clean, modern glassmorphism theme for Home Assistant with first-class [Bubble Card](https://github.com/Clooos/Bubble-Card) integration.

[![Open in Home Assistant](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=benkl&repository=bubble-glass&category=theme)

![Bubble Glass dashboard preview](docs/preview.svg)

## Features

- **Liquid Glass Aesthetics**: Deep backdrop blur, subtle reflection sheens, top specular highlight edges, and ambient drop shadows for realistic tactile volume.
- **Unified Light & Dark Modes**: Seamless automatic switching following device preference with high-contrast electric accents (Cyan in Dark, Royal Blue in Light).
- **Bubble Card Native**: Full compatibility with Bubble Card v3.4+ using its built-in CSS variable cascade.
- **Frameless Separators**: Line separators render strictly as typography and accent lines on the background without enclosing containers or box borders.
- **Floating Glass Bottom Menu**: Navigation and drawer trigger buttons render uniformly as floating glass pills.
- **Glass Pop-up Close Buttons**: Drawer/pop-up close and back action buttons receive matching glass styling and backdrop blur.
- **Zero External Dependencies**: Pure CSS gradients that look great offline.

## Requirements

- Home Assistant with YAML themes enabled (`frontend: themes: !include_dir_merge_named themes`)
- [Bubble Card](https://github.com/Clooos/Bubble-Card) (v3.2+)
- [card-mod](https://github.com/thomasloven/lovelace-card-mod) (recommended for backdrop blur on standard cards and header)

## Installation (HACS)

1. Open **HACS → Three-dot menu → Custom repositories**.
2. Add `https://github.com/benkl/bubble-glass` with category **Theme**.
3. Download **Bubble Glass**.
4. In `configuration.yaml`, ensure you have:
   ```yaml
   frontend:
     themes: !include_dir_merge_named themes
   ```
5. Reload themes via **Developer Tools → Actions → `frontend.reload_themes`**.
6. Select **Bubble Glass** in your User Profile.

## Bottom Menu Styling

For the bottom `horizontal-buttons-stack` to render as floating glass pills with blur (and override Bubble Card's JS inline border attributes), add this `styles:` block to your card:

```yaml
type: custom:bubble-card
card_type: horizontal-buttons-stack
# ... your buttons (both views and #hash pop-up triggers) ...
styles: |
  .bubble-background-color {
    border-color: transparent !important;
    border-width: 0px !important;
    border: none !important;
    box-shadow: none !important;
  }
  .bubble-button .bubble-background {
    background-color: var(--glass-background, rgba(255, 255, 255, 0.45)) !important;
    backdrop-filter: var(--glass-backdrop-filter, blur(20px)) !important;
    -webkit-backdrop-filter: var(--glass-backdrop-filter, blur(20px)) !important;
    border: 1px solid var(--glass-border-color, rgba(255, 255, 255, 0.7)) !important;
    box-shadow: var(--ha-card-box-shadow, 0 8px 24px rgba(0, 0, 0, 0.15)) !important;
    opacity: 1 !important;
  }
```

Or install the global module from [`examples/bubble-glass-module.yaml`](examples/bubble-glass-module.yaml).

## Example Dashboard

See [`examples/bubble-card-dashboard.yaml`](examples/bubble-card-dashboard.yaml) for a complete reference dashboard configuration.

## License

Derived from the MIT-licensed Bubble theme by Clooos. Distributed under the [MIT License](LICENSE).
