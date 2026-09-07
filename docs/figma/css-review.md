# CSS Review — Sign-Up/Sign-In pages (localhost:3000)

**Date:** 2026-09-07
**Scope (review only — no code changed):** `web/index.html` (EN Sign-Up, the page served at `http://localhost:3000/`), `web/css/styles.css`, `web/css/fa.css`, `web/signup-fa.html`.
**Method:** FIGMA REST API pixel data (frame `Sign Up 1` id `1:2`, Observer) ⇔ served CSS/HTML (`HTTP 200` verified for stylesheet + every asset + both fonts) ❯ `web/` filesystem.
**Verdict:** The page **is** mostly wired correctly (colors, radii, fonts and most coordinates match the design). ONE real layout bug breaks the staging: **field rows drift down and the password field overlaps the submit button** — caused by a wrong margin rule. Same bug is mirrored in the FA page.

---

## Root cause (primary)

`web/css/styles.css:154`

```css
.field + .field { margin-top: 65px; } /* rows at y 309 / 374 / 439 (65px apart) */
```

The comment is right, the math is wrong. Design rows are **65px apart BETWEEN TOPS**, but each `.field` is **35px tall** (`styles.css:148-153`); against a 35px-tall element a `margin-top: 65px` makes consecutive **tops** sit `35 + 65 = 100px` apart. The margin must be the gap only: **30px** (= 65 − 35).

### Impact (card-local y, computed vs design)

| Row | Design (y in frame `1:2`) | CSS gets | Delta |
|-----|---------------------------|----------|-------|
| Full Name | 309 | 309 (form top) | ✅ 0 |
| Email | 374 | `35+65` = 409 | ⬇ **+35** |
| Password | 439 | `100+35+65` = 509 | ⬇ **+70** |
| CTA (absolute `top:195`) | 504 | 504 | ✅ 0 |
| Footer (absolute `top:270`) | 579 | 579 | ✅ 0 |

Because the CTA/footer are absolutely positioned (immune to the drift) while field 2 and 3 are not, the **password field (509–544) is drawn on top of the submit button (504–549)** — a ~35px collision. The email field also sits ~35px too low. This is the "not styled properly" symptom.

**Mirrored:** the same rule exists in `web/css/fa.css:108` (`.fa-field + .fa-field { margin-top: 65px; }`) → identical overlap on the FA page.

**Fix (documented only, not applied — user forbade code changes):** change both `margin-top` values to `30px`.

---

## Verified correct (matched Observed design data)

| Item | Finding |
|------|---------|
| Asset loading | `css/styles.css`, 9 PNG assets, `urbanist.ttf`, `vazirmatn.ttf`, both `OFL.txt` → all `HTTP 200`; no 404s |
| CSS integrity | `styles.css` parses clean (40 `{` / 40 `}`), served file == local file |
| Colors | `--canvas-bg #b0d8da`, `--card-bg #fff`, `--line #e5e5e5`, `--btn #92cbce`, labels `#9d9d9d`, heading `#383535`, SSO `#5a5a5a` — all Observed |
| Corner radii | Card 36px / buttons 8px — **Observed** in Figma (`cornerRadius=36` Rectangle 1, `8` Rectangles 2/3/4) — not invented |
| Fonts | Self-hosted OFL substitutes (Urbanist→PP Telegraf, Vazirmatn→FA) — valid, load correctly |
| Form column | x=170 (card-local), width 427 — matches design x=590 artboard-local |
| Heading / lang / chevron / SSO / `- OR -` / CTA / footer | Positions and sizes match observed coordinates |
| Field icons | account/mail/key offsets + eye 22×18 at x=400 — match observed geometry |
| RTL mirror | `fa.css` mirrors card side, radius side, lang, heading, direction — structurally correct |
| Canvas | `.stage` 1152×700 + `overflow:hidden` reproduces artboard clipping of the card's off-canvas edge |

## Secondary (minor, observed discrepancies)

1. **Chevron pixel shift:** `.lang-chevron { left: 93px }` vs design ≈ 87px (6px) — arrow sits slightly right of spec. Cosmetic.
2. **Typed text color:** `.field-input { color:#383535 }` — placeholder color is Observed (`#9d9d9d`); typed-text color is **Inferred** (Figma shows empty fields).
3. **`body { min-width: 1152px }`** → no responsive behavior; this matches the fixed 1152×700 artboard but will overflow narrow viewports. Constraint, not a defect, unless responsive was required.

---

## Suggested acceptance check after the fix (manual)

- After applying the 30px margin: underline rows at y 309 / 374 / 439, password underline ~35px clear above the CTA, footer at 579.
- Compare visually against `docs/figma/Sign Up 1.png` / `Sign Up (EN).png`.

## Files referenced

- `web/index.html`, `web/css/styles.css`, `web/css/fa.css`, `web/signup-fa.html`
- Design source: `docs/figma/design-build-steps.md`, Figma frame `1:2` (EN Sign-Up) / `40:332` (FA Sign-Up)