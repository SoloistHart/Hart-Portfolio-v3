# Hart-Portfolio-v3

Rhohart Martel's portfolio — an AI engineer & automation specialist site with a
WebGL holographic hero, project case studies, GitHub activity, contact form, and
portfolio AI guide. Live reference: [portfolio-hart.vercel.app](https://portfolio-hart.vercel.app/).

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + React 19 + TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first `@theme` in `app/globals.css`) |
| Motion | [Framer Motion](https://www.framer.com/motion/) (reveals, page transitions, chat UI) |
| WebGL / 3D | [Three.js](https://threejs.org/) via [@react-three/fiber](https://r3f.docs.pmnd.rs/) + drei (wireframe head from GLB + custom shaders) |
| Icons | [Lucide React](https://lucide.dev/) |

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
  layout.tsx           # fonts, theme script, scroll progress, cursor trail, chat
  page.tsx             # homepage sections
  about/page.tsx       # about & experience
  projects/            # archive + case study pages
  api/chat/route.ts    # portfolio AI guide (Gemini or local fallback)
  globals.css          # theme tokens, panels, buttons, chips
components/
  hero-hologram.tsx    # R3F wireframe head
  project-card.tsx     # featured project cards
  site-header.tsx      # nav + theme toggle
  portfolio-chat.tsx   # floating AI guide
lib/
  portfolio-data.ts    # site copy, projects, about content
  portfolio-chat.ts    # chat context + local reply fallback
public/
  low_poly_head.glb    # WebGL head model
  grad-pic.jpg         # profile photo
```

## Optional env vars

- `GOOGLE_API_KEY` — enables Gemini-powered portfolio chat replies
- `GEMINI_MODEL` — override model (default `gemini-2.5-flash`)
- `GITHUB_TOKEN` — includes private repo counts in GitHub activity section
