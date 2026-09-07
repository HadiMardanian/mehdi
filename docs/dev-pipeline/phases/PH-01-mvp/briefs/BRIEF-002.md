# BRIEF-002 — 2026-09-07

**Phase:** `PH-01` (mvp)
**Source:** figma-api (Observed evidence — file structure fetched via Figma REST API with user token; no pixel reading)

## Raw input (evidence)

File `LeCBagFlBAn9K56AfARuPj` document tree:
- Page **Sign Up (Inactive)**: `Sign Up 1` (1:2) EN Sign-Up · `Sign Up 2` (40:332) FA Sign-Up · `Sign Up 3` (41:459) EN Sign-In · `Sign Up 4` (41:705) FA Sign-In
- Page **Sign Up (Active)**: `Sign Up 1` (61:19) EN Sign-Up · `Sign Up 2` (61:143) FA Sign-Up · `Sign Up 3` (61:267) EN Sign-In · `Sign Up 4` (61:385) FA Sign-In · `Sign Up (EN)` (65:797) + `Sign Up (FA)` (65:982) field-state galleries

Copy inventory (Observed text nodes): EN headings `Create Account` / `Sign In`; SSO `Sign Up/Sign In With Google` + `…With Facebook`; `- OR -`; fields `Full Name` (sign-up only), `Email Address`, `Password` (+ eye / eye-slash toggle); buttons `Create Account` / `Sign in`; footers `Already have an account? Log in` / `No Account? Create One!`. FA: «ایجاد اکانت»/«ورود به اکانت», «ثبت نام/ورود با حساب گوگل/فیسبوک», «نام خانوادگی», «آدرس ایمیل», «رمز عبور», «از قبل حساب کاربری دارید؟ وارد شوید», «حساب کاربری ندارید؟ بسازید»; language selectors `English (UK)` / «فارسی (FA)».

Field component sets (`Sign Up (EN)/(FA)` galleries): each field has states **Default / Hover / Active**; Password adds eye vs eye-slash variants; cursor component visible in Active states.

Exported to `docs/figma/` (scale 2, 2304×1400): `Sign In (EN).png` (41:459), `Sign In (FA).png` (41:705), `Sign In (EN) Active.png` (61:267), `Sign In (FA) Active.png` (61:385).

## Extracted claims (this session)

| Local | Class | Summary | Matches | Action |
|-------|-------|---------|---------|--------|
| 1 | refinement | Frame map: `Sign Up 1–4` = EN/FA Sign-Up then EN/FA Sign-In (both Inactive & Active pages) | CLM-005 | supersede CLM-005 → CLM-006 |
| 2 | refinement | "Active/Inactive" = two page sets + per-field states Default/Hover/Active (incl. password eye toggle, cursor) | CLM-002 | absorb → CLM-007 |
