export interface Project {
  name: string;
  image: string;
  link: string;
}
export const projects = [
  {
    name: "Seed to Feed",
    image: "/photos/seedtofeed.jpg",
    link: "https://github.com/Seed-to-Feed/seedtofeed",
    about:
      "Final project for EDA.  My cohort worked with the client from start to finish to produce this application.  I worked on frontend development and ensuring the color and image story matched the branding of our client's company.  I also worked on the API connection to get get information from the elevator tickets.",
    tech: "Postgres • Express • React • Redux • MaterialUI",
  },

  {
    name: "React Calculator",
    image: "/photos/calculator.jpg",
    link: "https://exquisite-bubblegum-181887.netlify.app/",
    about: "Simple calculator I re-made using React framework.",
    tech: "React • JavaScript",
  },
  {
    name: "WeGo Travel",
    image: "/photos/travel.jpg",
    link: "https://github.com/tkengelhart/wego_travel",
    about:
      "My solo project for EDA.  This was a CRUD application that was designed for larger groups to organize travel plans.",
    tech: "React • Redux • Bootstrap • PostgreSQL",
  },
  {
    name: "Pick Your Polish",
    image: "/photos/nails.jpg",
    link: "https://main--extraordinary-sorbet-2bdb2f.netlify.app/",
    about:
      "Application that randomizes my nail polish options.  I made this project as a way to organize my collection, but moreso to test out Next.js and Tailwind CSS",
    tech: "Next.js • Tailwind • MongoDB",
  },
];

const [seed, calculator, travel, polish] = projects;

export const initialProjects = [seed, calculator, travel, polish];

export function getNextProject(projects: Project[]): Project | undefined {
  const current = new Set(projects);
  return projects.find((project) => !current.has(project));
}
