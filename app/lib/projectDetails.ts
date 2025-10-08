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
    role: "Role: Web Engineer — Maintenance, Operations, LP Production",
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
    role: "Role: Web Engineer — Maintenance, Operations, LP Production",
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
