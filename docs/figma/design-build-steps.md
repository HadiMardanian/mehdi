# Design → HTML/CSS/JS Build Steps — Simple Sign-Up & Sign-In (Inactive/Active)

**Source:** Figma file `Simple Sign-Up and Sign-In Web — Inactive and Active — صفحه ورود و ثبت نام — فعال و غیر فعال — Community`
Figma URL: `https://www.figma.com/design/LeCBagFlBAn9K56AfARuPj` (node `44-1047`)
Read via Figma REST API on 2026-09-07 → exported PNGs: `docs/figma/*.png`
Screen map (Observed via API, matches `RULES.md` R1): pages `Sign Up (Inactive)`, `Sign Up (Active)`; each holds 4 frames — **1 = EN Sign-Up, 2 = FA Sign-Up, 3 = EN Sign-In, 4 = FA Sign-In** (frame names are misleading for 3–4).

All w/h/colors below are **Observed** (Figma API). Anything without evidence is tagged `[Inferred]` / `[Unknown]`; never guessed colors/fonts.

---

## 0. Design tokens (CSS variables)

```css
:root {
  /* palette */
  --panel:      #b0d8da;  /* left branding panel + button stroke */
  --card:       #ffffff;
  --heading:    #383535;
  --ssotext:    #5a5a5a;
  --odivider:   #a3a3a3;
  --placeholder:#9d9d9d;  /* field label / icon / footer */
  --lang:       #a1a1a1;
  --line:       #e5e5e5;  /* 1px field underline + SSO border */
  --hover-label:#515151;
  --active:     #426bff;  /* focus underline + lifted label */
  --eye:        #c5c5c5;
  --btn:        #92cbce;  --btn-stroke: #b0d8da; --btn-text: #ffffff;
  /* type scale (see Fonts note) */
  --h1: 24px/800; --field: 16px/400; --small: 12px/700;
  --ssolabel: 12px/400; --langlabel: 14px/400; --active-label: 12px/700;
}
```

### Fonts
- EN design font (Observed): **PP Telegraf** (400/800) for headings/body/buttons; **Source Serif Pro** (600/700) for the floating field labels. FA text: **Noto Naskh Arabic** 400 [+ PP Telegraf for some FA nodes].
- `[Inferred]` PP Telegraf is a commercial font. For the plain-HTML build use a free metric-fallback: **Space Grotesk or Inter** for PP Telegraf, and **Source Serif Pro** (Google Fonts) + **Noto Naskh Arabic** (Google Fonts, FA text). Keep `font-family` fallbacks so swapping the real font later is a one-line change. Confirm final choice against the PNG exports.

### Layout (frame 1152×700, EN Sign-Up `1:2`)
- Whole screen: left **teal panel** ~420px (`#b0d8da`); right **white card** ~785px (visibly from x≈420 to right edge).
- Form column: x=590, width **427**; vertically step every **30px**; field rows are 35px tall, buttons 45px.
- Logo **48×48** at (25,20); tagline 24px white at (25,104) w316 (2 lines, `letter-spacing: 1.92px`); large illustration `Abstraction` 493×542 filling the panel below.
- Language selector top-right of card at (1017,15) 109×35.

Vertical rhythm (Observed): heading y=104 → SSO y=169 (−30) → OR y=244 (−35, +30) → F1 y=309 → F2 y=374 → F3 y=439 (sign-up) / F1 y=374 → F2 y=439 (sign-in) → button y=504 → footer y=579.

---

## 1. File plan (plain HTML/CSS/JS — RULES R3)

```
site/
├── index.html            # EN sign-up (default = first screen)
├── sign-in.html          # EN sign-in
├── css/
│   ├── tokens.css        # variables above  (+ FA overrides live in page-level class)
│   └── style.css         # layout + components + states
├── js/
│   ├── fields.js         # floating-label, states, eye/eye-slash, cursor
│   └── lang.js           # language toggle (sets class + dir, swaps data-* strings)
└── assets/               # logo.svg, brands.svg (Google/Facebook/eye/key icons), illustration.svg
```

`[Inferred]` split: can be one file each; the suggested split keeps tasks AUTH-01/AUTH-02 (EN/FA, states) independently committable. Keep markup identical per language — switch via attributes (`data-en` / data-fa`) + `<html dir>` (FA = RTL).

---

## 2. Build steps

### Step 1 — Skeleton (HTML)
1. Create `index.html` / `sign-in.html` with a full-viewport wrapper:
   - `<main class="split">` → `<section class="panel">` (teal) + `<section class="card">` (white).
   - In the card for sign-up: language selector, `<h1>Create Account</h1>`, SSO row (2 buttons), OR divider, field block (Full Name, Email Address, Password), submit `<button>Create Account</button>`, footer link `Already have an account? Log in`.
   - Sign-in: same minus Full Name; heading `Sign In`; SSO labels `Sign In With …`; button `Sign in`; footer `No Account? Create One!`.
2. Copy strings EXACTLY per `RULES.md` R2 (both locals). FA equivalents: heading «ایجاد اکانت»/«ورود به اکانت», fields «نام خانوادگی», «آدرس ایمیل», «رمز عبور», SSO «ثبت نام با حساب گوگل/فیسبوک» (sign-in «ورود با …»), button «ایجاد اکانت»/«ورود به اکانت», footers «از قبل حساب کاربری دارید؟ وارد شوید» / «حساب کاربری ندارید؟ بسازید», language «فارسی (FA)».
3. Wire the language toggle: a `<select>`-like control (text + chevron), mirrored top-right in EN / top-left in FA (Observed positions).

### Step 2 — Panels & spacing (CSS)
1. `.panel` = `background:#b0d8da`, min-width 420px; contains logo, tagline (white, 24px, `#b0d8da`), illustration.
2. `.card` = white, flex-grow; center the 427px form column.
3. Apply the 30px vertical rhythm from section 0.
   - Google SSO at left, Facebook at right (EN). **FA: swap order + icon/pill alignment** so direction renders from the right (`flex-direction: row` flips naturally with `dir=rtl`).
4. `Abstraction` illustration: export from Figma to `assets/illustration.svg`; if unreachable, a simple `[Inferred]` layered-`<svg>` placeholder — must not affect the form.

### Step 3 — SSO buttons
1. Two 188×45 pills, `border:1px solid #e5e5e5`, 12px/400 gray text `#5a5a5a`, icon 22×22 left of text (right in FA).
2. Icons (Observed colors): Google = 4-part logo `#ffc107/#ff3d00/#4caf50/#1976d2`; Facebook = `#3c5a99` square with white `f`. Use inline SVG in `assets/brands.svg` (don’t hotlink images — no external deps, RULES R3).
3. Divider `- OR -` / «- یا -», centered, 18px `#a3a3a3`. (No enclosing lines in the design — text only. `[Observed]`.)

### Step 4 — Text fields (the heart of the design — underline input)
Reproduce the custom **underline field** — NOT a bordered `<input>`:
- Structure per field: `label.field > svg.icon + span.label + input + span.underline`.
- Default (Observed, frame 1:2 + component `State=Default`):
  - Row 427×35; label text 16px/400 `#9d9d9d` sits inline next to icon (**NOT** inside the input as placeholder value — it's a positioned `<span>`).
  - Icon 22×22 `#9d9d9d` (account_circle / mail / key), left in EN, **right in FA**.
  - `1px` bottom line `#e5e5e5` full-width.
  - Password field additionally shows an **eye icon** 22×18 `#c5c5c5` at the right (EN) / left (FA) of the row.
- Hover (Observed, component `State=Hover`): label+small-label tone `#515151`, line stays `#e5e5e5`.
- Focus / Active (Observed, component `State=Active`):
  - Label **floats up** to 12px/700 and turns `#426bff` above the line (keep `transition` for animation).
  - Bottom underline gets a **partial `#426bff` stretch** from the icon edge to (just past) the floated label width — in EN it grows left→right, in FA right→left.
  - Show a blinking **cursor** `|` beside the label.
  - Password toggles **eye ↔ eye-slash** (Observed variant pair); clicking flips `type=password/text`.
- Iconography (Observed): mail/key/account_circle glyphs and eye/eye-slash are 22×22 (eye 22×18) Material-style line icons — inline SVG, `#9d9d9d` / `#c5c5c5`.

### Step 5 — Primary button & footer
1. Submit = 427×45, `#92cbce`, `border:1px solid #b0d8da`, white 800/16px. Sign-up label `Create Account`; sign-in label `Sign in`. (No radius observed — match exports; add hover/active affordance `[Inferred]` e.g. `filter:brightness(.97)` — keep color identical.)
2. Footer link 16px `#9d9d9d`: sign-up → `Already have an account? Log in` (links to sign-in.html); sign-in → `No Account? Create One!` (links to index.html). Preserve exact copy + FA.

### Step 6 — FA / RTL
1. Toggle adds class on `<html>` (or set `dir="rtl"` + `lang="fa"`); all layout mirrors automatically if you use logical properties (`margin-inline-start`, `inset-inline-*`) instead of `left/right`.
2. Mirror order for: language selector side, SSO button order, field icon side, eye toggle side, underline grow direction (set custom property e.g. `--underline-origin`: `left|right`).

### Step 7 — JS behaviors (`fields.js`, `lang.js`)
1. Floating label: on `focus` (and on `input` when non-empty) add `.active` to the field; on `blur` clear when empty.
2. Underline stretch: `.active .underline` uses `width` + `transform-origin` toward the label side.
3. Cursor: show via CSS `::after` blink when `.active`.
4. Password eye toggle: swap SVG + input type.
5. Language switch: swap `data-en`/`data-fa` text, flip `dir`, swap logo/labels without reload or with two static files per language.
6. No validation/submit backend — form is presentational (`RULES.md` Unknowns: no account behavior claimed). `[Unknown]` if a submit should do anything.

### Step 8 — Verify against exports
1. Compare visually against every PNG in `docs/figma/`:
   - Whole screens: `Sign Up 1–4.png`, `Sign In (EN).png`, `Sign In (FA).png`.
   - Active variants: `Sign In (EN) Active.png`, `Sign In (FA) Active.png`.
   - Field galleries (528×990): `Sign Up (EN).png`, `Sign Up (FA).png` — must match Default/Hover/Active + eye/eye-slash variants.
2. Check both languages render identically (mirrored) and all 4 screens open.

---

## 3. State matrix (must-match)

| State | Label/icon | Underline | Extras |
|-------|-----------|-----------|--------|
| Default | `#9d9d9d` 16px inline | `#e5e5e5` 1px | eye icon on password |
| Hover | `#515151` | `#e5e5e5` | — |
| Active (focus) | floats up 12px/700 `#426bff`, icon `#426bff`-adjacent | partial `#426bff` stretch | blinking cursor; password eye ↔ eye-slash |

## 4. Acceptance (maps to EPIC-AUTH / AUTH-01, AUTH-02)
- EN + FA Sign-Up per `docs/figma/Sign Up 1.png`/`2.png` (+ galleries) — matched pixels for colors/spacing.
- EN + FA Sign-In per `Sign Up 3`/`4` + `Sign In (EN/FA)( Active).png`.
- `RULES.md` R2 copy list exact; R4 field states exact; R3 plain HTML/CSS/JS; no external deps; R1 design fidelity.

## 5. Open questions / unknowns
- Font substitution for PP Telegraf (license) — choose fallback before build (`[Inferred]`).
- Which frame set the original `Sign Up 1–4.png` were exported from (Inactive vs Active) — `[Unknown]`; both exist. Treat whole-screen PNGs as the primary spec, component-set states as the field-state spec.
- Logo `Abstraction` illustration vector source — export from Figma or hand-render.