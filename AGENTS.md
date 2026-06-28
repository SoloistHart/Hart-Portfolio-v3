# AGENTS.md

Hart-Portfolio-v3 — a Next.js 16 (App Router, Turbopack) + React 19 + TypeScript portfolio
with GSAP/ScrollTrigger animations, Lenis smooth scroll, and a Three.js (react-three-fiber)
WebGL hero. See `README.md` for the full stack table and project structure.

## Cursor Cloud specific instructions

- Single service: the Next.js dev server. Standard scripts live in `package.json`
  (`npm run dev` on http://localhost:3000, `npm run lint`, `npm run build`, `npm run start`).
  There is no backend, database, or test suite.
- `npm run dev` uses **Turbopack**. The WebGL hero (`components/HeroCanvas.tsx`) and all
  GSAP/Lenis code are client-only — they only run after hydration, so a raw `curl` of `/`
  returns the SSR HTML but will not exercise the canvas/animations. Verify motion features
  in a real browser.
- ESLint uses the new React Compiler rules (`react-hooks/immutability`, `react-hooks/refs`).
  Two non-obvious gotchas these enforce:
  - Inside `useFrame`, do **not** mutate an object created with `useMemo` (e.g. shader
    `uniforms`). Read/mutate it via the material ref instead (`matRef.current.uniforms.*`),
    as done in `HeroCanvas.tsx`.
  - Don't pass a ref through `React.createElement(...)`; use JSX (`<Tag ref={ref}>`). The
    polymorphic `Reveal` component types its tag as `React.ComponentType<TagProps>` so the
    React 19 ref-as-prop typechecks. Run `npm run lint` and `npx tsc --noEmit` before committing.
- Three.js does not export `package.json`; `node -e "require('three/package.json')"` throws
  `ERR_PACKAGE_PATH_NOT_EXPORTED`. This is expected and not an install problem.
