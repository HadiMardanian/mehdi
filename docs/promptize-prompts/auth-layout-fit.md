---
schema_version: 3
skill_version: 2.1.0
generated_at: '2026-09-08T00:42:00+00:00'
tier: compact
mode: prompt-only
---

# Promptize output — responsible for the layout sizing audit you pasted

`Cache: FAST` (repo already inspected from the prior handoff/review path; no new delta needed for this scope)

**Objective:** 가 page layout centered + fit-to-window instead of pinned 1152×700 so it isn’t stuck top-aligned / right-clipped below that width — for all `web/` auth pages, using the smallest change set possible.

**Engineering decision (one line):** 
가장 작은 안전한 옵션 = **Option B (fit-to-window scale ≤1 + flex centering)** on `body`/`.stage` + one tiny `web/js/fit.js` without rewriting the absolute choreography. Preserve exact 1:1 at ≥1152×700 so the existing pixel diffs keep meaning.

**Repository context**
- Affected: `web/css/styles.css:32-53` (`body`/`.stage`) and the same `body` rule in `web/css/fa.css` (FA uses the same layout root). Sign-in overrides: `styles.css:263-275`.
- Not touched: `web/index.html`, `web/signin.html`, `web/signup-fa.html`, `web/css/fa.css` overrides logic, `web/js/states.js`.
- Existing pattern: pure absolute coordinates today; no `fit`/`100vh`/scaling anywhere.

**Current → desired**
- 현재: `body{min-width:1152px}`, `.stage{width:1152px;height:700px;margin:0 auto}` ⇒ viewport ≥1152px에서만 horizontal center, 그 외엔 left-clamped + right clipping; vertical은 붙박 top.
- 원하는 것: viewport ≥1152×700이면 1:1 + 가운데; 작으면 균일하게 축소되어 가운데; 오른쪽 잘림/수평 스크롤 제거.

**Requirements (MUST)**
1. `body`에 `min-height:100vh; display:flex; align-items:center; justify-content:center;` 부여 (`min-width:1152px`는 유지하거나, B 방식이면 제거해서 clipping 해소).
2. `.stage`에 `transform: scale(var(--fit,1)); transform-origin:center;` 추가.
3. 새 파일 `web/js/fit.js` 생성: `fitArtboard()`에서 `s=Math.min(1, innerWidth/1152, innerHeight/700)` → `--fit` 설정, `resize` 리스너, 로드 시 실행. 의존성 없음.
4. 4개 HTML에 `<script src="js/fit.js"></script>` 추가 (head 또는 body 끝, 일관된 위치).
5. FA도 같은 layout root를 쓰므로 동일 `fit.js`가 RTL 페이지에도 적용되게 할 것.

**Constraints/OoS (하드 제외 3–4)**
- ❌ 절대 좌표 choreography를 그리드와 상대 배치로 리팩터링하지 말 것 (별도 작업으로 분리).
- ❌ `scale`의 upper cap 제거(fill) 같은 1:1 파괴 옵션은 MVP에서 금지.
- ❌ PNG 비교 방법들을 새 파일로 만들지 말 것 (이미 docs/figma/에 있음).
- ❌ 큰 폰트/자간/간격 조정 없음 — 이건 layout fit가 아니라 타입 세팅임.

**Acceptance (최소)**
- 1920×1080 / 1366×768 / 1024×768에서 페이지 content bbox가 viewport 중앙에 있음 (수계산 혹은 screenshot bbox center 검증).
- <1152px 뷰포트에서 오른쪽 clipping/강제 수평스크롤 없음.
- ≥1152×700일 때 기존 EN sign-in 픽셀 비교(2.90% / MAE 1.26) 의미가 깨지지 않음(동일 픽셀 1:1).
- `web/js/fit.js`는 외부 요청 없이 file://에서 동작.

**Validation commands (repo에 있는 것만)**
- `python3 -c "..."`로 screenshot의 content bbox 중심 vs viewport 중심 계산 (이미 audit에서 쓴 방식과 동일선).
- `firefox --headless --screenshot=... --window-size=W,H`로 3개 viewport 캡처 → bbox 중심 비교.

**Touch Set (≤3 lines)**
- `web/css/styles.css`
- `web/css/fa.css`
- `web/js/fit.js` (new) + 4개 HTML의 `<script>` 태그

Optional note: if you later want truly responsive redesign, separate task; today keep diffability.

**실행하려면:** `/promptize --execute ...` (지금은 prompt-only로 stop).
