"use client";
import { HeroSection } from "@/components/about/hero";
import { BioSection } from "@/components/about/bio";
import { TechSection } from "@/components/about/tech";
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
      <BioSection />
      <TechSection />
      <ContactSection />
    </div>
  );
}
