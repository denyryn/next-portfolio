"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ProjectProvider } from "@/contexts/ProjectContext";
import { useProject } from "@/hooks/useProject";
import { Loading } from "../screens/loading";
import { CldImage } from "next-cloudinary";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedText } from "../animated-text";
import { ProjectCard } from "../project-card";

gsap.registerPlugin(ScrollTrigger);

const ProjectsContent = () => {
  const { projects, loading } = useProject();
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (!projects || !listRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate project cards on load
      gsap.fromTo(
        ".project-card",
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // Horizontal scroll animation
      const totalScrollWidth = listRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalScrollWidth * 1.1 - viewportWidth;

      if (scrollDistance > 0) {
        gsap.to(listRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${totalScrollWidth * 0.8}`,
            scrub: 0.4,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  useEffect(() => {
    // Smooth hover animations
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(card.querySelector(".project-content"), {
          y: -5,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(card.querySelector(".project-content"), {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [projects]);

  if (loading) return <Loading />;
  if (!projects) return null;

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20"
      ref={containerRef}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.02] bg-grid-pattern" />

      <ul
        ref={listRef}
        className="flex gap-8 md:ps-0 py-24 pt-32 items-center"
        style={{ width: "max-content" }}
      >
        {/* Title */}
        <div className="min-w-screen flex items-center justify-center p-3">
          <div className="flex flex-wrap justify-start max-w-sm lg:max-w-screen">
            <AnimatedText
              text="Projects "
              className="flex text-[5rem] md:text-[7rem] font-bold text-foreground"
            />
            <AnimatedText
              text="Sneak "
              className="flex text-[5rem] md:text-[7rem] font-bold text-foreground"
            />
            <AnimatedText
              text="Peek"
              className="flex text-[5rem] md:text-[7rem] font-bold text-foreground"
            />
          </div>
        </div>

        {/* Project cards */}
        {projects.map((project, index) => (
          <li
            key={project.id}
            className="flex-shrink-0"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <ProjectCard project={project} hoveredProject={hoveredProject} />
          </li>
        ))}
      </ul>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-muted-foreground">
        <div className="w-6 h-0.5 bg-foreground/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-foreground rounded-full animate-pulse"
            style={{ width: "30%" }}
          />
        </div>
        <span className="text-xs uppercase tracking-wider font-medium">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export const ProjectsSection = () => {
  return (
    <ProjectProvider>
      <ProjectsContent />
    </ProjectProvider>
  );
};
