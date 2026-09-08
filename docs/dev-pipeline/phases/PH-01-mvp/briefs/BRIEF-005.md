# BRIEF-005 — New Figma export set: `active/` vs `inactive/` geometry (PH-01)

**Date:** 2026-09-08
**Phase:** PH-01 (mvp)
**Source (Observed, user-supplied repo files):**
- `docs/figma/active/` — fresh Figma SVG exports, one per frame: `Sign Up 1.svg` … `Sign Up 4.svg` (1152×700, flattened paths; EN sign-up state frames).
- `docs/figma/inactive/` — same `Sign Up 1–4.svg` set, plus state galleries `Sign Up (EN).svg` / `Sign Up (FA).svg` (528×990 zoomed).
- Ground-truth cross-checks: shipped `web/css/styles.css` + `web/css/fa.css`; old PASS references `docs/figma/Sign Up 1.png` (measured CTA band 529–571) and earlier `active_dump.css`/`inactive_dump.*` (CLM-012).

**Ledger before:** CLM-001…CLM-012.

## What the user asked
«بر اساس خروجی جدیدی که از فیگما گرفتم باید تمام صفحات مطابق با این دیزاین‌ها طراحی بشن.» — Based on the new Figma output I got, all pages must be designed to match these designs. References both `docs/figma/active` and `docs/figma/inactive`.

## Method
The full-page exports are flattened (text → paths) and the state-gallery frames (3, 4) are zoomed/annotated (red `#FF3D00` marks, grey measurement bands), so only **Sign Up 1** (EN sign-up, Default state) yields clean absolute geometry. Field tops are derived as icon_top − 15 (icons sit 15px below the field top, verified against shipped code where icons @ x605 match `form 294 + 15`). Measured via SVG rect/path bbox extraction + pixel-band scan of the old reference PNG.

## Observed geometry — EN sign-up, 1× (1152×700)

| Element | Shipped code (styles.css) | Old ref `Sign Up 1.png` | New `inactive/Sign Up 1` | New `active/Sign Up 1` |
|---|---|---|---|---|
| SSO row top | 164 | ✓ | 164 | **170** |
| Field 1/2/3 tops (derived) | 294 / 372 / 450 | ✓ | ~293 / 372 / 450 | **~301 / 366 / 431** |
| Field pitch | 78 | ✓ | 79 | **65** |
| CTA top | 528 | 529 | 528 | **504** |
| OR | 234 | — | — | (between SSO 214 and field-1 ~301) |
| Footer | 598 | — | — | (below CTA, ~574) |

FA sign-up (`fa.css`) mirrors the EN rhythm exactly (form x135, SSO y164, OR 234, form 294, CTA 528, footer 598).

## Classification

| # | Claim (paraphrased) | Source | Class | Disposition |
|---|---------------------|--------|-------|-------------|
| A-1 | New `inactive/` set geometry = SSO 164, fields ~294/372/450, CTA 528 | inactive/Sign Up 1.svg | **duplicate** | Matches shipped pages and old PASS references exactly → **no rework** for the inactive variant. Confirms current look. The `Sign Up (EN/FA).svg` galleries match the field-state gallery (CLM-007/011). |
| A-2 | New `active/` set geometry = SSO **170**, fields ~**301/366/431** (65px pitch), CTA **504** | active/Sign Up 1.svg | **refinement / contradiction** | The user's current Figma **active**-look has been **revised** vs the shipped Active look (SSO +6, field pitch −13, CTA −24). Shipped pages match the OLD active spec (CLM-012), NOT this new `active/` export. **Needs user decision** — see contradiction below. |
| A-3 | Exports cover **EN sign-up only** at full page; no FA or sign-in full-page frames in either folder | active/ + inactive/ file list | other | If the revised active look applies product-wide, FA/sign-in geometry must be derived by the same delta or exported by the user. |
| A-4 | `active/` state frames 3–4 are zoomed/annotated (red marks @ y181–213, grey band ~y448) — not clean full-page refs | active/Sign Up 2–4.svg | other | Not used for geometry; only Sign Up 1 is authoritative for absolute layout. |

## Contradiction needing user input
The folder named **`active/`** holds a **different layout** from what the pages currently ship (which were PASSed as the "Active look" against `active_dump.css`). Today's new `active/` export shows SSO y170, a tighter 65px field rhythm, and CTA y504 — none of which the shipped CSS produces. The `inactive/` folder, by contrast, matches the shipped look exactly.

So "match all pages to these designs" is **ambiguous on intent**:
- If the new `active/` set is the new target → all 4 pages (EN/FA sign-up + EN/FA sign-in) need a **layout rework** to the revised active geometry (and sign-in/FA geometry must be derived or exported).
- If the `inactive/` set is the authoritative reference → **no change**; shipped already conforms.

## Deltas applied
- `CLAIMS.md` — added **CLM-013** (new export set: inactive = shipped; active = revised geometry SSO 170 / fields 65px / CTA 504; EN sign-up only at full page).
- `docs/business-rules/RULES.md` — R1: added the confirmed revised active-look geometry (SSO 170, fields ~301/366/431 65px pitch, CTA 504) + Inferred sign-in/FA delta (2026-09-08 rework target).
- `TASK-QUEUE.md` — added **TASK-AUTH-03-01** (P0, active-look revision across all 4 pages) + note; `docs/epics/EPIC-AUTH.md` — added AUTH-03 feature row.

## Decision (user-confirmed 2026-09-08)
**Rework all pages to the new `active/` layout.** The `active/` folder is the new target; the shipped look (= new `inactive/` folder) is superseded for the rework. Scope: all 4 pages (EN/FA sign-up + EN/FA sign-in) → `TASK-AUTH-03-01`. Sign-in/FA geometry is not in the new exports — derived by the same delta and tagged **Inferred** in R1 (exact export recommended).

## Not applied
- **No `agent-prompts/` writes** — this is a brief, not a handoff (rework task scheduled as TASK-AUTH-03-01; `/dev-pipeline next` will emit it).
- In-flight rows (`TASK-AUTH-02-02` in_progress, `TASK-AUTH-01-03` in_progress) not deleted/re-numbered; the rework supersedes their geometry additively.