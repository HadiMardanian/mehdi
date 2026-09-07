# BRIEF-003 — CSS review + design build steps (PH-01)

**Date:** 2026-09-07
**Phase:** PH-01 (mvp)
**Source (Observed, user-supplied repo files):**
- `docs/figma/css-review.md` — review of the pre-rework EN/FA Sign-Up pages (localhost:3000), assets/colors/radii verified, one layout bug reported.
- `docs/figma/design-build-steps.md` — design→HTML/CSS/JS build steps + state matrix (Figma API evidence).

**Ledger before:** CLM-001…CLM-007. All 8 new claims classified below.

## Classification

| # | Claim (paraphrased) | Source | Class | Disposition |
|---|---------------------|--------|-------|-------------|
| CR-1 | Pre-rework CSS: `.field` 35px tall + `margin-top:65px` → rows 100px apart (Email +35px, Password +70px); password 509–544 overlaps CTA 504–549; FA mirrored | css-review | Observed — **resolved/superseded** | Reworked same day to Active look (fields 53px boxes, margin 25px → rows 294/372/450; CTA 528, footer 598). Measured EN 1.30% / FA 1.13% vs exports; no overlap (CTA zone clean). Ledger note only — no doc rewrite. |
| CR-2 | Fix = change both margins to 30px | css-review | superseded | Applies to old 35px geometry only; current 25px margin + 53px boxes is correct for Active frames. Not applied. |
| CR-3 | Verified correct: assets all HTTP 200, CSS parses, colors/radii (card 36px, buttons 8px), fonts (OFL substitutes), form column x/width, heading/lang/SSO/OR/CTA/footer positions, field icons, RTL mirror, 1152×700 canvas | css-review | duplicate/refinement | Duplicates CLM-002/003, R1/R3. New detail: corner radii Observed (card 36 / SSO+CTA 8) — added to R1. |
| CR-4 | `.lang-chevron { left:93px }` vs design ≈87px → 6px cosmetic drift | css-review | **new** | CLM-009. Code fix **pending** (review: user forbade code changes; brief is docs-only). |
| CR-5 | Typed-text color `#383535` = Inferred (Figma shows empty fields); placeholder `#9d9d9d` Observed | css-review | new (Inferred tag) | CLM-009. Current code uses `#383535` — consistent with Inferred value. |
| CR-6 | `body { min-width:1152px }` → no responsive behavior; matches fixed artboard | css-review | note | Constraint, not defect. Records fixed-viewport scope. |
| DB-1 | Design tokens + type scale (colors above; PP Telegraf 400/800; Source Serif Pro 600/700; FA Noto Naskh Arabic 400) | build-steps | duplicate + **new** | Colors/type duplicates CLM-002/R1. **New:** FA text font Observed = Noto Naskh Arabic 400; EN floating labels = Source Serif Pro — CLM-010. |
| DB-2 | Screen map + vertical rhythm (rows 309/374/439 Inactive) | build-steps | duplicate/refinement | Duplicates CLM-006/007. Active frames measured at 294/372/450 (this session) — refinement in R1/R4. |
| DB-3 | Field structure (underline input, label NOT placeholder) + state matrix: Default `#9d9d9d` 16px inline + 1px `#e5e5e5` underline; Hover `#515151`; Active floats 12px/700 `#426bff`, partial underline stretch, blinking cursor; password eye↔eye-slash `#c5c5c5` 22×18 | build-steps | refinement of CLM-007 | Extends R4 with Observed colors/behavior (feeds AUTH-01-03 / AUTH-02-03). CLM-011. |
| DB-4 | File plan (plain HTML/CSS/JS, per-language files, logical properties) | build-steps | duplicate | Matches CLM-003/R3 + implemented layout. |
| DB-5 | Open questions: font substitute, Inactive-vs-Active export origin, illustration vector | build-steps | duplicate/resolved | Exports origin **resolved** 2026-09-07 (user exports = (Active) page, pixel-verified; pages ship Active look). Font substitute = accepted OFL path (Urbanist/Vazirmatn). |

**Contradictions:** none.
**Scope note (not a contradiction):** build-steps Step 4 describes the interactive **underline field component** (state gallery); the shipped pages render the **(Active) page look = boxed outline fields** (measured pixels: top+bottom border + rounded caps). Both are Observed at different scopes — the box is the field chrome; Default/Hover/Active (underline stretch, floating label, cursor) is the interactive layer for the state tasks.

## Deltas applied
- `CLAIMS.md` — added CLM-008…CLM-011.
- `docs/business-rules/RULES.md` — R1: exports = (Active) page (resolved); radii + css-review refs. R4: state specifics (Observed). Unknowns: FA font identity + substitutes.
- `TASK-QUEUE.md` — note: cosmetic fixes from css-review (chevron 6px; typed color Inferred) fold into the states task (AUTH-01-03).

## Not applied
- No code changes (review explicitly documents user forbade code changes; brief is documentation-only).
- No ID renumbers, no queue status mutations, no `agent-prompts/`.