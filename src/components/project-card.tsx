import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CldImage } from "next-cloudinary";

type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
  images: { src: string; alt: string }[];
};

type ProjectCardProps = {
  project: Project;
  hoveredProject: string | null;
  index?: number;
};

export const ProjectCard = ({
  project,
  hoveredProject,
  index = 0,
}: ProjectCardProps) => {
  return (
    <Card className="project-card h-full border border-white/20 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl hover:bg-white/10 hover:border-white/30">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="flex gap-2 p-4">
            <div className="project-image relative flex-1 rounded-lg overflow-hidden">
              <CldImage
                src={project.images[0].src}
                alt={project.images[0].alt}
                width="400"
                height="240"
                className="group-hover:w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105 w-full"
                crop={{
                  type: "fit",
                  source: true,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="project-content p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
              {project.name}
            </h3>
            <div className="h-0.5 w-0 bg-white group-hover:w-12 transition-all duration-500 ease-out" />
          </div>

          <p className="text-white/80 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="text-xs bg-white/10 select-none hover:bg-white/20 text-white/80 hover:text-white border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 pt-2">
            <div
              className={`w-2 h-2 rounded-full ${
                hoveredProject === project.id
                  ? "bg-green-400 animate-pulse"
                  : "bg-white/40"
              } transition-all duration-300`}
            />
            <span className="text-xs text-white/70 uppercase tracking-wider font-medium">
              {hoveredProject === project.id ? "Active" : "View Project"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
