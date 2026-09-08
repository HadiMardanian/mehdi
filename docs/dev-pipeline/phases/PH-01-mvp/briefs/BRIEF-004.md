# BRIEF-004 — Figma layer dump: geometry verification + FA Sign-In correction (PH-01)

**Date:** 2026-09-08
**Phase:** PH-01 (mvp)
**Source (Observed, user-supplied repo files):**
- `docs/figma/dump.html` (4 MB SVG, now also `inactive_dump.html`) — user-attached Figma layer export, **Inactive** variant, all 4 frames mirrored (EN/FA × Sign-Up/Sign-In).
- `docs/figma/active_dump.css` (136 KB) — **Active**-variant CSS dump, all 4 frames, named elements + px geometry.
- `docs/figma/active_dump.html` ≡ `docs/figma/inactive_dump.css` (73 KB) — Inactive-variant CSS dump.
- Exported PNGs measured as ground truth: `Sign Up 1.png`, `Sign In (EN) Active.png` (2×).

**Ledger before:** CLM-001…CLM-011.

## What the user asked
Verify the shipped code matches the Figma layer dump in dimensions/sizes/design.

## Classification

| # | Claim (paraphrased) | Source | Class | Disposition |
|---|---------------------|--------|-------|-------------|
| V-1 | **Active** dump geometry (Observed): EN sign-up — card x420 w785 r36; SSO row y164 (188×45, r8); OR y234; fields 427×53 @ y294/372/450 (78px rhythm, top+bottom lines L15 W403); CTA y528; footer y598; heading/lang/tagline @ y104/15/104 | active_dump.css | duplicate/refinement | Confirms shipped `styles.css` **exactly** (SSO 164, OR 234, form 294, fields 294/372/450, CTA 528, footer 598) and R1/R4. New: field internal structure (Top/Bottom Line L15 W403; Big/Small Label = Source Serif Pro 16px/12px) — refines R4. |
| V-2 | **Active** sign-in geometry: SSO y174; OR y254; Email y324; Password y412 (form top 324); CTA y500; footer y580; heading y104 | active_dump.css + `Sign In (EN) Active.png` (measured 2×→1×) | duplicate/refinement | Confirms shipped `.page-signin` overrides **exactly** (174/254/324/412/500/580). |
| V-3 | **Inactive** variant geometry: underline fields 427×35 @ y309/374/439; SSO y169.5; CTA y504.5 (mirrored SVG + CSS dump) | dump.html / inactive_dump.* | **clarification needed** | The attached `dump.html` is the **Inactive** variant. Shipped pages ship the **Active** look (BRIEF-003 decision, user exports = Active page). Code intentionally differs from the Inactive dump. **Not a defect.** If the user wants the Inactive look, that contradicts CLM-006/007 + R1 — needs explicit confirmation. |
| V-4 | FA Sign-In (Sign Up 4): SSO y174; OR y254; Email y324; Password y412; CTA y500; footer y580; **no Full Name field** | active_dump.css | **new** | Observed full FA Sign-In geometry → feeds re-opened TASK-AUTH-02-02. **Contradicts** the stale handoff note "FA sign-in has a Full Name field (y=294)" — that line is wrong and will be removed. |
| V-5 | Chevron: arrow_drop_down box 20×20 @ L87 T8 within lang 109×35 | active_dump.css | duplicate | Confirms CLM-009 6px drift (design ≈87 vs code 93). No new action. |
| V-6 | FA copy (Observed): tagline «اشیاء سه بعدی، مک کاپ و تصویر را در اینجا بی…»; «فارسی (FA)»; «ایجاد اکانت»; «ثبت نام با حساب گوگل/فیسبوک»; «- یا -»; «از قبل حساب کاربری دارید؟ وارد شوید»; sign-in «ورود به اکانت»; «ورود با حساب گوگل/فیسبوک»; «حساب کاربری ندارید؟ بسازید» | active_dump.css | duplicate | Matches R2 copy list. |
| V-7 | **Integrity break:** `TASK-AUTH-02-02` recorded `done` (PASS 1.42%/0.89) but `web/signin-fa.html` does not exist (working tree, git, reflog) and `fa.css` has no `.page-signin` block | git + fs | **new (correction)** | Review record is false. User chose **re-open TASK-AUTH-02-02** → queue row to `in_progress`, US-002-F02 back to `todo`, PASS note retracted. FA Sign-In must be built from the now-Observed geometry (V-4). |

**Contradictions:** V-3 (Inactive dump vs Active-look decision — clarification, not conflict) and V-4/V-7 (FA Sign-In "done" record vs missing page — resolved by re-open).

## Deltas applied
- `CLAIMS.md` — added **CLM-012** (layer-dump geometry verified vs shipped code; FA Sign-In geometry Observed, no Full Name; dump.html = Inactive variant).
- `docs/business-rules/RULES.md` — R1: added dump references + sign-in geometry (174/254/324/412/500/580); R4: field internal structure (Top/Bottom Line L15 W403; Big/Small Label 16/12 Source Serif Pro).
- `TASK-QUEUE.md` — row TASK-AUTH-02-02 → `in_progress` (re-opened; PASS record retracted with reason); stale "Full Name at y=294" handoff note removed; FA Sign-In now has exact geometry.
- `docs/user-stories/US-002.md` + `INDEX.md` — US-002-F02 → `todo` (was falsely done), flows 2/3 → 1/3.

## Not applied
- No code changes (brief is documentation-only; geometry fix belongs to TASK-AUTH-02-02 implementer).
- No ID renumbers, no `agent-prompts/` writes.
- Inactive-look switch: **not** applied — would contradict the Active-look decision; pending user confirmation if that is actually desired.