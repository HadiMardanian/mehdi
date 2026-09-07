# PH-01 context

## Shared SoT
- Index: `docs/dev-pipeline/SHARED.md`
- Surfaces in this phase: none registered yet

## Entities ↔ modules
| Entity | Module / path | Notes |
|--------|---------------|-------|
| — | — | — |

## API / DTO contracts
| Contract | Path | Consumers |
|----------|------|-----------|
| — | — | — |

## Invariants (do not break across phases)
- UI must match the Figma design reference — `docs/figma/*.png` + linked Figma file (CLM-002; `docs/business-rules/RULES.md` R1)

## Changed by
| Task / event | Note |
|--------------|------|
| phase new (2026-09-07) | Created; seeded from SHARED.md (no contracts/surfaces yet) |
| brief BRIEF-001 | MVP = Sign-Up/Sign-In web UI (EN + FA, active/inactive states), plain HTML/CSS/JS; rules `docs/business-rules/RULES.md`; backlog EPIC-AUTH |
| backlog | AUTH-01/AUTH-02 split into 6 queue tasks (one per EN/FA/state flow); first ready: TASK-AUTH-01-01 |
| figma export (BRIEF-002) | Sign-In frames exported to `docs/figma/` (`Sign In (EN/FA).png` + Active); screen map corrected (Sign Up 3/4 = Sign-In); field states Default/Hover/Active (R4) |
