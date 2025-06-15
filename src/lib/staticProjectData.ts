export type StaticProject = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
  images: { src: string; alt: string }[];
};

export const staticProjectData: StaticProject[] = [
  {
    id: "1",
    name: "Katresna Creations",
    description:
      "This is a digital service that my partner and I currently run. It's a personalized love-themed website service based on customizable templates",
    technologies: ["Laravel", "Tailwind CSS", "Vue 3", "Inertia", "Filament"],
    url: "https://katresna.web.id/",
    images: [
      {
        src: "https://res.cloudinary.com/dunxaky7i/image/upload/v1748710756/2025-05-31_23-49_hminul.png",
        alt: "Katresna Creations",
      },
      {
        src: "https://res.cloudinary.com/dunxaky7i/image/upload/v1748710756/2025-05-31_23-50_gal7s1.png",
        alt: "Katresna Creations",
      },
      {
        src: "https://res.cloudinary.com/dunxaky7i/image/upload/v1748710755/2025-05-31_23-51_1_ahhggo.png",
        alt: "Katresna Creations",
      },
    ],
  },
  {
    id: "2",
    name: "Unused Goodies",
    description:
      "Unused Goodies started as a college project—a simple PHP e-commerce website. Over time, I revamped it with Laravel to enhance scalability and security, transforming it into my full-fledged personal e-commerce platform. Now, we sell quality pre-loved items! Check us out on Tokopedia for great deals on second-hand treasures. :)",
    technologies: ["Laravel", "Tailwind CSS", "Livewire", "Filament"],
    url: "https://katresna.web.id/",
    images: [
      {
        src: "https://res.cloudinary.com/dunxaky7i/image/upload/v1749135747/2025-06-05_22-00_rvdyka.png",
        alt: "Unused Goodies",
      },
    ],
  },
  {
    id: "3",
    name: "Honorable Mentions",
    description:
      "This is a collection of mini-projects I've built—some for college assignments, others just for fun. Though small in scope, each one reflects my commitment to clean code and best practices.",
    technologies: ["Various Technologies"],
    url: "https://github.com/denyryn",
    images: [
      {
        src: "https://res.cloudinary.com/dunxaky7i/image/upload/v1749135747/2025-06-05_22-00_rvdyka.png",
        alt: "Unused Goodies",
      },
    ],
  },
];
