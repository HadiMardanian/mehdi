# EPIC-AUTH — Sign-Up & Sign-In web UI (MVP)

**Epic ID:** `EPIC-AUTH`
**Phase:** `PH-01` (mvp)
**Status:** open
**Source claims:** CLM-001 … CLM-007 (BRIEF-001, BRIEF-002)

| Feature ID | Feature | Status | Priority | depends_on | co_req | blocks |
|------------|---------|--------|----------|------------|--------|--------|
| AUTH-01 | Sign-Up page (EN + FA, field states) | partial | P0 | — | AUTH-02 | — |

> AUTH-01 partial: EN page done (TASK-AUTH-01-01, PASS 2026-09-07); FA (TASK-AUTH-01-02, PASS 2026-09-07) + states (TASK-AUTH-01-03) open.
| AUTH-02 | Sign-In page (EN + FA, active/inactive states) | partial | P0 | — | AUTH-01 | — |

> AUTH-02 partial: EN (TASK-AUTH-02-01, PASS 2026-09-08) done; FA (TASK-AUTH-02-02) **done 2026-09-08** (delivered via the AUTH-03-01 rework — `web/signin-fa.html` committed in 5d6cb97; 1.14% vs `active/Sign Up 4.svg`); states (TASK-AUTH-02-03) open.
| AUTH-03 | Active-look revision (2026-09-08 exports: underline fields, SSO 170/180, CTA 504/489) across all 4 pages | done | P0 | AUTH-01, AUTH-02 | — | — |

> AUTH-03 (BRIEF-005/CLM-013): new `docs/figma/active/` exports are a **revised active look** (single-underline fields — box chrome removed). Rework `TASK-AUTH-03-01` **PASS 2026-09-08** (committed 5d6cb97; diffs 1.41/1.13/1.16/1.14% vs the SVG exports). Sign-in/FA geometry **Observed** from `Sign Up 3/4.svg` (SSO 180, form 346, rows 346/421 75px, CTA 489, footer 564). Supersedes the shipped geometry of AUTH-01/AUTH-02 (incl. the FA sign-in).

### Accepted deliverables (done via TASK-AUTH-02-01 / TASK-AUTH-02-02)
- EN Sign-In page implemented + committed; headless diff vs `Sign In (EN) Active.png` = 2.90% / MAE 1.26.
- ~~FA Sign-In page implemented + committed; 1.42% / MAE 0.89~~ — **retracted (BRIEF-004): `web/signin-fa.html` never existed; TASK-AUTH-02-02 re-opened.**
- FA Sign-In page **delivered 2026-09-08 via TASK-AUTH-03-01**: `web/signin-fa.html` committed in 5d6cb97 at the revised active geometry; 1.14% vs `docs/figma/active/Sign Up 4.svg` (AUTH-02-02 closed).

### Acceptance (merge target for future **Done via TASK-AUTH-02-01** / **Done via TASK-AUTH-02-02** rows)
- EN + FA Sign-In pages done; states task `TASK-AUTH-02-03` open.


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

- **Done via TASK-AUTH-02-01:** EN Sign-In page implemented (Active look), committed in HEAD 264be25; headless diff vs `Sign In (EN) Active.png` = 2.90% / MAE 1.26 (below 3% bar).
- **TASK-AUTH-02-02 re-opened (BRIEF-004):** FA Sign-In page **missing** — `web/signin-fa.html` does not exist; earlier PASS record retracted. Geometry Observed from `docs/figma/active_dump.css`: SSO y174, OR y254, form y324, fields Email y324 / Password y412, CTA y500, footer y580, no Full Name.

### Links
- Design refs: `docs/figma/Sign In (EN).png`, `docs/figma/Sign In (FA).png`, `docs/figma/Sign In (EN) Active.png`, `docs/figma/Sign In (FA) Active.png`; Figma file URL in `docs/dev-pipeline/phases/PH-01-mvp/briefs/BRIEF-001.md`
- Rules: `docs/business-rules/RULES.md` R1–R4
- Claims: CLM-001, CLM-002, CLM-004, CLM-006, CLM-007
- User stories: `docs/user-stories/US-002.md` (flows: US-002-F01 EN, US-002-F02 FA, US-002-F03 states)
