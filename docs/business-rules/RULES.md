# Business rules — project1

Product-wide rules absorbed from phase briefs. Indexed in `docs/dev-pipeline/SHARED.md`.
Cite `CLM-*` / `BRIEF-*` on additions. Never silently overwrite — extend additively.
Updated 2026-09-07 (BRIEF-003).

## R1 — Design fidelity (source: CLM-002 + CLM-006/007, BRIEF-001/002)
- Sign-Up / Sign-In UI must match the referenced Figma design **exactly**; the design is the authoritative spec.
- **Screen map (Observed via Figma API):** the Figma pages are `Sign Up (Inactive)` and `Sign Up (Active)`. On each, the four screens are: `Sign Up 1` = EN Sign-Up, `Sign Up 2` = FA Sign-Up, `Sign Up 3` = EN Sign-In, `Sign Up 4` = FA Sign-In. (Frame names are misleading: screens 3–4 are Sign-In.)
- Visual references in `docs/figma/`:
  - `Sign Up 1.png` / `Sign Up (EN).png` — EN Sign-Up; `Sign Up 2.png` / `Sign Up (FA).png` — FA Sign-Up
  - `Sign In (EN).png` (inactive), `Sign In (FA).png` (inactive), `Sign In (EN) Active.png`, `Sign In (FA) Active.png` — Sign-In screens
  - `Sign Up (EN).png` / `Sign Up (FA).png` (528×990) — field-state galleries
- Acceptance baseline = visual match to the exports for the states they show.
- **Exports origin (resolved 2026-09-07):** the user's `Sign Up 1–4.png` come from the Figma **`Sign Up (Active)`** page (FA export pixel-identical 0.00% to active frame 61:143; EN matches frame 61:19). Product pages ship the **Active look** (user decision).
- Observed geometry: card radius 36px, SSO/CTA radius 8px; form column x=590 w=427 (artboard-local); Active-look field boxes 427×53 at y 294/372/450 (78px rhythm), CTA y 528, footer y 598 (verified 1.30% EN / 1.13% FA vs exports).
- Evidence docs: `docs/figma/css-review.md` (CSS review), `docs/figma/design-build-steps.md` (build steps + state matrix) — both Observed inputs (BRIEF-003).

## R2 — Bilingual pages (source: CLM-004, BRIEF-001/002)
- Every page ships in **English** and **Persian (FA)** variants.
- Observed copy (from API text nodes — EN): headings `Create Account` / `Sign In`; SSO `Sign Up With Google`, `Sign Up With Facebook` (sign-in: `Sign In With …`); separator `- OR -`; fields `Full Name` (sign-up only), `Email Address`, `Password`; buttons `Create Account` / `Sign in`; footers `Already have an account? Log in` / `No Account? Create One!`; language selector `English (UK)`.
- FA: «ایجاد اکانت»/«ورود به اکانت», «ثبت نام با حساب گوگل»/«ورود با حساب گوگل» (+ فیسبوک), «نام خانوادگی», «آدرس ایمیل», «رمز عبور», «از قبل حساب کاربری دارید؟ وارد شوید», «حساب کاربری ندارید؟ بسازید», language «فارسی (FA)».
- Exact styling/direction: read from the exports (Observed paths); not pixel-read in this session.

## R3 — Stack constraint (source: CLM-003, BRIEF-001)
- Implement with **plain HTML/CSS/JS** — no framework.

## R4 — Field states (source: CLM-007 + CLM-011, BRIEF-002/003)
- Sign-up fields (Full Name / Email / Password) define states **Default / Hover / Active**; Password adds **eye / eye-slash** toggle variants; an **active cursor** is part of the Active state.
- Observed state specifics (state galleries + component sets; feeds AUTH-01-03 / AUTH-02-03):
  - **Default:** label 16px/400 `#9d9d9d` inline beside the icon (positioned span, not a placeholder value); 1px underline `#e5e5e5` full-width; password shows eye icon 22×18 `#c5c5c5`.
  - **Hover:** label tone `#515151`; underline stays `#e5e5e5`.
  - **Active (focus):** label floats up to 12px/700 `#426bff`; partial `#426bff` underline stretch from icon edge to (just past) the label width — left→right EN, right→left FA; blinking cursor beside the label; password toggles eye↔eye-slash.
- Note: the shipped (Active-look) pages render **boxed outline fields** (measured pixels) — the box is the field chrome; the underline/floating-label behaviors above are the interactive layer for the state tasks (scope note in BRIEF-003).

## Unknowns (do not guess)
- Exact colors, spacing, typography/fonts, iconography — read from the exports.
- Fonts: design uses **PP Telegraf** (EN), **Source Serif Pro** 600/700 (floating labels), **Noto Naskh Arabic** 400 (FA text) — all Observed (CLM-010). The implementation uses OFL substitutes (Urbanist → PP Telegraf, Vazirmatn → FA) — accepted unless exact fonts are required.
- Form submission / account behavior — no backend claim exists (UI only).
- Pending cosmetic fixes from css-review (CLM-009): chevron ≈6px drift; typed-text color `#383535` is Inferred.
