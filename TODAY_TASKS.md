# Today’s Tasks — 2025-09-08

## Implemented
- Modal re-open reliability (EN/JP/Client Works):
  - Clear base route with `?modal=off`, then double‑RAF + fallback to push the modal route.
  - Add unique `m` query to force true remount on every open; intercepted pages key Modal by `slug + m`.
  - Guard late close callbacks: only run if `location.pathname === resetPath` and no query (prevents canceling fresh opens).
  - Preserve scroll with `{ scroll: false }` on replace/push.
- Lighter, beautiful modal animations:
  - Medium close: 500ms transform/opacity only; removed animated filters and heavy box‑shadows.
  - Subtle centered glow (opacity fade), consistent open/close durations.
  - Matching fade‑in (panel overshoot) + entry shimmer; implemented via CSS keyframes.
- EN copy polish:
  - Navbar “About Me”; cleaned hero intro, skills headings, project descriptions, footer label + email.
  - Synced `siteProjectsEn.ts` descriptions with cards.
- JP copy polish (keep EN labels in /jp untouched):
  - Refined hero paragraph; rewrote About Me JP paragraphs (education, career, current focus, creative work).
  - Updated `siteProjectsJp.ts` descriptions for clarity while keeping English titles.

## Key Files
- Modal core and routes
  - `app/components/common/Modal.tsx`
  - `app/components/clientworks/sub/ClientProjects.tsx`
  - `app/components/en/sub/ProjectCard.tsx`
  - `app/components/jp/sub/ProjectCard.tsx`
  - `app/clientworks/@modal/(.)[slug]/page.tsx`
  - `app/en/@modal/(.)project/[slug]/page.tsx`
  - `app/jp/@modal/(.)project/[slug]/page.tsx`
- Animations
  - `app/globals.css` (modalIn/modalOut/shimmer + glow)
- EN copy
  - `app/components/en/main/Navbar.tsx`
  - `app/components/en/sub/HeroContent.tsx`
  - `app/components/en/sub/SkillsText.tsx`
  - `app/components/en/main/Projects.tsx`
  - `app/components/en/main/Footer.tsx`
  - `app/lib/siteProjectsEn.ts`
- JP copy
  - `app/components/jp/sub/HeroContent.tsx`
  - `app/components/about-me_jp/sub/AboutMeContent.tsx`
  - `app/components/jp/main/Footer.tsx`
  - `app/components/jp/main/Projects.tsx`
  - `app/lib/siteProjectsJp.ts`

## How To Verify
1. Re‑open test (EN/JP/Client Works): open a modal → close → immediately click the same card.
   - Modal reopens reliably; no scroll jump; address bar briefly shows `?modal=off` then `?m=<ts>`.
2. Description navigation: from Client Works modal “Visit” to description → “Back/Back to list”.
   - Exit/enter animations run; scroll position preserved.
3. Animations: open feels snappy with a soft overshoot + shimmer; close fades with slight scale; glow remains subtle.
4. EN copy: verify Navbar/Hero/Skills/Projects/Footer text and `siteProjectsEn.ts` descriptions.
5. JP copy: verify Hero and About Me JP paragraphs; JP project descriptions reflect improved wording; English labels in /jp unchanged.

## Notes
- Dev logs show double mount/unmount under React Strict Mode (expected in dev only).
- `?m` ensures React remounts the intercepted modal even for the same slug.

# Today’s Tasks — 2025-09-05

## Implemented
- Fix missing project slug: added `timerland-official` (Timberland) to `app/lib/projects.ts` and card now uses `/img/timberland.webp`.
- Standardize card media height: 16:9 containers + `next/image` `fill` + `object-cover` across clientworks and JP/EN project cards.
- Center card text: enabled via `centerText` prop; applied where requested.
- Animate JP/EN project sections: added framer‑motion fade/entrance on headings and grids.
- Convert to Client Components: added `"use client"` to JP/EN Projects and ProjectCard components to resolve `createContext is not a function`.
- Fix `"use client"` placement error by moving directive to the top of files.
- Client Works robustness: added 404 handling (`notFound()`) for unknown `/clientworks/[slug]` routes and metadata guards.
- Introduce JP/EN project modals with intercepted routes (same UX as Client Works):
  - EN: `/en/@modal/(.)project/[slug]` with full‑page fallback `/en/project/[slug]`.
  - JP: `/jp/@modal/(.)project/[slug]` with full‑page fallback `/jp/project/[slug]`.
- Unify modal close animation: reused shared `Modal` close choreography for JP/EN; added `resetPath` support and options.
- Prevent scroll jump on close: use `router.replace(..., { scroll: false })` and `Link scroll={false}` for all modal flows.
- Ensure immediate modal reopen: disable prefetch on modal links, and on card click, if already in a modal route, `router.replace(base)` then double‑RAF `router.push(modal)` (JP/EN).
- Stabilize router state: for intercepted modals, avoid `router.refresh()` on close to prevent “initialTree is not iterable”.

## Key Files
- Client Works
  - `app/clientworks/@modal/(.)[slug]/page.tsx`
  - `app/clientworks/[slug]/ProjectDetail.tsx`
  - `app/clientworks/[slug]/page.tsx`
  - `app/clientworks/[slug]/description/page.tsx`
  - `app/components/clientworks/sub/ClientProjects.tsx`
- Shared
  - `app/components/common/Modal.tsx`
- EN
  - `app/en/layout.tsx` (adds `modal` slot)
  - `app/components/en/main/Projects.tsx`
  - `app/components/en/sub/ProjectCard.tsx`
  - `app/en/@modal/(.)project/[slug]/page.tsx`
  - `app/en/@modal/default.tsx`
  - `app/en/project/ProjectDetail.tsx`
  - `app/en/project/[slug]/page.tsx`
  - `app/lib/siteProjectsEn.ts`
- JP
  - `app/jp/layout.tsx` (adds `modal` slot)
  - `app/components/jp/main/Projects.tsx`
  - `app/components/jp/sub/ProjectCard.tsx`
  - `app/jp/@modal/(.)project/[slug]/page.tsx`
  - `app/jp/@modal/default.tsx`
  - `app/jp/project/ProjectDetail.tsx`
  - `app/jp/project/[slug]/page.tsx`
  - `app/lib/siteProjectsJp.ts`
- Projects data
  - `app/lib/projects.ts` (added Timberland)

## How To Verify
- Client Works
  - Visit `/clientworks` → click a card → modal opens.
  - Close (button/overlay/ESC) → no scroll jump; click the same card → reopens immediately.
  - “Visit” from modal fades out, then navigates; “Back/Back to list” respect animations and stay in place.
- EN
  - Visit `/en` → click a card → modal opens via intercepted route.
  - Close and immediately click the same card → reopens. No scroll jump.
  - Open `/en/project/[slug]` directly → full page fallback renders.
- JP
  - Same as EN at `/jp` and `/jp/project/[slug]`.

## Notes / Fixes
- Resolved `Project not found` by adding missing slug and by handling unknown slugs with 404 on Client Works pages.
- Resolved `createContext is not a function` by marking components as client.
- Resolved `"use client" directive must be at top` by moving directive.
- Resolved router state error (`initialTree is not iterable`) by avoiding `router.refresh()` on intercepted close.

## Next Actions (Optional)
- Add richer metadata and images for JP/EN modal pages.
- Extend `siteProjectsEn/Jp` with more projects and detail copy.
- Factor card config into a shared data source to avoid duplication.
- Add tests for modal open/close and route transitions.
