"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(containerRef.current, { opacity: 0, y: 50 });

    const animation = gsap.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`will-change-transform ${className || ""}`}
    >
      {children}
    </div>
  );
};
