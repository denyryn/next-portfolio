"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useQuery } from "react-query";
import { staticProjectData } from "@/lib/staticProjectData";
import { Loading } from "@/components/screens/loading";

type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
  images: { src: string; alt: string }[];
  src?: string;
  alt?: string;
};

interface ProjectContextType {
  projects: Project[] | null;
  loading: boolean;
  error: string | null;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const fetchProject = async (): Promise<Project[]> => {
  const API_URL = process.env["NEXT_PUBLIC_BIN_API_URL"];
  const MASTER_KEY = process.env["NEXT_PUBLIC_BIN_X_MASTER_KEY"];

  if (!API_URL || !MASTER_KEY) {
    throw new Error("Missing API credentials");
  }

  const response = await fetch(API_URL + "/b/684b07808960c979a5a8b96a", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Master-Key": MASTER_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }

  const data = await response.json();
  return data.record;
};
export function ProjectProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, error } = useQuery<Project[], Error>(
    "project",
    fetchProject,
    {
      staleTime: 1000 * 60 * 30, // cache for 5 minutes
      retry: 1,
    }
  );

  if (isLoading) return <Loading />;

  return (
    <ProjectContext.Provider
      value={{
        projects: data ?? null,
        loading: isLoading,
        error: error ? error.message : null,
      }}
    >
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
