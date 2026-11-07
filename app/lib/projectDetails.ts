// app/lib/projectDetails.ts
export type ProjectDetails = {
  title: string;
  intro?: string;
  modalIntro?: string;
  role?: string;
  responsibilities?: string[];
  outcomes?: string[];
  techStack?: string[];
  question?: string;
  decisions?: string[];
  process?: { title: string; body: string }[];
  next?: string;
  codeUrl?: string;
  liveUrl?: string;
  year?: string;
};

const detailsMap: Record<string, ProjectDetails> = {
  "generative-brand-system": {
    title: "SEED: Generative Brand System",
    question: "What if a brand name were the seed for its whole identity?",
    decisions: [
      "The name and intent are hashed (FNV-1a → mulberry32) into a 17-parameter genome, so the same input always grows the same system",
      "One strict normaliser sits between every source — seed, share URL and sliders — and the renderer; it clamps and snaps values and never throws",
      "Every graphic is inline SVG drawn by pure functions, with no canvas or graphics library, so the mark exports as a standalone SVG",
      "Palettes are built in OKLCH, and the primary is nudged until it reaches 3:1 WCAG non-text contrast; ink and paper stay above 7:1",
    ],
    role: "Role: Concept, Design & Development (Next.js, TypeScript, SVG)",
    year: "2026",
    intro:
      "Built a one-page tool that turns a brand name and a one-line intent into a complete identity system: a sacred-geometry mark with its own motion, an OKLCH palette with contrast ratios, a type style, a lockup, a 1080×1350 poster and app icons.\nEvery parameter has a control, so the seeded result is a starting point the designer can override, and the exact board travels in a share link.",
    responsibilities: [
      "Designed the genome: 17 parameters across mark, palette, type and motion",
      "Implemented rosette, vesica and {n/m} star geometry that always fits a fixed outer bound",
      "Built loop-exact motion (breathe, orbit, unfold) that pauses off-screen and respects prefers-reduced-motion",
      "Wrote an OKLCH → sRGB colour pipeline that maps out-of-gamut colours back by binary-searching chroma",
      "Added share-URL state encoding and SVG export of the mark",
      "Planned the system in a written spec first, then implemented it with Claude Code from that plan",
    ],
    outcomes: [
      "Fully reproducible: the whole state fits in a share URL and redraws identically",
      "Numeric self-checks cover the genome, colour, geometry, motion and share encoding",
      "App icons stay legible down to 32px through optical stroke correction",
      "Runs with no environment variables or API keys",
    ],
    techStack: ["Next.js", "TypeScript", "SVG", "OKLCH", "React", "SCSS Modules"],
  },
  "shibuya-french-festival-2026": {
    "title": "Shibuya French Festival 2026 Website",
    "role": "Role: Front-End Developer — Responsive UI Implementation / Interactive Development / WordPress Form Integration",
    "modalIntro": "Built the responsive multi-page website for Shibuya French Festival 2026 with semantic HTML, SCSS and JavaScript. It includes event pages, navigation, carousels, tabs, accordions, expandable cards and data-driven venue content. The Restaurant Week directory generates 56 restaurant cards and their wine pairings from structured data, with responsive Swiper pagination and accessible state handling. Shared headers, footers and FAQ content use Server Side Includes, and a dedicated WordPress theme integrates Gravity Forms for validation, review, AJAX submission and completion-page routing.",
    "intro": "Built a responsive event site covering the festival overview, indoor and outdoor programs, Restaurant Week, retail promotions, sponsors, FAQs and contact pages. Content-heavy campaign pages stay static, and a small WordPress theme handles only the routes that need form processing. Structured JavaScript data drives the restaurant and exhibitor content, while shared SSI partials and SCSS keep the pages consistent. Interactive features include responsive navigation, carousels, tabs, accordions, expandable profiles, scroll-triggered animation and native dialog modals, all with accessibility and reduced-motion support.",
    "responsibilities": [
      "Built responsive event pages with semantic HTML, BEM-style SCSS and vanilla JavaScript",
      "Built a structured data layer that renders 56 restaurants across eight venue groups and links them to 112 wine pairings",
      "Built accessible carousels, tabs, accordions, expandable cards, navigation and native dialog modals",
      "Set up shared headers, footers, FAQ content, design variables, breakpoints and animation behavior for reuse",
      "Integrated Gravity Forms into a classic WordPress theme, with environment-specific form IDs, validation, a review step, AJAX submission and completion routing",
      "Set up Gulp-based SCSS compilation and a Docker environment with WordPress, MariaDB and local mail testing"
    ],
    "outcomes": [
      "Replaced repetitive restaurant markup with rendering from a single data source",
      "Carousels are responsive, with keyboard support, ARIA state updates, inactive-slide control and reduced-motion handling",
      "Shared SSI components and a central SCSS foundation keep the pages consistent",
      "Used a hybrid setup: WordPress only on the dynamic contact routes, with campaign content still delivered statically",
      "Made the form integration environment-aware and scripted the syncing of shared assets into the WordPress theme"
    ],
    "techStack": [
      "HTML5",
      "SCSS",
      "JavaScript (ES6)",
      "WordPress",
      "PHP",
      "Gravity Forms",
      "Swiper.js",
      "Server Side Includes (SSI)",
      "Gulp",
      "Dart Sass",
      "Docker",
      "MariaDB"
    ]
  },
  "emotional-echoes-p5js": {
    title: "Emotional Echoes: Multilingual Typography Experiment",
    question: "Can a feeling be read before the words are understood?",
    decisions: [
      "p5.js 2.0 for fast iteration on type-as-particles and a public, inspectable sketch",
      "Typography carries the emotion through motion and colour, so meaning survives across scripts the viewer can't read",
      "describe() exposes the canvas state to screen readers instead of leaving a silent visual",
    ],
    role: "Role: Creative Coding / Generative Art (p5.js) — Concept, Visual Design, Interaction Design, Implementation",
    intro:
      "An interactive p5.js artwork that visualizes six emotions (happy, anxious, peaceful, angry, sad, hopeful) through multilingual typography and motion. Click anywhere on the canvas to cycle through the emotions, hover over floating words to burst them into text particles, or use the emotion wheel to jump straight to a feeling. It was featured on the official p5.js Community page and fits the theme of the p5.js Community Sketch 2025 Open Call: multilingual typography and text experiments.",
    responsibilities: [
      "Designed a typography experience that expresses emotion across several languages and scripts",
      "Built three ways to interact: click the canvas to cycle emotions, hover for text particles, or pick a feeling on the emotion wheel",
      "Shaped the motion and transitions so that shifts in emotion come through in the typography and color",
      "Built the sketch in p5.js 2.0 and added describe() so screen-reader users get the canvas state",
      "Made the piece for the p5.js Community Sketch 2025 Open Call (theme: Multilingual Typography & Text Experiments)",
    ],
    outcomes: [
      "Featured on the official p5.js Community page (published July 8, 2025)",
      "Made for the p5.js community call on multilingual typography and text experiments",
      "Shown in a public community curation as an example of generative art, interaction design and creative coding",
      "Tied the concept to Mental Health Awareness prompts through exploring feelings with an emotion wheel",
    ],
    techStack: [
      "p5.js",
      "JavaScript",
      "Creative Coding",
      "Generative Art",
      "Interaction Design",
    ],
  },
  "portfolio-website": {
    title: "Portfolio Website",
    role: "Role: Web Engineer — Planning, Design, Implementation, Build Environment Setup",
    intro:
      "Built a portfolio website that brings together project work and profile details. Set up SCSS with Gulp and webpack so the site is easy to maintain and update, added JavaScript animations to match the intended tone, and tuned the UI for desktop and mobile.",
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp", "webpack", "Babel"],
  },
  "udemy-business": {
    title: "Udemy Interview Media Site",
    role: "Role: WordPress Developer — Theme Customization / Search & Filtering Implementation / Udemy REST API Integration / Development Environment Setup (Nginx)",
    intro:
      "Built an interview media site with WordPress and ACF. Designed the custom post type and field structure, added filtering across four taxonomies that can be combined, and built free-word search over post content and ACF flexible content. Also built a feature that fetches course titles, images and URLs from the Udemy REST API by course ID and renders them inside articles automatically. Along the way, set up an Nginx reverse proxy and rewrite rules to keep routing stable in the development environment.",
    responsibilities: [
      "Designed custom post types and ACF fields, and customized the WordPress theme",
      "Implemented combined filters across four taxonomies (age group, gender, job type, and category)",
      "Built search that covers post content and custom fields, including ACF flexible content",
      "Integrated the Udemy REST API to fetch course information and render it in articles automatically",
      "Set up clean URLs and organized the WordPress rewrite rules",
      "Configured an Nginx reverse proxy to keep routing stable in development",
    ],
    outcomes: [
      "Editors only need a course ID, and the course information appears automatically, which saves them effort",
      "Free-word search across post content and ACF fields makes articles easier to find",
      "Filters across several taxonomies make it easier to reach the article you want",
      "Organized the search flow and rendering logic so the code is easier to maintain",
    ],
    techStack: ["WordPress", "PHP", "ACF Pro", "MySQL", "Docker", "WP-CLI", "Nginx", "Udemy REST API", "Node.js", "Gulp"]
  },
  "timerland-official": {
    title: "Timberland Official Website",
    role: "Role: Web Engineer — Maintenance, Operations, Landing Page Production",
    intro:
      "Ran the Timberland Japan official website, with a focus on stable operation and efficient updates. Produced seasonal campaign LPs in three days on average and published news updates the same day, while keeping the brand's look consistent and the pages responsive across devices.",
    outcomes: [
      "Produced seasonal LPs within 3 days on average",
      "Published news updates on the same day of release",
      "Kept operations stable and the brand presentation consistent",
      "Built responsive pages that display well across devices",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "vans-official": {
    title: "VANS Official Website",
    role: "Role: Web Engineer — Maintenance, Operations, Landing Page Production",
    intro:
      "Ran the VANS Japan official website, keeping it stable and its content on time. Built trend-driven campaign LPs on short deadlines and published news updates promptly, balancing visual quality against efficient operations so the brand stays consistent and trustworthy online.",
    outcomes: [
      "Built seasonal and campaign LPs under tight schedules",
      "Published news updates quickly so information went out on time",
      "Delivered stylish front-end work in step with current trends",
      "Kept the site running reliably and kept improving it",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "vans-news": {
    title: "VANS News Development System",
    role: "Role: Front-End Developer — System Design, Astro Implementation, Legacy Integration & Build Automation",
    intro:
      "Designed and built an Astro-based development and preview system for the VANS Japan news pages. It manages legacy HTML, SCSS and media assets in a structured workflow, and stays compatible with the existing publishing environment.",
    responsibilities: [
      "Designed the Astro static-site architecture used to preview and build news articles",
      "Generated static routes by slug from the legacy HTML content",
      "Built the SCSS compilation and asset synchronization workflow",
      "Automated conversion of PNG, JPG and JPEG images to WebP, and normalized the asset references to match",
      "Added live preview, automatic reload and a single-entry development mode",
      "Kept the legacy SSI includes and production asset paths intact in the build output",
    ],
    outcomes: [
      "Created a reusable workflow for developing, checking and publishing the VANS Japan news pages",
      "Automated the repetitive asset preparation and build-output syncing",
      "Kept editable source content separate from generated preview and production files, which makes maintenance easier",
    ],
    techStack: ["Astro", "TypeScript", "Node.js", "Sass / SCSS", "Sharp", "HTML", "JavaScript"],
  },
  "lacoste-official": {
    title: "Lacoste Official Website",
    role: "Role: Web Engineer — Landing Page Production Specialist",
    intro:
      "Produced campaign landing pages for the Lacoste Japan official online store, keeping the brand's refined tone while delivering quality work on tight timelines.",
    outcomes: [
      "Produced seasonal campaign and sale LPs in as little as 2 days, publishing on schedule",
      "Followed the brand guidelines for typography and color to keep the brand identity intact",
      "Ran thorough QA before launch, with no display issues across the major devices",
      "Worked with the marketing and EC teams to finish price and banner updates the same day",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "mhd-official": {
    title: "MHD Official Website",
    role: "Role: Front-End Engineering (Performance Optimization & Maintenance)",
    intro:
      "Responsible for improving the performance of the existing website. Added JavaScript-based cache control to make pages more stable and faster to load, and optimized resources and browser behavior to improve the overall experience.",
    outcomes: [
      "Added JavaScript-based cache control for better page stability",
      "Optimized resources and browser behavior for faster loading",
      "Performance tuning improved the overall user experience",
      "Kept the site running stably with the optimized performance",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Gulp"],
  },
  "meiji-official": {
    title: "Meiji Official Website",
    role: "Role: Web Engineer — Landing Page Production Specialist",
    intro:
      "Produced landing pages for new products and seasonal campaigns on the Meiji official website, with a design that feels reassuring and approachable and communicates the brand message clearly.",
    outcomes: [
      "Published product LPs weekly to match the promotional schedule",
      "Made templates for food-specific information such as nutrition facts and allergen labels",
      "Followed the color and illustration guidelines for family audiences to give the pages a reassuring look",
      "Set up a workflow to handle copy and pricing revisions from the marketing team the same day",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "kikkoman-official": {
    title: "Kikkoman Official Website",
    role: "Role: Web Engineer — Landing Page Production Specialist",
    intro:
      "Produced landing pages for the Kikkoman official website to go with recipe introductions and campaigns, using a friendly, easy-to-follow design that balances the brand message with recipe navigation.",
    outcomes: [
      "Published LPs on tight deadlines to match seasonal recipe features and limited-time campaigns",
      "Laid out recipe steps and ingredients so that beginner cooks can follow them",
      "Made templates for food-specific notices and nutrition information to cut down proofreading",
      "Worked with the marketing team to handle update requests the same day during campaigns",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "react-weather-app": {
    title: "React Weather App",
    role: "Role: Frontend Engineer — Design & Implementation",
    intro:
      "Built a real-time weather app with React and JavaScript, connected to weather and geolocation APIs.\nThe simple UI makes it easy to move between cities and look at the weather.",
    responsibilities: [
      "Connected the weather and geolocation APIs to retrieve data",
      "Built city search with validation and error handling",
      "Built a responsive UI with accessibility considerations",
      "Organized component structure and state management",
    ],
    outcomes: [
      "The UI updates smoothly as API responses come in",
      "Improved loading experience and reduced unnecessary re-renders",
      "Kept the structure easy to maintain even at a small scale",
    ],
    techStack: ["React", "JavaScript", "Weather API", "Geolocation API", "CSS"],
  },
  typevision: {
    title: "TypeVision",
    question: "What if a typing trainer could notice where your eyes go?",
    decisions: [
      "MediaPipe FaceMesh runs in the browser, so no video leaves the device",
      "Eye tracking is optional and calibrated per user; the core trainer works without a camera",
      "localStorage-first progress keeps the app backend-free and instant",
    ],
    role: "Role: Frontend Engineer — Design & Implementation",
    intro:
      "Built a touch-typing trainer that runs in the browser, with JavaScript, optional eye tracking, practice in two languages and progress saved locally.\nThe focused UI lets users train in English and Japanese, track WPM and accuracy in real time, and replay or share challenge runs.",
    responsibilities: [
      "Built the game flow for the Practice, Challenge and Progress modes",
      "Added English/Japanese passage generation and Japanese display options",
      "Integrated optional MediaPipe FaceMesh eye tracking with calibration and sensitivity controls",
      "Stored scores, achievements, goals and settings in localStorage",
    ],
    outcomes: [
      "Privacy comes first: core gameplay needs no backend",
      "A responsive layout, a focus mode, countdowns and live analytics make it easier to use",
      "Split the app into separate UI, gameplay, storage, audio and translation layers",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Vite", "MediaPipe FaceMesh", "localStorage", "p5.js"],
  },
  "iphone14-clone-3d": {
    title: "3D iPhone Product Page",
    role: "Role: Frontend Engineer — Design & Implementation",
    intro:
      "Built a product showcase page that uses React and JavaScript to show an interactive 3D model on the web.\nThe camera moves in sync with the scroll and reveals the product's features step by step.",
    responsibilities: [
      "Set up and initialized the 3D viewer (WebGi)",
      "Built scroll-synced camera control with GSAP and ScrollTrigger",
      "Built preview/standard view toggles and UI controls",
      "Made it responsive and optimized for mobile",
      "Tuned asset management and the loading experience",
    ],
    outcomes: [
      "A smooth 3D experience that follows the scroll",
      "Balanced how well the product shows against how easy the page is to use",
      "A component structure that is easy to maintain",
    ],
    techStack: ["React", "JavaScript", "WebGi (3D)", "GSAP / ScrollTrigger", "CSS", "Vite"],
  },
  "guardians-of-the-moon": {
    title: "Guardians of the Moon",
    question: "How do you make a visit to an AR/VR centre feel like a mission rather than a demo?",
    decisions: [
      "Unity + XR Interaction Toolkit for native controller haptics and grab interactions",
      "Distance-based score bonus rewards risky long shots, giving play a skill curve in a one-minute session",
      "TouchDesigner for the installation so visuals could be tuned live on site in a one-week build",
    ],
    role: "Role: Unity (C#) Engineer — Design & Implementation",
    intro:
      "Wrote the scripts for a VR-ready asteroid shooting mini-game in Unity (C#): asteroid spawning and behavior, raycast shooting, score and timer management, popups, XR grab and haptics, for a play experience that feels intuitive.",
    responsibilities: [
      "Asteroid spawn control (range and interval spawning, Gizmos display)",
      "Asteroid behavior (random speed/rotation, movement logic)",
      "Raycast shooting logic (animation and SFX playback, hit detection)",
      "Hit handling and score calculation (distance-based bonus, popup generation)",
      "Game loop management (timer, score UI, high score save, BGM switching)",
      "VR integration (XRGrabInteractable reset on release, controller haptics)",
      "UI and popups (TextMeshPro score display, camera-facing control)",
    ],
    outcomes: [
      "A shooting experience that feels natural and is tuned for VR controls",
      "Distance-based scores and popups give players clear feedback as they shoot",
      "A modular script structure keeps the code reusable and readable",
    ],
    techStack: [
      "C#",
      "Unity (UnityEngine / UnityEngine.UI)",
      "TextMeshPro",
      "XR Interaction Toolkit",
      "Animator (animation control)",
      "AudioSource / AudioClip (BGM / SFX)",
      "Prefab / Gizmos",
    ],
  },
  "dickies-official": {
    title: "Dickies Official Website",
    role: "Role: Web Engineer — Operations, Maintenance & Landing Page Production",
    intro:
      "Handled operations and maintenance for the Dickies Japan official website and produced landing pages for new products and campaigns, with practical designs that work across devices.",
    outcomes: [
      "Produced multiple LPs per month to support new product and campaign announcements",
      "Published news updates regularly to share the latest information",
      "Pages display well on every device, from smartphones to desktops",
      "A practical design that is easy to use",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
};

export async function getProjectDetails(slug: string): Promise<ProjectDetails | null> {
  return Object.hasOwn(detailsMap, slug) ? detailsMap[slug] : null;
}
