# EPIC-AUTH — Sign-Up & Sign-In web UI (MVP)

**Epic ID:** `EPIC-AUTH`
**Phase:** `PH-01` (mvp)
**Status:** open
**Source claims:** CLM-001 … CLM-007 (BRIEF-001, BRIEF-002)

| Feature ID | Feature | Status | Priority | depends_on | co_req | blocks |
|------------|---------|--------|----------|------------|--------|--------|
| AUTH-01 | Sign-Up page (EN + FA, field states) | partial | P0 | — | AUTH-02 | — |

> AUTH-01 partial: EN page done (TASK-AUTH-01-01, PASS 2026-09-07); FA (TASK-AUTH-01-02) + states (TASK-AUTH-01-03) open.
| AUTH-02 | Sign-In page (EN + FA, active/inactive states) | todo | P0 | — | AUTH-01 | — |

**Screen map (Observed, BRIEF-002):** Figma frames `Sign Up 1–4` (on pages `(Inactive)` and `(Active)`) = 1 EN Sign-Up, 2 FA Sign-Up, **3 EN Sign-In, 4 FA Sign-In**. `docs/figma/` now holds explicit Sign-In exports.

## AUTH-01 — Sign-Up page

**Status:** todo

### Acceptance
- EN Sign-Up renders per `docs/figma/Sign Up 1.png` (+ `Sign Up (EN).png` state gallery); FA per `docs/figma/Sign Up 2.png` (+ `Sign Up (FA).png`).
- Heading `Create Account`, SSO `Sign Up With Google/Facebook`, `- OR -`, fields `Full Name`/`Email Address`/`Password`, button `Create Account`, footer `Already have an account? Log in` (EN) and FA equivalents (R2 copy list).
- Field states Default/Hover/Active + password eye/eye-slash + active cursor (R4).
- Plain HTML/CSS/JS (R3).

### Links
- Design refs: `docs/figma/Sign Up 1.png`, `docs/figma/Sign Up 2.png`, `docs/figma/Sign Up (EN).png`, `docs/figma/Sign Up (FA).png`; Figma file URL in `docs/dev-pipeline/phases/PH-01-mvp/briefs/BRIEF-001.md`
- Rules: `docs/business-rules/RULES.md` R1–R4
- Claims: CLM-001, CLM-002, CLM-004, CLM-006, CLM-007
- User stories: `docs/user-stories/US-001.md` (flows: US-001-F01 EN, US-001-F02 FA, US-001-F03 states)

## AUTH-02 — Sign-In page

**Status:** todo

### Acceptance
- EN Sign-In renders per `docs/figma/Sign In (EN).png`; FA per `docs/figma/Sign In (FA).png`.
- Active-state variants per `docs/figma/Sign In (EN) Active.png` / `Sign In (FA) Active.png`.
- Heading `Sign In` / «ورود به اکانت», SSO `Sign In With Google/Facebook`, `- OR -`, fields `Email Address`/`Password` (no Full Name), button `Sign in`, footer `No Account? Create One!` / «حساب کاربری ندارید؟ بسازید».
- Plain HTML/CSS/JS (R3).

### Links
- Design refs: `docs/figma/Sign In (EN).png`, `docs/figma/Sign In (FA).png`, `docs/figma/Sign In (EN) Active.png`, `docs/figma/Sign In (FA) Active.png`; Figma file URL in `docs/dev-pipeline/phases/PH-01-mvp/briefs/BRIEF-001.md`
- Rules: `docs/business-rules/RULES.md` R1–R4
- Claims: CLM-001, CLM-002, CLM-004, CLM-006, CLM-007
- User stories: `docs/user-stories/US-002.md` (flows: US-002-F01 EN, US-002-F02 FA, US-002-F03 states)
