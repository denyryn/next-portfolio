"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { StaticProject, staticProjectData } from "@/lib/staticProjectData";

type Project = StaticProject;

interface ProjectContextType {
  projects: Project[] | null;
  loading: boolean;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(staticProjectData);
    setLoading(false);

    return;
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
}
