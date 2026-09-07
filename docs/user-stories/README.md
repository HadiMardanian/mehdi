# User stories — project1

- User stories are **product-wide SHARED business-logic SoT** for user-facing flows (peer to business-rules) — indexed in `docs/dev-pipeline/SHARED.md`.
- They do **not** belong to a single frontend/backend/service — all surfaces consume the same `US-*` files.
- One file per `US-*`; never renumber; supersede instead of delete.
- Agents implementing tasks **must** open linked stories and honor flow steps/AC.
- A story is incomplete while any non-cancelled flow is not `done`.
- Dedup via `INDEX.md`; duplicates must not rewrite story bodies.
- Capture journeys with `/dev-pipeline story <prose>`; harvest from shipped work with `/dev-pipeline story extract`.

No stories yet — INDEX is empty. First story gets `US-001`.
