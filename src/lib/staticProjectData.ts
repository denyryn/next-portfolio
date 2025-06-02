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
    description: "Katresna Creations - Website",
    technologies: ["Laravel", "Tailwind CSS", "Vue 3", "Inertia", "Filament"],
    url: "https://katresna.web.id/",
    images: [
      {
        src: "2025-05-31_23-49_hminul.png",
        alt: "Katresna Creations",
      },
      {
        src: "2025-05-31_23-49_hminul.png",
        alt: "Katresna Creations",
      },
      {
        src: "2025-05-31_23-49_hminul.png",
        alt: "Katresna Creations",
      },
    ],
  },
  {
    id: "2",
    name: "Unused Goodies",
    description: "an e-commerce website",
    technologies: ["Laravel", "Tailwind CSS", "Livewire", "Filament"],
    url: "https://katresna.web.id/",
    images: [
      {
        src: "2025-05-31_23-49_hminul.png",
        alt: "Katresna Creations",
      },
      {
        src: "2025-05-31_23-49_hminul.png",
        alt: "Katresna Creations",
      },
      {
        src: "2025-05-31_23-49_hminul.png",
        alt: "Katresna Creations",
      },
    ],
  },
];
