# Shared Source of Truth

**Product:** [docs/PRODUCT.md](../PRODUCT.md)
**Last refreshed:** 2026-09-07 (init)

## Rule (non-negotiable)

All surfaces and phases consume the paths below as the product-wide contract spine.
Do **not** invent parallel API/DTO/entity/business-rule/**user-story** trees for a new service.
User stories under `docs/user-stories/` are product-wide — not owned by frontend, backend, or any single surface.
Extend additively; breaking changes need an explicit task + dual-surface note.

## Surfaces

| Surface ID | Slug | Kind | Status | Owning phases | Notes |
|------------|------|------|--------|---------------|-------|
| *—* | *—* | *—* | *—* | *—* | Register via `/dev-pipeline surface new <slug>` |

Kind values: `frontend` | `backend` | `worker` | `mobile` | `bff` | `shared-lib` | `other`
Status: `planned` | `active` | `parked` | `done`

## Authoritative shared paths

| Category | Path | Consumers (surfaces) | Evidence |
|----------|------|----------------------|----------|
| Architecture boundaries | `docs/ARCHITECTURE.md` | all | init scaffold |
| User stories / flows | `docs/user-stories/` | all | init — product-wide, not surface-owned |
| Business rules | `docs/business-rules/RULES.md` | all | BRIEF-001/002 (PH-01): CLM-001…CLM-007 |
| Design reference (UI fidelity) | `docs/figma/` | all | Observed — Figma exports (screen map BRIEF-002) |
| Entities | *TBD* | — | add on first contract evidence |
| API / DTO | *TBD* | — | add on first contract evidence |
| Decisions / ADR | *TBD* | — | add when ADRs exist |

## Inheritance log

| Event | What was inherited / added |
|-------|----------------------------|
| init (2026-09-07) | Scaffold: surfaces empty (TBD); user-stories + architecture indexed |
| phase new PH-01 (2026-09-07) | PH-01-mvp activated (--set-active); CONTEXT seeded from SHARED; no surfaces registered yet |
| brief BRIEF-001 (PH-01) | Business-rules path added (RULES.md); MVP scope recorded (Sign-Up/Sign-In UI, EN/FA, plain HTML/CSS/JS); no contract/entity paths yet |
| brief BRIEF-002 (PH-01) | Design reference path added (`docs/figma/`); Sign-In exports saved; screen map + field-state model recorded (CLM-006/007) |
| brief BRIEF-003 (PH-01) | Rules refined additively: exports = (Active) page (resolved); field-state specifics (R4, CLM-011); font identities (CLM-010); observed radii + pending cosmetic fixes (CLM-009); review docs `docs/figma/css-review.md` + `design-build-steps.md` referenced |
