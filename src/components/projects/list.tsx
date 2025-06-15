"use client";
import { AnimatedText } from "../animated-text";
import { AnimatedParagraph } from "../animated-pharagraph";
import SplitText from "../split-text";
import { useProject } from "@/hooks/useProject";
import { Loading } from "../screens/loading";
import { ProjectProvider } from "@/contexts/ProjectContext";

const ProjectList = () => {
  const { projects, loading } = useProject();

  if (!projects || loading) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-16 space-y-16">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative w-full min-h-[80vh] rounded-2xl overflow-hidden group shadow-lg"
        >
          {/* Blurred background with hover clarity */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-110 group-hover:scale-100 group-hover:blur-none filter blur-md"
            style={{ backgroundImage: `url(${project.images[0].src})` }}
          ></div>

          {/* Overlay: gradient improves readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          {/* Foreground content */}
          <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-5 md:px-16">
            <div className="flex flex-col gap-8 text-center w-full max-w-4xl">
              <AnimatedText
                className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold text-white"
                text={project.name}
              />

              <AnimatedParagraph className="flex flex-wrap justify-center gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-white border border-white rounded-full px-4 py-1 text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </AnimatedParagraph>

              <div className="flex justify-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-medium px-6 py-2 rounded-xl shadow hover:bg-gray-100 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export const ProjectListSection = () => {
  return (
    <ProjectProvider>
      <ProjectList />
    </ProjectProvider>
  );
};
