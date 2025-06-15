"use client";
import { HeroSection } from "@/components/home/hero";
import { ProjectsSection } from "@/components/home/projects";
import { ContactSection } from "@/components/global/contact";
import { useNavbar } from "@/hooks/useNavbar";
import useScrollTracker from "@/hooks/useScroll";
import { useEffect } from "react";

export default function Page() {
  const { setIsNavbarVisible } = useNavbar();
  const { scrollDirection } = useScrollTracker();
  const isScrollingDown = scrollDirection === "down";

  useEffect(() => {
    setIsNavbarVisible(!isScrollingDown);
  }, [isScrollingDown, setIsNavbarVisible]);

  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
