# BRIEF-001 — 2026-09-07

**Phase:** `PH-01` (mvp)
**Source:** user

## Raw input

> need to implement exactly this figma project: https://www.figma.com/design/LeCBagFlBAn9K56AfARuPj/Simple-Sign-Up-and-Sign-In-Web--Inactive-and-Active---%D8%B5%D9%81%D8%AD%D9%87-%D9%88%D8%B1%D9%88%D8%AF-%D9%88-%D8%AB%D8%A8%D8%AA-%D9%86%D8%A7%D9%85--%D9%81%D8%B9%D8%A7%D9%84-%D9%88-%D8%BA%DB%8C%D8%B1-%D9%81%D8%B9%D8%A7%D9%84---Community-?node-id=0-1&p=f&t=Ok45uP2RxYFEjfmq-0
>
> The export files are in this path: `/home/hadi/Documents/project1/docs/figma`
> Sign Up (EN).png, Sign Up (FA).png, Sign Up 1.png, Sign Up 2.png, Sign Up 3.png, Sign Up 4.png

## Clarifications (this session, user-confirmed)

- **Scope:** MVP covers Sign-Up **and** Sign-In pages (both per the Figma file).
- **Stack:** plain HTML/CSS/JS (no framework).
- Exported assets cover Sign-Up frames only; Sign-In visuals must be read from the Figma link.

## Extracted claims (this session)

| Local | Class | Summary | Matches | Action |
|-------|-------|---------|---------|--------|
| 1 | new | MVP delivers a web Sign-Up + Sign-In UI per the referenced Figma design | — | absorb → CLM-001 |
| 2 | new | Implement exactly per Figma — design (incl. active/inactive states) is the authoritative spec | — | absorb → CLM-002 |
| 3 | new | Sign-In page in scope; its design is only in the Figma link (no exported PNGs) | CLM-001 | absorb note → CLM-005 |
| 4 | new | Stack = plain HTML/CSS/JS | — | absorb → CLM-003 |
| 5 | new | English and Persian (FA) page variants | — | absorb → CLM-004 |
| 6 | new | Local design reference = 6 PNG exports in `docs/figma/`; internals of numbered 1–4 Unknown this session | — | absorb → CLM-005 |
| 7 | new | Active/inactive UI states are part of the design | CLM-002 | absorb note → CLM-002 |
