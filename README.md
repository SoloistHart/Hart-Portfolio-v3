# Hart-Portfolio-v3

An independent studio–style portfolio inspired by [trionn.com](https://trionn.com/): a
motion-first, dark, big-typography experience built with an interactive WebGL hero,
smooth scrolling, and scroll-triggered animations.

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + React 19 + TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first `@theme` config in `app/globals.css`) |
| Motion | [GSAP](https://gsap.com/) + `ScrollTrigger` (reveals, marquee, count-up) |
| Smooth scroll | [Lenis](https://github.com/darkroomengineering/lenis), driven by the GSAP ticker |
| WebGL / 3D | [Three.js](https://threejs.org/) via [@react-three/fiber](https://r3f.docs.pmnd.rs/) + drei (mouse-reactive particle field with a custom shader) |

These mirror trionn.com's stack (Next.js, GSAP, Three.js/WebGL, shader-based interactions).
`ScrollSmoother`/`SplitText` are paid GSAP plugins, so this project uses Lenis + a small
GSAP line-reveal in their place.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run lint     # ESLint (eslint-config-next)
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
app/
  layout.tsx        # fonts, metadata, grain, cursor, navbar, smooth-scroll provider
  page.tsx          # composes the page sections
  globals.css       # Tailwind v4 theme + cursor / marquee / reveal styles
components/
  SmoothScroll.tsx  # Lenis + GSAP ticker integration
  Cursor.tsx        # custom blend-mode cursor with hover state
  Navbar.tsx        # fixed nav
  HeroCanvas.tsx    # R3F + custom-shader interactive particle field
  Reveal.tsx        # reusable GSAP ScrollTrigger reveal wrapper
  sections/         # Hero, Marquee, About, Work, Stats, Contact
```
