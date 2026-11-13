# Research and implementation plan

This document records the design and packaging decisions behind Bubble Glass. It is updated as implementation and verification progress.

## Goals

- Turn the original Bubble light and dark theme into a higher-contrast glass theme.
- Keep both Home Assistant light and dark mode in one selectable theme.
- Style Bubble Card through its documented theme variables instead of brittle internal selectors.
- Package the repository for installation as a HACS theme.
- Keep readable fallbacks when a browser cannot render backdrop blur.

## Current source assessment

The starting repository contained only `bubble.yaml`. The file defined a `Bubble` theme with separate light and dark modes, a muted solid palette, Bubble-era card radii, and several card-mod rules.

Problems in the starting file:

- The theme had no HACS directory structure or `hacs.json`.
- Most surfaces were opaque, so there was no visible depth or glass effect.
- The light and dark palettes used unrelated accents.
- Several inline comments preserved abandoned values and made maintenance harder.
- `secondary-background-color: none` and colors such as `border-color: none` were invalid color values.
- The card-mod view rule targeted one exact dashboard DOM path and one `nth-child`. Any dashboard edit or frontend markup change could break it.
- The root card-mod rule hid the mobile header and constrained desktop views to 520 px. Those layout opinions are unrelated to a reusable theme.
- The CSS disabled card transitions globally. That conflicts with Bubble Card's own interaction styling.

## Primary-source findings

### Home Assistant themes

Home Assistant applies the default light or dark theme first, then top-level custom variables, then variables under the selected `modes` entry. A single theme with `modes.light` and `modes.dark` therefore supports automatic mode selection.

Home Assistant documents `primary-color`, `accent-color`, and state-color rules as supported theme variables. Other frontend variables can change between Home Assistant releases. This theme uses those extra variables conservatively and groups them so breakage is easy to locate.

Source: <https://www.home-assistant.io/integrations/frontend/#defining-themes>

### Bubble Card

Bubble Card supports global styling from a Home Assistant theme. Theme keys omit the CSS `--` prefix. For example, `--bubble-border-radius` becomes `bubble-border-radius` in YAML. This is the least brittle integration because it uses Bubble Card's public variables rather than classes inside its shadow DOM.

The useful global variables are:

- `bubble-border-radius`
- `bubble-main-background-color`
- `bubble-secondary-background-color`
- `bubble-accent-color`
- `bubble-icon-border-radius`
- `bubble-icon-background-color`
- `bubble-sub-button-border-radius`
- `bubble-sub-button-background-color`
- `bubble-box-shadow`
- `bubble-border`

Bubble Card also publishes variables for buttons, pop-ups, horizontal button stacks, media players, covers, selects, climate cards, separators, sliders, and footer placement. The implementation uses those variables where a card-specific value improves the glass hierarchy.

Bubble Card's current pop-up format is standalone and uses `cards:` inside the pop-up. It is available from Bubble Card 3.2.0. Pop-ups can set background opacity and blur in card configuration. The theme supplies matching pop-up colors and backdrop color, while the dashboard example shows explicit blur values.

Sources:

- <https://github.com/Clooos/Bubble-Card#styling>
- <https://github.com/Clooos/Bubble-Card#pop-up>
- <https://github.com/Clooos/Bubble-Card#button>

### card-mod

A real frosted effect needs `backdrop-filter`; translucent colors alone only produce transparency. card-mod can inject theme-level CSS into Home Assistant cards and dialogs. Bubble Card's public theme variables do not include a backdrop-filter variable, so the base theme does not target Bubble Card's private CSS classes. This avoids tying the theme to a Bubble Card release.

The implementation uses card-mod for standard Home Assistant `ha-card` and dialog surfaces. Bubble Card keeps its public translucent backgrounds, borders, and shadows. Users who want blur inside every Bubble Card can add the optional Bubble Card module documented in the README. This split gives a stable default and an explicit richer option.

Source: <https://github.com/thomasloven/lovelace-card-mod>

### HACS themes

HACS requires a public GitHub repository, a root README, a root `hacs.json`, and one managed theme YAML file under `themes/`. A GitHub description and topics are required for inclusion in the default HACS catalog. Releases are optional. If releases exist, HACS scans the latest release; otherwise it scans the default branch.

Required repository shape:

```text
.
├── hacs.json
├── README.md
└── themes/
    └── bubble-glass.yaml
```

This repository can contain documentation and automation in addition to that minimal structure. `hacs.json` only needs a display name for this layout.

Sources:

- <https://www.hacs.xyz/docs/publish/start/>
- <https://www.hacs.xyz/docs/publish/theme/>
- <https://github.com/home-assistant-community-themes/template>

Research checked Bubble Card v3.4.1. Its base card resolves card-specific variables first, then global Bubble variables, then Home Assistant fallbacks. This confirms that public theme variables are the correct default integration layer. The repository will target Bubble Card 3.4.1 for the documented variable set while retaining a 3.2.0 minimum for standalone pop-ups.

HACS default-catalog submission also requires GitHub Issues to be enabled, README image URLs, a passing `hacs/action` check, and a published GitHub release. Custom-repository installation can use the default branch without a release.

Additional sources:

- <https://github.com/Clooos/Bubble-Card/blob/main/src/components/base-card/styles.css>
- <https://github.com/Clooos/Bubble-Card/blob/main/src/cards/pop-up/styles.css>
- <https://github.com/hacs/default/blob/master/theme>
## Visual system

The theme uses one cyan-to-violet accent family in both modes. This avoids a dashboard changing identity when the operating system changes mode.

### Dark mode

- Base: near-black navy.
- Glass surface: translucent blue-gray.
- Accent: bright cyan, with violet used for focus and selected layers.
- Borders: one-pixel white edge at low opacity.

- Shadows: dark ambient shadow plus a faint inset highlight.

### Light mode

- Base: cool blue-white.
- Glass surface: translucent white.
- Accent: saturated blue, dark enough for readable icons and controls.
- Borders: white highlight plus a blue-gray outline.
- Shadows: soft blue-gray ambient shadow.

### Glass hierarchy

- Page background gives translucent surfaces something visible to refract.
- Standard cards receive blur, saturation, a border, and restrained shadows through card-mod.
- Bubble Card receives translucent main, secondary, icon, sub-button, and pop-up surfaces through documented variables.
- Active controls use the accent color. Destructive, warning, and success states remain semantically distinct.
- Motion is short and disabled under `prefers-reduced-motion`.

## Compatibility decisions

- Keep one theme with `modes.light` and `modes.dark`.
- Require Bubble Card 3.2.0 or newer for the included standalone pop-up example.
- Treat card-mod as recommended, not required. Without it, palette, borders, shadows, and Bubble Card styling still work; standard cards lose backdrop blur.
- Avoid remote background images. They create a network dependency and make offline dashboards inconsistent. The theme uses CSS gradients.
- Avoid exact shadow-DOM chains, `nth-child`, and dashboard-specific width limits.
- Keep opaque-enough fallback background colors. Browsers without `backdrop-filter` still show readable cards.
- Do not globally hide the Home Assistant header. Kiosk behavior belongs in dashboard or kiosk configuration, not a theme.

## Implementation plan

1. Move the managed theme to `themes/bubble-glass.yaml` and rename it `Bubble Glass`.
2. Replace legacy duplicated settings with grouped, documented light and dark tokens.
3. Add current Home Assistant state, input, switch, dialog, and card variables.
4. Add Bubble Card's public global and card-specific variables.
5. Add restrained card-mod rules for standard cards and the app header, with reduced-motion support.
6. Add `hacs.json`, README installation instructions, a representative Bubble Card dashboard example, a license, and HACS validation workflow.
7. Validate YAML and JSON, run HACS validation where available, and parse a representative dashboard example.
8. Smoke-check that both modes expose every required glass and Bubble Card token.

## Risks and maintenance

- Home Assistant does not guarantee every frontend theme variable. The documented core variables are the compatibility baseline.
- `backdrop-filter` costs GPU time, especially on older wall tablets. The README includes a low-power override.
- Bubble Card may add or retire variables. Public variables fail gracefully because unknown theme keys are ignored.
- card-mod follows Home Assistant shadow DOM and can need updates after frontend changes. Rules here stay shallow and avoid one-off DOM paths.
- A public HACS listing still needs repository-side work after these files exist: create the GitHub repository, set description and topics, publish releases if desired, and submit it to HACS defaults when ready.

## Verification record

- All repository YAML parses, and `yamllint themes examples .github/workflows` passes clean with the repository rules.
- `hacs.json` is valid JSON and satisfies the HACS theme manifest requirement.
- A smoke check confirmed both modes define the full glass and Bubble Card token set, and the example exercises button, slider, climate, media-player, select, pop-up, and horizontal-buttons-stack cards with the standalone pop-up format.
- Bubble Card variables were checked against the 3.4.1 documentation tables and base-card cascade.
- A post-implementation review removed a card-mod more-info block that targeted Material Web Components dialog internals no longer rendered by current Home Assistant dialogs; dialog tinting now relies on Home Assistant's own dialog theme variables.

Publication record (2026-09-28):

- Published at <https://github.com/benkl/bubble-glass>, public, default branch `main`.
- Repository description, six topics, and Issues are set.
- The Validate workflow passed on the initial push: HACS validation and yamllint both green.
- Release `v1.0.0` published; HACS reports it as the installed version for custom-repository users.

Not planned for now: submission to the HACS default catalog (`hacs/default`). The theme installs as a custom repository, which is the documented path for repositories not in the catalog. Real dashboard screenshots are still outstanding. `docs/preview.jpg` is rendered from the theme tokens in a mock layout.

## v2.0.0 audit (2026-11-13)

Checked against the source of the Home Assistant frontend (`dev`), Bubble Card v3.4.3, and card-mod v4.2.1.

- **Fonts.** `typography.globals.ts` defines `--ha-font-family-body` and `--ha-font-family-heading`. Nothing reads `--primary-font-family` or `--paper-font-*` any more.
- **Accent scale.** `--primary-color` defaults to `--ha-color-primary-40`. Buttons, switches, and focus rings read the semantic `--ha-color-fill-primary-*`, `--ha-color-border-primary-*`, and `--ha-color-on-primary-*` tokens, which resolve to the `--ha-color-primary-NN` scale. Home Assistant regenerates that scale only from the user's profile color, never from a theme's `primary-color`, so the theme defines all eleven steps.
- **Opaque surfaces.** `--card-background-color` paints `ha-dropdown` (`--wa-color-surface-raised`), picker bottom sheets, `ha-slider`, map overlays, and the calendar card. It must stay opaque. Cards read `--ha-card-background` first.
- **Native blur.** `ha-card` and `ha-badge` support `--ha-card-backdrop-filter`. The theme does not set it: Bubble Card renders inside `ha-card`, and a filtered `ha-card` becomes the containing block for Bubble's fixed horizontal-buttons-stack footer. card-mod applies the blur and excludes `bubble-card`. Bubble pop-ups mount on the shadow root, so they are not affected.
- **Transparent HA cards.** Heading and toggle-group cards set `backdrop-filter: none` on their `ha-card`, and clock and date cards do the same through `.no-background`. The card-mod rule skips them.
- **card-mod themes.** `get_theme()` returns `card-mod-<type>-yaml` when present and only otherwise falls back to `card-mod-<type>`. Theme styles for type `card` are injected into the card element's shadow root, so `:host(<tag>) ha-card` selectors work.
- **Native header and dialog variables.** These need no card-mod: `--app-header-backdrop-filter`, `--app-header-border-bottom`, `--ha-dialog-surface-background`, `--ha-dialog-surface-backdrop-filter`, and `--dialog-box-shadow`.
- **Background.** `hui-view-background` sets `position: fixed` when the theme background contains the token `fixed`, and forces `background-attachment: scroll` as a Safari workaround.
- **Pop-up color.** Bubble Card writes `--bubble-pop-up-background-color` inline from `bg_color`, or from `--ha-card-background`, with `bg_opacity` applied. A theme value for it is always overridden. `--bubble-pop-up-main-background-color` is read only by the editor preview.
- **Separators.** The `--bubble-separator-*` variables are live. Bubble Card's base styles substitute `card-type` with the card's type at build time.
- **Rim light.** A masked `::after` ring (`mask-composite: exclude`) draws the edge gradient. On `ha-card` it sits exactly over the 1px border, which stays as the fallback. Bubble rows clip to their padding box (`overflow: clip`), so there the ring sits just inside the edge and the row border turns transparent. Bubble Card uses no `::after` on `.bubble-container` or the footer `.bubble-button`. The sub-buttons card's `hide_main_background` adds `.no-background`, which the module excludes.
- **Module storage.** Bubble Card Tools stores each module as `/config/bubble_card/modules/<id>.yaml` in the same `{ <id>: { name, code, ... } }` shape as `examples/bubble-glass-module.yaml`. The Module Editor's **Import Module** accepts that YAML pasted directly.
