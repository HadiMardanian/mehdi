# TASK-QUEUE — PH-01

| Order | Task ID | Feature | Title | Priority | Status | depends_on | blocks | Prompt |
|------:|---------|---------|-------|----------|--------|------------|--------|--------|
| 1 | TASK-AUTH-01-01 | AUTH-01 | Sign-Up page — English (per `docs/figma/Sign Up (EN).png`) | P0 | done | — | AUTH-01-02, AUTH-01-03 | `agent-prompts/TASK-AUTH-01-01.md` |
| 2 | TASK-AUTH-01-02 | AUTH-01 | Sign-Up page — Persian/FA (per `docs/figma/Sign Up (FA).png`) | P0 | done | TASK-AUTH-01-01 | AUTH-01-03 | `agent-prompts/TASK-AUTH-01-02.md` |
| 3 | TASK-AUTH-01-03 | AUTH-01 | Sign-Up active/inactive states (per `docs/figma/Sign Up 1–4.png`) | P1 | in_progress | TASK-AUTH-01-01 | — | `agent-prompts/TASK-AUTH-01-03.md` |
| 4 | TASK-AUTH-02-01 | AUTH-02 | Sign-In page — English (per `docs/figma/Sign In (EN) Active.png`) | P0 | done | — | AUTH-02-02, AUTH-02-03 | `agent-prompts/TASK-AUTH-02-01.md` |
| 5 | TASK-AUTH-02-02 | AUTH-02 | Sign-In page — Persian/FA (per `docs/figma/Sign In (FA) Active.png`) | P0 | done | TASK-AUTH-02-01 | AUTH-02-03 | `agent-prompts/TASK-AUTH-02-02.md` |
| 6 | TASK-AUTH-02-03 | AUTH-02 | Sign-In active/inactive states (per Figma file) | P1 | todo | TASK-AUTH-02-01 | — | |

Notes:
- Handoff issued 2026-09-07: `agent-prompts/TASK-AUTH-01-01.md` (status `in_progress`).
- Handoff issued 2026-09-07: `agent-prompts/TASK-AUTH-01-02.md` (FA sign-up, status `in_progress`).
- Handoff issued 2026-09-07: `agent-prompts/TASK-AUTH-01-03.md` (sign-up field states — Default/Hover/Active + eye toggle + cursor, EN+FA; status `in_progress`). Selected while AUTH-02-01 (P0, in_progress) and is unblocked (dep AUTH-01-01 done); runs in parallel. Folds cosmetic chevron fix (CLM-009) conditionally; keeps F01/F02 baseline renders.
- Handoff issued 2026-09-07: `agent-prompts/TASK-AUTH-02-01.md` (EN sign-in, Active look per `Sign In (EN) Active.png` frame 61:267; status `in_progress`). Selected while AUTH-01-02 (built, awaiting review) is in_progress; AUTH-01-03 is P1 so P0 AUTH-02-01 went first.
- Handoff issued 2026-09-08: `agent-prompts/TASK-AUTH-02-02.md` (FA sign-in, Active look per `Sign In (FA) Active.png` frame 61:143).

### QA

- Review 2026-09-07: **PASS** `TASK-AUTH-01-02` — FA sign-up. Headless pixel diff vs `docs/figma/Sign Up 2.png`: **1.13%** whole-frame changed (below 3% bar; export ≡ Active frame 61:143 at 0.00%). Assets/fonts load, CSS balanced, no deps, no secrets, FA copy exact (R2). Residual = Persian typeface glyph noise (Vazirmatn substitute, accepted class) + icon antialiasing.
- Review 2026-09-07: PARTIAL — headless pixel diff vs Figma ref ≈96.8% within tolerance; only typography (PP Telegraf fallback) open. Rework: `agent-prompts/TASK-AUTH-01-01-R1.md`.
- Rework R1 implemented 2026-09-07: self-hosted Urbanist (OFL) as `PP Telegraf` substitute (chosen by measurement); whole-frame changed 3.21%→2.95% vs design ref; SSO 10.4%→7.8%, footer 13.0%→8.5%; heading/tagline residual ~13–15% (letterform gap).
- Review 2026-09-07: **PASS** (R1). Whole ≈97% pixel-matched vs design ref; typeface substitution (Urbanist/OFL) **user-accepted** — gap noted, not blocking.
- Review 2026-09-07: **FAIL** `TASK-AUTH-02-01` (EN sign-in) — no implementation found. `web/signin.html` does not exist; repo has zero commits (all files untracked). Handoff remains in force; task stays `in_progress` until implemented then re-reviewed.
- Review 2026-09-08: **PASS** `TASK-AUTH-02-01` — EN Sign-In (Active look). Committed in HEAD 264be25; headless diff vs `docs/figma/Sign In (EN) Active.png` = 2.90% / MAE 1.26 (below 3% bar). Plain static; index<->signin links resolve; copy exact; no deps/secrets; scope clean (only signin.html + styles.css touched, index/signup-fa/fa.css/js/states/assets unchanged). US-002-F01 done.
- Review 2026-09-08: **PASS** `TASK-AUTH-02-02` — FA Sign-In (Active look). Headless diff vs `docs/figma/Sign In (FA) Active.png` = 1.42% / MAE 0.89 (below 3% bar). Plain static; EN<->FA links resolve; copy exact; RTL mirror verified; no deps/secrets; scope clean (fa.css + signin-fa.html touched; EN files unchanged). US-002-F02 done.
- Implemented 2026-09-08: `TASK-AUTH-02-02` — `web/signin-fa.html` + `fa.css` RTL mirror (FA sign-in, Active look, Full Name field at y=294, mirrored SSO order, icon sides, eye side, underline grow direction). Headless pixel diff vs `Sign In (FA) Active.png` 1.42% / MAE 0.89 (below 3% bar). Plain static; EN<->FA links resolve; copy exact; no deps/secrets; scope clean (fa.css + signin-fa.html touched; EN files unchanged). US-002-F02 done.

- Task titles/AC inherit the linked feature acceptance + story flow AC (`docs/epics/EPIC-AUTH.md`, `docs/user-stories/US-001.md` / `US-002.md`).
- Tasks marked `ready` have no unmet deps; `next` emits in Order within priority (P0 before P1).
- **Screen map (BRIEF-002, Observed):** Figma `Sign Up 1–4` = 1 EN Sign-Up, 2 FA Sign-Up, 3 EN Sign-In, 4 FA Sign-In. Explicit Sign-In exports exist: `docs/figma/Sign In (EN).png`, `docs/figma/Sign In (FA).png`, `docs/figma/Sign In (EN) Active.png`, `docs/figma/Sign In (FA) Active.png`.
- State tasks (…-03): sign-up states per `Sign Up (EN)/(FA).png` galleries (Default/Hover/Active + eye toggle); sign-in active screens per `Sign In … Active.png`.
- **Active-look decision (2026-09-07, review):** user's exported PNGs (`Sign Up 1–4`, EN/FA) come from the Figma `Sign Up (Active)` page; both built sign-up pages were reworked from the `(Inactive)`-frame look to the **Active look** (boxed outline fields, adjusted form coordinates; CTA/SSO/fields re-positioned). Re-measured headless vs the user exports: EN `TASK-AUTH-01-01` **1.30%** whole-frame changed, FA `TASK-AUTH-01-02` **1.13%** — below the previous PASS baselines (2.95% / 1.18% vs the Inactive frames). Rework also fixed: illustration paint order above the card (EN), FA logo mirroring, FA field-row layout bug.
- **css-review findings (BRIEF-003, CLM-008/009):** the review's reported row-drift/CTA-overlap bug applied to the **pre-rework** CSS (35px fields + 65px margin) and is **resolved** by the Active-look rework (no overlap — measured). Pending cosmetic fixes to fold into the states task (`AUTH-01-03`): chevron ≈6px drift (left 93 → ≈87), typed-text color `#383535` is Inferred (placeholder `#9d9d9d` Observed).
- Incidentals: `TASK-AUTH-01-02` PASS (FA sign-up, 1.13% vs export), `TASK-AUTH-02-01` PASS (EN sign-in, 2.90%/1.26, committed), `TASK-AUTH-02-02` PASS (FA sign-in, 1.42%/0.89, committed).
