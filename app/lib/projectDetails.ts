// app/lib/projectDetails.ts
export type ProjectDetails = {
  title: string;
  intro?: string;
  role?: string;
  responsibilities?: string[];
  outcomes?: string[];
  techStack?: string[];
};

const detailsMap: Record<string, ProjectDetails> = {
  "emotional-echoes-p5js": {
    title: "Emotional Echoes: Multilingual Typography Experiment",
    role: "Role: Creative Coding / Generative Art (p5.js) — Concept, Visual Design, Interaction Design, Implementation",
    intro:
      "Created an interactive p5.js artwork that visualizes six emotions (happy, anxious, peaceful, angry, sad, hopeful) through multilingual typography and motion. Users can click anywhere on the canvas to cycle emotions, hover floating words to trigger text-particle bursts, and use the emotion wheel to jump directly to a selected feeling. The work was featured on the official p5.js Community page and aligns with the p5.js Community Sketch 2025 Open Call theme focused on multilingual typography and text experiments.",
    responsibilities: [
      "Designed a multilingual typography experience expressing emotion across multiple languages and scripts",
      "Implemented three interaction paths: canvas click to cycle emotions, hover-triggered text particles, and direct selection via emotion wheel",
      "Structured motion and visual transitions to communicate emotional shifts through typography and color",
      "Built the sketch in p5.js 2.0 and included accessibility support through describe() for screen-reader users",
      "Developed the piece in the context of the p5.js Community Sketch 2025 Open Call (theme: Multilingual Typography & Text Experiments)",
    ],
    outcomes: [
      "Featured on the official p5.js Community page (published July 8, 2025)",
      "Recognized in a p5.js community artwork contest/call context for multilingual typography experimentation",
      "Showcased generative art, interaction design, and creative coding skills in a public community curation",
      "Connected the visual concept to Mental Health Awareness prompts using emotion/feelings-wheel exploration",
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
      "Created a portfolio website that brings together project work and profile details. Built a development setup with SCSS and Gulp/webpack for maintainability and easy updates. Implemented JavaScript-driven animations to match the intended tone while optimizing the UI for both desktop and mobile.",
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp", "webpack", "Babel"],
  },
  "udemy-business": {
    title: "Udemy Interview Media Site",
    role: "Role: WordPress Developer — Theme Customization, Search & Filtering, API Integration, Reverse Proxy (Nginx)",
    intro:
      "Built a WordPress interview media site with custom post types and ACF design. Implemented multi-select filtering across four taxonomies and freeword search spanning post content + ACF. Also integrated the Udemy API to display course info in articles and set up an Nginx reverse proxy for stable delivery and routing.",
    responsibilities: [
      "Designed custom post types and ACF fields, and customized the theme",
      "Built combined filtering across four taxonomies (age group, gender, role, category)",
      "Made ACF flexible content searchable alongside post content",
      "Integrated Udemy API (fetching course title, image, and URL by course ID)",
      "Set up clean URLs and rewrite rules",
      "Configured an Nginx reverse proxy",
    ],
    outcomes: [
      "Improved search accuracy with well-structured AND/OR filters",
      "Enabled cross-content freeword search including ACF fields",
      "Reduced update effort by auto-fetching course data via API",
      "Simplified search logic for better maintainability and performance",
    ],
    techStack: ["WordPress", "PHP", "ACF Pro", "MySQL", "Docker", "WP-CLI", "Nginx", "Udemy API", "Node.js", "Gulp"]
  },
  "timerland-official": {
    title: "Timberland Official Website",
    role: "Role: Web Engineer — Maintenance, Operations, Landing Page Production",
    intro:
      "Managed Timberland Japan's official website, focusing on stable operation and efficient updates. Produced seasonal campaign LPs within an average of three days and published news updates on the same day. Delivered fast, reliable content while maintaining the brand's visual consistency and responsive design across devices.",
    outcomes: [
      "Produced seasonal LPs within 3 days on average",
      "Published news updates on the same day of release",
      "Ensured stable operations and consistent brand presentation",
      "Implemented responsive design optimized for all devices",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "vans-official": {
    title: "VANS Official Website",
    role: "Role: Web Engineer — Maintenance, Operations, Landing Page Production",
    intro:
      "Managed the official website for VANS Japan, ensuring stability and timely content delivery. Developed trend-driven campaign LPs within short deadlines and executed news updates promptly. Maintained a balance between visual quality and operational efficiency, reinforcing the brand's consistency and trustworthiness online.",
    outcomes: [
      "Built seasonal and campaign LPs under tight schedules",
      "Published news updates quickly for timely communication",
      "Delivered stylish, trend-conscious front-end experiences",
      "Ensured stable operations and ongoing site improvements",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "lacoste-official": {
    title: "Lacoste Official Website",
    role: "Role: Web Engineer — Landing Page Production Specialist",
    intro:
      "Produced campaign landing pages for the Lacoste Japan official online store. Focused on maintaining the brand's refined tone while delivering high-quality creatives within tight production timelines.",
    outcomes: [
      "Produced seasonal campaign and sale LPs in as little as 2 days, publishing on schedule",
      "Reproduced typography and color schemes aligned with brand guidelines to maintain brand identity",
      "Conducted thorough pre-launch QA to ensure zero display issues across major devices",
      "Collaborated with marketing/EC teams to complete price and banner updates same-day",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "mhd-official": {
    title: "MHD Official Website",
    role: "Role: Front-End Engineering (Performance Optimization & Maintenance)",
    intro:
      "Responsible for performance optimization of the existing website. Implemented JavaScript-based cache control to improve page stability and loading speed. Also optimized resources and fine-tuned browser behavior to enhance overall user experience.",
    outcomes: [
      "Implemented JavaScript-based cache control for improved page stability",
      "Optimized resources and browser behavior to enhance loading speed",
      "Improved overall user experience through performance tuning",
      "Maintained stable website operations with optimized performance",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Gulp"],
  },
  "meiji-official": {
    title: "Meiji Official Website",
    role: "Role: Web Engineer — Landing Page Production Specialist",
    intro:
      "Produced landing pages for new products and seasonal campaigns for the Meiji official website. Emphasized a sense of security and approachability with clear communication of brand messaging.",
    outcomes: [
      "Published product feature LPs weekly to align with promotional schedules",
      "Templated organization of food-brand-specific information such as nutrition facts and allergen labels",
      "Achieved reassuring design by following color and illustration guidelines targeting family audiences",
      "Established workflow to respond same-day to copy and pricing revision requests from the marketing team",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "kikkoman-official": {
    title: "Kikkoman Official Website",
    role: "Role: Web Engineer — Landing Page Production Specialist",
    intro:
      "Produced landing pages for the Kikkoman official website aligned with recipe introductions and campaign initiatives. Balanced brand messaging and recipe navigation with friendly, easy-to-understand design.",
    outcomes: [
      "Published LPs on tight deadlines aligned with seasonal recipe features and limited-time campaigns",
      "Organized recipe steps and ingredients with information design accessible to beginner cooks",
      "Templated food-brand-specific notices and nutrition information to reduce proofreading effort",
      "Collaborated with the marketing team to respond same-day to update requests during campaign periods",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "react-weather-app": {
    title: "React Weather App",
    role: "Role: Frontend Engineer — Design & Implementation",
    intro:
      "Built a real-time weather app using React and JavaScript, integrated with weather and geolocation APIs.\nAn intuitive UI lets users move smoothly between cities and explore weather patterns.",
    responsibilities: [
      "Integrated weather and geolocation APIs for data retrieval",
      "Implemented city search with validation and error handling",
      "Built a responsive UI with accessibility considerations",
      "Organized component structure and state management",
    ],
    outcomes: [
      "Delivered smooth UI updates based on API responses",
      "Improved loading experience and reduced unnecessary re-renders",
      "Optimized a maintainable structure even at small scale",
    ],
    techStack: ["React", "JavaScript", "Weather API", "Geolocation API", "CSS"],
  },
  typevision: {
    title: "TypeVision",
    role: "Role: Frontend Engineer — Design & Implementation",
    intro:
      "Built a browser-based touch-typing trainer using JavaScript, integrated with optional eye tracking, bilingual practice flows, and local-first progress storage.\n\nA focused UI lets users train in English and Japanese, track WPM and accuracy in real time, and replay or share challenge runs smoothly.",
    responsibilities: [
      "Implemented game flow for Practice, Challenge, and Progress modes",
      "Added English/Japanese passage generation and Japanese display options",
      "Integrated optional MediaPipe FaceMesh eye tracking with calibration and sensitivity controls",
      "Managed scores, achievements, goals, and settings with localStorage persistence",
    ],
    outcomes: [
      "Created a privacy-first experience with no backend required for core gameplay",
      "Improved usability with responsive layout, focus mode, countdowns, and live analytics",
      "Structured the app into modular UI, gameplay, storage, audio, and translation layers",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Vite", "MediaPipe FaceMesh", "localStorage", "p5.js"],
  },
  "iphone14-clone-3d": {
    title: "3D iPhone Product Page",
    role: "Role: Frontend Engineer — Design & Implementation",
    intro:
      "Built a product showcase page that uses React and JavaScript to render an interactive 3D model on the web.\nA scroll-synced camera animation reveals product features step by step, delivering an intuitive experience.",
    responsibilities: [
      "Integrated and initialized the 3D viewer (WebGi)",
      "Implemented scroll-synced camera control (GSAP/ScrollTrigger)",
      "Built preview/standard view toggles and UI controls",
      "Responsive implementation with mobile optimization",
      "Tuned asset management and loading experience",
    ],
    outcomes: [
      "Delivered a smooth 3D experience synchronized with scroll",
      "Improved product appeal by balancing visibility and usability",
      "Established a maintainable component structure",
    ],
    techStack: ["React", "JavaScript", "WebGi (3D)", "GSAP / ScrollTrigger", "CSS", "Vite"],
  },
  "guardians-of-the-moon": {
    title: "GUARDIANS OF THE MOON",
    role: "Role: Unity (C#) Engineer — Design & Implementation",
    intro:
      "Developed a suite of scripts for a VR-ready asteroid shooting mini-game using Unity (C#). Implemented asteroid spawning and behavior, raycast shooting, score and timer management, popups, XR grab, and haptics to deliver an intuitive play experience.",
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
      "Delivered an intuitive shooting experience optimized for VR controls",
      "Strengthened gameplay with dynamic score and popup feedback by distance",
      "Improved reusability and readability with a modular script structure",
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
      "Handled operations and maintenance for the Dickies Japan official website. Produced landing pages for new products and campaigns with a focus on practical design implemented across multiple devices.",
    outcomes: [
      "Produced multiple LPs per month to support new product and campaign announcements",
      "Provided regular news updates to disseminate the latest information",
      "Achieved optimal display across multiple devices, from smartphones to desktops",
      "Improved usability with design focused on practicality",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
};

export async function getProjectDetails(slug: string): Promise<ProjectDetails | null> {
  return detailsMap[slug] ?? null;
}
