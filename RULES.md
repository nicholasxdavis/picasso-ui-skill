---
name: picasso-ui-rules
description: Hard house rules for Picasso UI. Ban em dashes, emojis, obnoxious glows, gradients, hover effects, and loud palettes. Enforce sizing, spacing, consistency, branding, motion restraint, and anti-AI-slop tells. Read with picasso-ui/SKILL.md whenever designing or reviewing UI.
---

# Picasso UI Rules

Non-negotiable. Apply on every screen, component, and marketing surface. If a choice fights these rules, change the choice.

## Absolute bans

1. **No em dashes.** Never write Unicode em dash (U+2014) or en dash (U+2013) in UI copy, docs shipped with the product, alt text, or error strings. Use a period, comma, colon, parentheses, or a plain hyphen `-` instead.
2. **No emojis.** Never use emoji in UI, icons, empty states, buttons, nav, charts, or marketing chrome unless the user explicitly requests them for that surface.
3. **No obnoxious glows.** Ban neon blooms, colored outer glows on buttons/cards, glow trails, and soft luminous blobs used as decoration. Depth comes from value (see [SKILL.md](SKILL.md) shadow / hierarchy notes), not bloom.
4. **No obnoxious gradients.** Ban rainbow, purple-to-indigo, mesh, aurora, and multi-stop decorative fills on heroes, buttons, text, and backgrounds. Flat fields preferred. A quiet two-stop linear wash is allowed only when it is structural (e.g. subtle scrim over a photo) and never the personality of the brand.
5. **No obnoxious hover effects.** Ban scale pops, bounce, wobble, glow-on-hover, color rainbow shifts, and multi-property fireworks. Hover may shift one quiet property (tone step, underline, border opacity) with a short ease. Focus states stay clear and accessible without spectacle.
6. **No obnoxious color palettes.** Ban high-chroma rainbow systems, default AI purple/indigo stacks, neon-on-near-black, and candy multi-accent kits. Prefer one brand hue, muted with gray into tones/shades (see `.look-at` tint/tone/shade), neutrals for structure, and one restrained accent for primary actions.
7. **No opaque white plates under transparent media.** Live mascots / WebGL / transparent canvases sit on the section field. Never park them on a white square inside a colored blob.
8. **No `transition: all`.** List properties explicitly. Prefer `transform` and `opacity`.

## AI default tells (avoid unless the brief demands them)

- Warm cream + terracotta serif kit as a generic "premium" look
- Near-black + acid green / vermilion as a generic "dev tool" look
- Broadsheet hairline newspaper layout as a generic "editorial" look
- Identical SaaS card grids with the same radius and soft grey shadow on everything
- Tracked ALL-CAPS eyebrows on every heading; middle-dot meta rows; arrow suffixes on every CTA
- Section fade-and-slide-up cascades; hover animation on every card

## Required craft

### Sizing
- Type and controls follow a clear scale (e.g. 12 / 14 / 16 / 20 / 24 / 32 / 40). Do not invent one-off sizes per component.
- Touch targets at least 40px on interactive controls unless the product already defines denser tooling chrome.
- Icons share one optical size per context (nav, inline, empty state).

### Spacing
- Use a single spacing rhythm (4 or 8 base). Related items sit closer (proximity). Unrelated groups get a full step of air (negative space as structure, not leftover).
- Padding inside containers is even and intentional. Do not trap content against edges.
- Sections breathe: one job per section, one primary focal mass.

### Consistency
- Same role = same treatment (Gestalt similarity). Primary buttons match. Labels match. Card radii match.
- Align to a grid or shared edges (alignment / continuity). Do not free-float one-offs.
- Repeating modules use regular or progressive rhythm, not random gaps.

### Branding
- Brand or product name is a first-class signal on branded pages, not a tiny nav afterthought.
- Colors, type, and radius come from the product tokens or a stated palette. Do not invent a second brand for "this one screen."
- Imagery shows the product, place, or real subject when available. Decorative abstraction is not a substitute for brand.

### Motion
- Justify every animation (frequency + purpose). Never animate high-frequency keyboard actions.
- Enter/exit: strong ease-out. Never ease-in for UI chrome.
- Most UI motion under ~300ms. Honor `prefers-reduced-motion`.
- Quiet `:active` press feedback on buttons is allowed and encouraged.

### Accessibility floor
- Visible `:focus-visible` (never `outline: none` without a replacement)
- Labels or `aria-label` on controls; icon-only buttons named
- Images have `alt` (or empty alt if decorative) and width/height to limit CLS
- Semantic HTML before ARIA

## Allowed quiet depth

- Flat color fields and clear borders when needed
- One soft tone step between surface levels (lighter or darker field, not a glow)
- Controlled cast shadow only when elevation must be readable, low opacity, short distance, neutral gray (not colored bloom)
- Motion only when it clarifies state or hierarchy, never as ornament

## Review checklist

Before shipping a UI change, confirm:

- [ ] No em dashes or en dashes in copy
- [ ] No emojis unless explicitly requested
- [ ] No glow / neon / mesh / rainbow gradient personality
- [ ] Hover is quiet (one property) or absent
- [ ] Palette is restrained: neutrals + one brand hue + one accent max
- [ ] Spacing uses the shared scale; related items grouped; unrelated items separated
- [ ] Type and control sizes come from the scale
- [ ] Brand signals are clear and consistent
- [ ] Hierarchy is readable without decoration (size, contrast, proximity, alignment)
- [ ] Motion justified; reduced motion respected; no `transition: all`
- [ ] Focus visible; controls labeled; no white plate under transparent media
