# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Core Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`
- Build for production: `npm run build`
- Start production server (after build): `npm run start`

### Running a single test

There is currently no test runner or test script configured in `package.json`. If you add a test framework (e.g. Jest, Vitest, Playwright), also add a corresponding `npm run test` (and, ideally, a way to run a single test) so future agents can use it.

## High-Level Architecture

### Framework & Tooling

- Next.js App Router app located under `app/`.
- TypeScript-enabled React project with strict type checking (`tsconfig.json`).
- Tailwind CSS configured via `tailwind.config.ts` and `app/globals.css`.
- ESLint extends `next/core-web-vitals` via `.eslintrc.json`.
- Three.js / react-three-fiber stack is installed and enabled via `next.config.mjs` `transpilePackages`, but not all pages use it.

### Routing & Layouts

The app uses the App Router with route-scoped layouts and some parallel routes:

- Main language entrypoints:
  - `/en` → `app/en/layout.tsx` + `app/en/page.tsx` (English top page).
  - `/jp` → `app/jp/layout.tsx` + `app/jp/page.tsx` (Japanese top page).
- About pages:
  - `/aboutme` → `app/aboutme/layout.tsx` & `app/aboutme/page.tsx` (EN content, layout similar to `/en`).
  - `/about-me_jp` → Japanese variant under `app/about-me_jp/`.
- Guardians project detail pages:
  - `/guardians_en`, `/guardians_jp` with their own layouts and content under `app/guardians_en/` and `app/guardians_jp/`.
- Client work case studies:
  - `/clientworks` and `/clientworks_jp` index pages under `app/clientworks/` and `app/clientworks_jp/`.
  - Dynamic detail pages:
    - `/clientworks/[slug]` → high-level overview per client (`app/clientworks/[slug]/page.tsx`).
    - `/clientworks/[slug]/description` → in-depth case study page (`app/clientworks/[slug]/description/page.tsx`).

Each major section has its own `layout.tsx` that:

- Imports `app/globals.css`.
- Renders a full-screen starfield background (`StarsCanvasWrapper`).
- Adds a section-specific `Navbar` component (e.g. EN vs JP, about vs clientworks).
- Sets `metadata` including `metadataBase` derived from `NEXT_PUBLIC_SITE_URL`.

Parallel routes (`@modal`) are used for in-page modals:

- `app/en/@modal/(.)project/[slug]/page.tsx` and `app/jp/@modal/(.)project/[slug]/page.tsx` render project details inside a modal overlay while the main list page stays mounted.
- `app/clientworks/@modal/(.)[slug]/page.tsx` provides modal overlays for client work details.

### Data Layer: Project & Skill Definitions

Static project and skill data is centralized under `app/lib` and `app/constants`:

- `app/lib/siteProjectsEn.ts` / `app/lib/siteProjectsJp.ts`
  - Typed `SiteProject` objects keyed by `slug`.
  - Provide per-language data (`title`, `description`, `src`, `url`).
  - Expose helper functions `getEnProject` / `getJpProject` and `listEnProjects` / `listJpProjects`.
  - Used on:
    - `/en` & `/jp` home project listings.
    - SEO metadata and routing for `/en/project/[slug]` and `/jp/project/[slug]` detail pages.

- `app/lib/projects.ts` / `app/lib/projects_jp.ts`
  - Define client work case studies (`Project` type) for `/clientworks` & `/clientworks_jp`.
  - Contain `slug`, `title`, rich multiline `description`, and `src`/`url`.
  - Expose `getProject(slug)` (throws if not found) and `getAllProjects()`.

- `app/lib/projectDetails.ts` / `app/lib/projectDetails_jp.ts`
  - Enrich a subset of client projects with deeper structured data:
    - `title`, `intro`, `role`, `responsibilities`, `outcomes`, `techStack`.
  - Accessed by `/clientworks/[slug]/description` and its JP counterpart to render sections like Responsibilities, Achievements, and Technologies.

- `app/constants/index.ts`
  - Defines `Socials` and `Coding_skill` arrays driving the skills grid and social links components (icons in `public/img`).

When adding new projects or client work:

- Pick a `slug` and ensure it is consistent across:
  - The list source (`siteProjectsEn/Jp` or `projects/projects_jp`).
  - Any SEO metadata generators (`app/en/project/[slug]/page.tsx`, etc.).
  - Optional deep details in `projectDetails.ts` / `_jp.ts`.
- For EN/JP site projects, keep `slug` shared so the sitemap and language-switching alternates stay in sync.

### Presentation Components

All React components live under `app/components/**` and are grouped by section and language:

- `app/components/en/*` and `app/components/jp/*`:
  - `main/` folder: `Hero`, `Skills`, `Projects`, `Navbar`, `Footer`, `StarBackground` for each language.
  - `sub/` folder: smaller building blocks such as `HeroContent`, `ProjectCard`, `SkillDataProvider`, `SkillsText`.
- `app/components/aboutme/**`, `app/components/about-me_jp/**`, `app/components/guardians_en/**`, `app/components/guardians_jp/**`:
  - Similar split into `main/` (page sections) and `sub/` content components.
- `app/components/clientworks/**`:
  - `main/` components handle the overall client works landing pages, list, and skills section.
  - `sub/ClientProjects.tsx` renders lists of client projects driven by `app/lib/projects*`.
  - `DescriptionActions.tsx` & `DescriptionActionsJp.tsx` encapsulate CTA buttons (visit site, back to list, etc.) for the deep description pages.
- `app/components/common/**`:
  - `StarsCanvasWrapper.tsx` renders the 3D starfield background (using Three.js / @react-three/fiber/@react-three/drei).
  - `PageTransition.tsx` provides animated page transitions and a `TransitionLink` helper to coordinate exit animations with route changes.
  - `Modal.tsx` and `ProjectModalContent.tsx` implement the accessible modal overlay system (see below).

### Modal & Page Transition System

Two key cross-cutting UX systems are implemented under `app/components/common`:

- `PageTransition.tsx`:
  - Wraps page content in a `motion.div` (Framer Motion) with a short fade/translate/blur animation.
  - Exposes a React context with `leaveWith(fn)` to let links trigger an exit animation before route navigation.
  - `TransitionLink` uses this context and `next/navigation` to delay `router.push(href)` until the transition completes.

- `Modal.tsx`:
  - Client component responsible for rendering modal overlays for project details when using App Router parallel routes (`@modal`).
  - Handles:
    - Focus management and trapping within the modal.
    - Restoring focus to the previously focused element on close.
    - Scroll locking (`document.body.style.overflow`).
    - Marking background siblings `inert` / `aria-hidden` while the modal is open, except any elements with `data-modal-exclude` (e.g. navbars).
    - ESC key to close.
    - Coordinated close animations and `window.history.replaceState` to reset the URL to the base path without breaking Next router state.
  - Exposes `useModalControl().closeWith(fn)` so callers can perform follow-up actions after the close animation.

If you add new modal experiences, prefer using the existing parallel-route + `Modal` pattern instead of implementing new overlay logic from scratch.

### Animation Utilities

- `app/utils/motion.tsx` centralizes common Framer Motion variants:
  - `slideInFromLeft(delay)`, `slideInFromRight(delay)` and `slideInFromTop` configs.
  - Used by various hero/section components to maintain consistent animation timing.

### SEO, Sitemap, and Robots

- Route-level metadata is set in each `layout.tsx` and some dynamic `page.tsx` files:
  - `app/en/layout.tsx` and `app/jp/layout.tsx` set global title/description/keywords (in EN/JP).
  - Dynamic project pages (`/en/project/[slug]`, `/jp/project/[slug]`, `/clientworks/[slug]`, `/clientworks/[slug]/description`) define `generateMetadata` functions that:
    - Resolve project data from the appropriate lib modules.
    - Configure `openGraph` and `twitter` metadata with localized titles, descriptions, and images.
    - Add language alternates for EN/JP where applicable.

- `app/sitemap.ts`:
  - Computes the canonical site URL using `NEXT_PUBLIC_SITE_URL` or `VERCEL_URL`, trimming trailing slashes.
  - Generates entries for:
    - Static top-level pages (`/en`, `/jp`, `/aboutme`, `/about-me_jp`, `/clientworks`, `/guardians_en`, `/guardians_jp`).
    - EN/JP site projects from `siteProjectsEn`/`siteProjectsJp` (with EN/JP-only handling).
    - Client works and their `/description` detail pages from `app/lib/projects`.

- `app/robots.ts`:
  - Computes the same base URL and exposes a simple robots policy allowing all routes.
  - Provides a `sitemap` URL at `${base}/sitemap.xml` and sets `host` to the base URL.

### Middleware: Basic Auth Protection

- `middleware.ts` enables HTTP Basic Auth for sensitive client work pages:
  - `config.matcher` applies to `/clientworks/:path*` and `/clientworks_jp/:path*`.
  - Reads `BASIC_AUTH_USER` and `BASIC_AUTH_PASSWORD` from the environment.
  - If credentials are missing, responds with `500 Basic auth is not configured`.
  - For protected routes, checks the `Authorization: Basic ...` header, decodes the credentials, and compares them.
  - On failure, responds with `401 Authentication required` and a `WWW-Authenticate` header so browsers show an auth prompt.

To disable Basic Auth in development, you can leave these env vars unset and avoid visiting `/clientworks*` routes, or temporarily relax `matcher` while working on those pages.

### Environment & Deployment

Key environment variables (see `README.md` and `.env.example`):

- `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD` — required for accessing `/clientworks` and `/clientworks_jp` in environments where Basic Auth should be enabled.
- `NEXT_PUBLIC_SITE_URL` — used in layouts, `robots.ts`, and `sitemap.ts` to generate proper absolute URLs and metadata.

The app is designed to be deployed on Vercel (standard Next.js deployment model), but will run in any environment that supports Next.js 15 App Router.
