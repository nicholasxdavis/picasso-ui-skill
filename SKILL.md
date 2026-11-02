---
name: picasso-ui
description: Design, inspire, implement, and critique UI with art foundations plus a human reference library. Covers hierarchy, Gestalt, composition, rhythm, color, motion craft, anti-AI-slop tells, adaptable CodePen blocks, and a Vercel-style quality gate. Use when building, redesigning, polishing, or reviewing interfaces, landing pages, dashboards, or components. Always apply RULES.md.
---

# Picasso UI

Design like an artist who ships product, not like a model averaging every SaaS template.

Hard bans live in [RULES.md](RULES.md). Art plates and human site references live in [`.look-at/`](.look-at/). Project-type index for inspiration and code blocks: [CATALOG.md](CATALOG.md). Optional gallery production loop: [`taste-skill/`](taste-skill/). Read RULES first.

Absorbs the former `reusable-ui` skill, optional [taste-skill/](taste-skill/) (Leonxlnx tasteskill v2), and selected ideas from public agent skills. See [ATTRIBUTION.md](ATTRIBUTION.md).

## When to use

- New screens, landing pages, marketing sections, dashboards, settings, empty states
- Redesigns that feel generic, templated, or AI-made
- Critique / accessibility / UX audit passes before ship
- Need for human inspiration plates or adaptable interaction blocks
- Anytime the brief needs composition, hierarchy, brand-fit taste, or motion polish

Skip the inspiration library for tiny bugfixes, token renames, or dense app chrome that already has a design system. Art rules and RULES still apply.

## Workflow

Work in order. Do not skip the plan review.

1. **Brief.** Name subject, audience, one primary action, brand tokens, and real imagery. If the brief is thin, propose subject + audience + job in one short line and proceed.
2. **Rules lock.** Apply [RULES.md](RULES.md) for the whole pass.
3. **One idea.** One sentence: what this surface must make someone feel or do.
4. **Design plan (before code).** Write a compact plan:
   - Color: 4 to 6 named hex values (base, neutrals, one accent)
   - Type: one or two families and their roles (not Inter / Roboto / Arial / system defaults unless the product already uses them)
   - Layout: one composition arrangement + ASCII or one-sentence wire
   - Principles: what makes *this* page specific to the subject
5. **Anti-default review.** Check the plan against [AI cluster tells](#ai-cluster-tells). If a choice is the generic default for any similar page, revise it and note why.
6. **Strategies.** Choose 1 composition arrangement, 2 to 3 hierarchy tools, 1 Gestalt plan, 1 rhythm, 1 color harmony. State them in notes.
7. **Inspire (situational).** `inspire: skip` | `inspire` | `inspire + block`. See [Inspiration and blocks](#inspiration-and-blocks).
8. **Open plates.** Read cited `.look-at` art images and any inspiration screenshots with the image reader. Steal structure, not decoration.
9. **Compose, then style.** Focal mass, secondary support, quiet ground first. Color and type second. Effects last (usually never).
10. **Motion check.** Run the [motion decision framework](#motion-decision-framework) before adding animation.
11. **Build.** Project-native stack. Adapt blocks; never paste raw pens.
12. **Self-critique.** Done checklist + optional [interface audit](#interface-audit-optional). Fix arrangement before pixels. Screenshot if you can.

## Ground in the subject

Distinctive choices come from industry, materials, vernacular, and audience. A kids' toy and a finance dashboard should not share a palette or type recipe. Build with real product content throughout. No lorem vanity stats.

Hero: open with the most characteristic thing in the subject's world (headline, image, live demo, interactive moment). A big number + small label + gradient accent is a common default; use it only when it is truly best.

Spend boldness in one place. One memorable element; everything else quiet. Chanel's rule: remove one accessory before you leave.

## AI cluster tells

Legitimate for some briefs, but defaults rather than choices. Where the brief leaves freedom, do not spend it here:

1. Warm cream field (~`#F4F1EA`) + high-contrast serif + terracotta/clay accent (~`#D97757`)
2. Near-black field + single acid-green or vermilion accent
3. Broadsheet: hairline rules, zero radius, dense newspaper columns
4. SaaS-card kit: identical rounded cards, one radius everywhere, soft grey shadow under each, decorative gradient washes
5. Template chrome: tracked ALL-CAPS eyebrows / kickers above every heading; meta joined with middle dots; `WORD - fragment` labels; tinted near-black instead of true black; monospace for every small label; arrows appended to every CTA. On brand heroes, let the product name carry the band; skip the extra eyebrow.
6. Purple-to-indigo / mesh / aurora personality (also banned in RULES)
7. Fade-and-slide-up on every section; hover fireworks on every card
8. Opaque white square plate under a transparent mascot / WebGL canvas inside a colored blob

Brief wins when it explicitly asks for one of these looks.

## Strategy menus (choose, do not dump)

### Hierarchy

Open [`.look-at/visual-hierarchy.webp`](.look-at/visual-hierarchy.webp) and [`.look-at/visual-hierarchy-sytem.png`](.look-at/visual-hierarchy-sytem.png).

| Tool | UI move |
| --- | --- |
| Size | One dominant headline or hero block; supporting type steps down |
| Contrast | Primary action owns the strongest value/hue gap |
| Color | One accent for what matters; neutrals elsewhere |
| Proximity | Label hugs control; unrelated modules get air |
| Alignment | Shared edges beat centered float stacks |
| Repetition / break | Repeat rhythm; break once for the focal CTA |
| Overlap / layer | Tone step, not glow |
| Texture & frame | Contain only when the region needs a job |

### Gestalt

Open [`.look-at/gestalt-principles.png`](.look-at/gestalt-principles.png) and [`.look-at/gestalt-principles-ui.jpg`](.look-at/gestalt-principles-ui.jpg).

Similarity, proximity, common region, continuity, closure, figure/ground, one focal point, common fate, Pragnanz (simplest readable structure).

### Composition

Open [`.look-at/composition-guide.jpg`](.look-at/composition-guide.jpg), [`.look-at/composition-examples.jpg`](.look-at/composition-examples.jpg), [`.look-at/composition-theory.jpg`](.look-at/composition-theory.jpg).

Pick **one** primary arrangement per viewport or section: rule of thirds, L-arrangement, diagonal, pyramid / centered mass, S-curve, cross, radial, tunnel / frame-in-frame, focal mass, golden / spiral.

Map: tree = primary brand/visual, horizon = divider, path = reading flow to CTA.

### Rhythm

Open [`.look-at/visual-rhythm.png`](.look-at/visual-rhythm.png) and [`.look-at/visual-rhythm-system.png`](.look-at/visual-rhythm-system.png).

Repetition, pattern, regular, flowing, progressive. Do not mix all three in one view.

### Proportion, negative space, color, light

- Proportion plates: [`.look-at/proportion-scale.jpg`](.look-at/proportion-scale.jpg), [`.look-at/proportion-theory.jpg`](.look-at/proportion-theory.jpg). Fix type scale, columns, image aspect, radius once.
- Negative space: [`.look-at/negative-space-example.webp`](.look-at/negative-space-example.webp), [`.look-at/negative-space-example2.webp`](.look-at/negative-space-example2.webp). Empty space is a drawn shape.
- Color: [`.look-at/colour-theory.webp`](.look-at/colour-theory.webp), [`.look-at/color-theory-constrats-of-saturation-2.jpg`](.look-at/color-theory-constrats-of-saturation-2.jpg). Brand hue → tints / shades / tones; one harmony; value beats chroma.
- Light: [`.look-at/shadow-theory.webp`](.look-at/shadow-theory.webp). Depth from value; short soft neutral shadow only when elevation must read. No colored glow.

## Typography

- One family or two clearly distinct families. Deliberate choices, not default stacks.
- Clear scale; intentional weights and tracking. Line length under ~80 characters; serif body can run slightly longer with a touch more line-height.
- Avoid common generated tells: single-word accent in a headline, ALL-CAPS labels everywhere, decorative eyebrows above every block.
- Structural devices (borders, numbers, dividers) encode information. Numbered `01 / 02 / 03` only when content is truly a sequence.

## Copy

- No em dashes or en dashes in UI (RULES). Period, comma, colon, parentheses, or plain hyphen.
- No emojis unless the user asked.
- Plain words. Active voice. CTA names the action (`Save changes`, not `Submit`). Same verb through the flow.
- Errors explain fix next; empty states invite action. Conversational, sentence case, no filler.
- Proof next to claim.

## Inspiration and blocks

Former `reusable-ui` library. Situational.

| Mode | When |
| --- | --- |
| `inspire: skip` | Tiny fix, clear brief, dense app chrome with a system |
| `inspire` | Marketing / brand / commerce / hospitality; or layout sliding to AI defaults |
| `inspire + block` | Need a concrete interaction (accordion, booking CTA, cart, scroll section) |

1. Open [CATALOG.md](CATALOG.md). Match project type.
2. Read **2 to 3** files from [`.look-at/reusable-inspiration/`](.look-at/reusable-inspiration/) with the image reader.
3. Write a steal list: composition, type pairing, palette mood, spacing, what you will **not** copy.
4. Optional: pick **1** block from [`.look-at/reusable-blocks/`](.look-at/reusable-blocks/). Read README + `src/`. Adapt to stack and brand. Strip glitter/rainbow/glow that fights RULES.
5. Report lightly: which plates, which block, stolen vs discarded.

Quick starts: quiet SaaS → `modern-cta.webp`, `modern-plans.png`, `simple-faq.webp`; food → `foodbar*` / `modernfood*`; bar → `bar1.png`…`bar5.png`; skeleton → block `stripe-landing-page-with-css-grid` or `travel`.

Anti-slop for the library: see before inventing; few references deep use; steal structure not identity; blocks are ingredients; effects optional; no stockpiling; transparent media stay clear (no white plate under mascots).

## Motion decision framework

Before any animation:

1. **Should it animate?** 100+/day (keyboard shortcuts): never. Dozens/day: remove or reduce. Occasional (modal, toast): standard. Rare: delight allowed. Never animate keyboard-initiated actions.
2. **Purpose?** Spatial consistency, state change, explanation, press feedback, or prevent a jarring jump. "Looks cool" + frequent use = skip.
3. **Easing.** Enter/exit → strong ease-out (`cubic-bezier(0.23, 1, 0.32, 1)`). On-screen move → ease-in-out. Hover/color → `ease`. Constant (marquee) → linear. Never ease-in for UI (feels sluggish).
4. **Duration.** Most UI under ~300ms. Prefer `transform` / `opacity` only. Never `transition: all`. Honor `prefers-reduced-motion`.
5. **Press feedback.** Buttons need a quiet `:active` (e.g. slight scale). Keep Picasso hover: one property, no bounce/glow fireworks.

One orchestrated page-load moment beats scattered section fades.

## Interface audit (optional)

When the user asks to review UI, check accessibility, or audit design:

1. Fetch latest Vercel Web Interface Guidelines: `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
2. Apply those rules to the named files.
3. **Picasso overrides:** no em dashes / en dashes in UI copy; no emojis unless requested; no obnoxious glow/gradient/hover/palette (RULES win).
4. Report terse `file:line` findings grouped by file.

Also verify: responsive mobile, visible `:focus-visible`, reduced motion, images with dimensions, labels on controls, icon buttons with names.

## Creativity boosters

When the layout wants "centered headline, three icon cards, soft gradient":

1. Inventory eight product specifics (name meaning, material, constraint, ritual, metric, place, audience verb, artifact).
2. Pick one as the compositional idea.
3. Choose an arrangement that can carry it.
4. One job and one focal point per section.
5. Real content and real imagery.

## Done checklist

- [ ] RULES.md obeyed
- [ ] Design plan written and anti-default reviewed before code
- [ ] Named arrangement + hierarchy + Gestalt + rhythm + harmony
- [ ] Relevant art plates and (if used) inspiration images actually read
- [ ] Steal list applied if inspire mode; blocks adapted not dumped
- [ ] One clear focal point; secondary support; quiet ground
- [ ] Motion justified; reduced motion respected
- [ ] Hover quiet; no emoji; no em/en dashes
- [ ] Brand recognizable without nav chrome
- [ ] Quality floor: mobile, focus, contrast, real copy

## File map

| Path | Role |
| --- | --- |
| [RULES.md](RULES.md) | Hard bans and required craft |
| [CATALOG.md](CATALOG.md) | Inspiration plates + code blocks by project type |
| [`.look-at/`](.look-at/) | Art theory plates |
| [`.look-at/reusable-inspiration/`](.look-at/reusable-inspiration/) | Human site screenshots |
| [`.look-at/reusable-blocks/`](.look-at/reusable-blocks/) | Adaptable HTML/CSS/JS pens |
| [`taste-skill/`](taste-skill/) | Optional gallery-grade production loop |
| [ATTRIBUTION.md](ATTRIBUTION.md) | Upstream skill ideas absorbed |
