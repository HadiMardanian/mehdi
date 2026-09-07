# Briefs — PH-01

User capability descriptions are documentation inputs, ingested by `/dev-pipeline brief`:

- `CLAIMS.md` — dedup ledger (`CLM-*`); source of truth for “already said”
- `BRIEF-{NNN}.md` — verbatim user input + per-session classification

Never renumber claim IDs; repeats must not rewrite docs. See `.agents/skills/dev-pipeline/briefing.md`.
