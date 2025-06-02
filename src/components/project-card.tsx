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
    <Card className="project-card h-full border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden ">
          <div className="flex gap-2 p-4">
            <div className="project-image relative flex-1 rounded-lg overflow-hidden bg-muted">
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
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500" />
          </div>

          {/* Floating project number */}
          {/* <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
            {String(index + 1).padStart(2, "0")}
          </div> */}
        </div>

        {/* Content Section */}
        <div className="project-content p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-foreground/90 transition-colors duration-300">
              {project.name}
            </h3>
            <div className="h-0.5 w-0 bg-foreground group-hover:w-12 transition-all duration-500 ease-out" />
          </div>

          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="text-xs bg-muted hover:bg-foreground hover:text-background transition-all duration-300 border border-border/50"
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
                  ? "bg-green-500 animate-pulse"
                  : "bg-muted-foreground/40"
              } transition-all duration-300`}
            />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              {hoveredProject === project.id ? "Active" : "View Project"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
