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
  "timerland-official": {
    title: "Timberland Official Website",
    role: "Role: Web Engineer — Operations, Maintenance & LP Production",
    intro:
      "Handled operations and maintenance for the Timberland Japan official website. Produced seasonal campaign landing pages on tight deadlines and updated news same-day to ensure stable operations.",
    outcomes: [
      "Produced seasonal LPs within an average of 3 days",
      "Updated news same-day for rapid information dissemination",
      "Maintained stable operations to preserve brand credibility",
      "Provided optimal display across multiple devices",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "vans-official": {
    title: "VANS Official Website",
    role: "Role: Web Engineer — Operations, LP Production & News Updates",
    intro:
      "Managed operations and improvements for the VANS Japan official e-commerce site. Focused on trend-driven campaigns around skate culture and music festivals, prioritizing speedy execution and timely reflection of the latest information.",
    outcomes: [
      "Produced 3-4 LPs per month on tight deadlines to support new product and event announcements",
      "Updated 2-3 news articles per week same-day to support brand trend communication",
      "Refactored SCSS to enhance design flexibility while improving maintainability",
      "Collaborated with designers to accurately reproduce street-style visuals",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "lacoste-official": {
    title: "Lacoste Official Website",
    role: "Role: Web Engineer — LP Production Specialist",
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
  "meiji-official": {
    title: "Meiji Official Website",
    role: "Role: Web Engineer — LP Production Specialist",
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
    role: "Role: Web Engineer — LP Production Specialist",
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
      "Developed a real-time weather app using React and JavaScript integrated with weather and geolocation APIs. Features an intuitive UI for seamlessly navigating between cities and exploring weather patterns.",
    responsibilities: [
      "Integrated weather and geolocation APIs for data retrieval",
      "City search with validation and error handling",
      "Responsive UI with accessibility considerations",
      "Component breakdown and state management organization",
    ],
    outcomes: [
      "Achieved smooth UI updates in response to API responses",
      "Improved loading experience and reduced unnecessary re-renders",
      "Optimized for a maintainable structure even at small scale",
    ],
    techStack: ["React", "JavaScript", "Weather API", "Geolocation API", "CSS"],
  },
  "dickies-official": {
    title: "Dickies Official Website",
    role: "Role: Web Engineer — Operations, Maintenance & LP Production",
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
