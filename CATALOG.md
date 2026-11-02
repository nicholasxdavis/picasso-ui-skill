# Picasso UI Catalog

Quick index for matching a project type to inspiration plates and code blocks. Paths are relative to this skill folder (`picasso-ui/`). Part of the unified Picasso skill (formerly `reusable-ui`).

## Inspiration plates (`.look-at/reusable-inspiration/`)

Human-made reference screenshots. Prefer these for look, composition, type pairing, and spacing. Open with the image reader (do not guess from the filename alone).

### Modern product / SaaS / membership

| File | What to steal |
| --- | --- |
| `modern-cta.webp` | Quiet membership CTA, serif headline + sans body, dual buttons, soft product render |
| `modern-cta2.webp` | Alternate CTA density / hierarchy |
| `modern-cta3.webp` | Alternate CTA layout |
| `modern-about-us.webp` | Asymmetric about: photo collage + muted field + editorial type |
| `modern-footer.webp` | Multi-column footer, serif labels, quiet newsletter |
| `modern-plans.png` | Pricing / plans section structure |
| `mdern-cards.webp` | Card grid rhythm and spacing |
| `modern-product-cards.webp` | Product/feature card treatment |
| `product-cards.webp` | Gallery/shop grid: serif meta + mono price, huge air |
| `simple-faq.webp` | FAQ accordion: one soft panel, plus/minus, no chrome noise |

### Hospitality / bar / nightlife / events

| File | What to steal |
| --- | --- |
| `bar1.png` … `bar5.png` | Dark premium bar sites: gold accent, serif headlines, lifestyle photo + copy splits |
| `farmish-beer.webp` … `farmish-beer6.webp` | Brewery / beer brand storytelling and section pacing |

### Food / restaurant / grocery

| File | What to steal |
| --- | --- |
| `foodbar1.png` … `foodbar11.png` | Restaurant / food-bar landing composition and photography use |
| `mex-food.png`, `mex-food2.png`, `mex-food3.png`, `mex-food5.png` | Bold food brand color and menu/hero energy |
| `modernfood.png`, `modernfood2.png`, `modernfood3.png` | Cleaner modern food retail / delivery look |
| `simplefood1.png` … `simplefood5.png` | Simpler food layouts, less chrome |
| `farmish.webp` | Farm / produce brand atmosphere |

**Rule of thumb:** pick 2 to 3 files from the row that matches the brief. Mix one hero/section plate with one component plate (cards, FAQ, footer, CTA) when possible.

---

## Code blocks (`.look-at/reusable-blocks/`)

Each folder has `src/index.html`, `src/style.css`, `src/script.js` (and often `dist/`). Read `README.md` for provenance. Adapt into the project stack. Do not paste glitter/rainbow/glow treatments into a Picasso-ruled surface unless the user asked for that energy.

### Full / marketing pages

| Block | Use when |
| --- | --- |
| `stripe-landing-page-with-css-grid` | SaaS marketing grid, product landing skeleton |
| `bricks-iohomepage` | Bootstrap-era marketing homepage structure |
| `netflix-landing-page-clone` | Media / entertainment dark hero + rows |
| `react-dailyui003landing-page` | Another media landing take |
| `travel` | Travel / destination landing with Flex + Grid |

### Commerce / product UI

| Block | Use when |
| --- | --- |
| `product-spotlight-cards` | Featured product cards |
| `configurable-add-to-cart` | Add-to-cart control patterns |
| `add-to-cart-rainbow-border` | Cart CTA with decorative border (tone down for Picasso) |
| `quantity-picker-w-type-number` | Quantity steppers |
| `swatch-hover-w-css-gsap` | Color/material swatch hover |
| `booking-button-w-mask-image-and-container-queries` | Booking / reserve CTA with modern CSS |

### Cards, disclosures, panels

| Block | Use when |
| --- | --- |
| `flip-flap-cards` | Flip / reveal cards |
| `animated-hover-disclosures` | Hover disclosure panels (keep hover quiet under Picasso) |
| `exclusive-morphing-disclosure-w-details` | `<details>` based exclusive accordion |
| `anchor-positioning-hover-cards` | Anchor-positioned hover cards |
| `resizable-slide-panels` | Split / resizable panes |

### Forms and controls

| Block | Use when |
| --- | --- |
| `auto-resizing-text-input-with-form-sizing-content-chrome-120` | Growing text fields |
| `ios-alarm-barrel-time-input` | Barrel / drum time picker |
| `dynamic-toggle-with-type-radio-has` | Radio / toggle groups with `:has` |
| `cross-browser-liquid-toggle-drag-tap` | Liquid toggle (simplify if too flashy) |
| `impossible-checkbox-v2` | Experimental checkbox (inspiration, not default) |
| `svg-menu-toggle-button-with-linear-stroke-box-and-individual-transform-properties` | Icon menu toggle |

### Scroll, sticky, motion systems

| Block | Use when |
| --- | --- |
| `progressive-scroll-tricks` | Scroll-linked storytelling |
| `you-can-scroll` | Scroll affordance / coaching |
| `css-sticky-progressive-blur-on-scroll` | Sticky header blur (use lightly) |
| `scroll-driven-layouts-w-shape-outside` | Scroll-driven layout |
| `configurable-scroll-driven-sine-wave` | Decorative scroll wave (optional) |
| `section-color-crossfade-with-opacity-sda` | Section color shifts on scroll |
| `css-crossfade-carousel-w-scrollchrome` | Carousel / crossfade |
| `sticky-window-scroller-w-3d-view` | Sticky framed scroller |
| `waapi-looping` | WAAPI loop patterns |
| `infinite-css-logo-marquee` | Logo marquee |
| `dynamic-anchor-links-anchor-mix-blend-mode` | Section nav / blend tricks |

### Type, mask, experimental effects (high caution)

| Block | Note |
| --- | --- |
| `building-text-with-svg` | SVG constructed type |
| `css-scroll-driven-knockout-text` | Knockout / masked text on scroll |
| `webkit-animated-text-shadow-pattern` | Text-shadow patterns (easy to get loud) |
| `border-punch-outs-w-mask-composite` | Mask composite cutouts |
| `masked-svg-loader-w-css` | SVG loaders |
| `masked-glitter-icons-w-canvas` | Glitter icons: usually skip under Picasso |
| `glitter-mix`, `glitter-thumb` | Glitter demos: usually skip |
| `glowy-border-shimmer-button-w-container-queries` | Glow shimmer: usually skip |
| `rainbow-button-longer-hue-animation-composition` | Rainbow hue: usually skip |
| `noise-webgl-button-for-web` | WebGL noise button: specialty only |
| `liquid-glass-scroll-drag-configure-chromium` | Liquid glass: Chromium specialty |
| `css-scoped-custom-property-trail-grid` | Pointer trail grid |
| `make-it-pop` | Pop / emphasis experiments |
| `don-t-touch`, `pen-export-MWRegye`, `untitled` | Misc pens: read before use |

---

## Suggested bundles by project type

| Project type | Inspiration (pick 2 to 3) | Blocks (0 to 2) |
| --- | --- | --- |
| SaaS / tool landing | `modern-cta.webp`, `modern-plans.png`, `simple-faq.webp` | `stripe-landing-page-with-css-grid` |
| Membership / community | `modern-cta.webp`, `modern-about-us.webp`, `modern-footer.webp` | optional disclosures |
| E-commerce / product | `product-cards.webp`, `modern-product-cards.webp`, `modern-cta2.webp` | `product-spotlight-cards`, `configurable-add-to-cart` |
| Restaurant / food | `foodbar*`, `modernfood*`, or `simplefood*` | `booking-button-…` if reservations |
| Bar / nightlife | `bar1.png` to `bar5.png`, `farmish-beer*` | rarely need flashy blocks |
| Travel / leisure | travel-adjacent food/bar plates + airy CTAs | `travel` |
| Media / entertainment | dark bar plates for tone | `netflix-landing-page-clone` |
| Dashboard / app chrome | usually **skip** inspire mode; use Picasso art menus + product UI patterns | forms/toggles only if stuck |
