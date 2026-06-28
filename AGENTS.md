# AGENTS.md

Hart-Portfolio-v3 — Rhohart Martel's Next.js 16 portfolio (App Router, Turbopack)
with a WebGL holographic hero, Framer Motion reveals, project case studies, and an
optional AI chat guide. See `README.md` for the full stack table and project structure.

## Cursor Cloud specific instructions

- Single service: the Next.js dev server. Standard scripts live in `package.json`
  (`npm run dev` on http://localhost:3000, `npm run lint`, `npm run build`, `npm run start`).
  There is no database or test suite.
- `npm run dev` uses **Turbopack**. The WebGL hero (`components/hero-hologram.tsx`) is
  client-only — it only runs after hydration, so a raw `curl` of `/` returns SSR HTML
  but will not exercise the canvas. Verify motion/WebGL features in a real browser.
- Inside `useFrame`, do **not** mutate an object created with `useMemo` (e.g. shader
  `uniforms`). Read/mutate via material refs or `useRef` objects, as done in
  `hero-hologram.tsx`.
- Theme uses `localStorage` + `light`/`dark` classes on `<html>`. A blocking inline
  script in `app/layout.tsx` prevents flash of wrong theme.
- Three.js does not export `package.json`; `node -e "require('three/package.json')"` throws
  `ERR_PACKAGE_PATH_NOT_EXPORTED`. This is expected and not an install problem.
- Run `npm run lint` and `npx tsc --noEmit` before committing.
