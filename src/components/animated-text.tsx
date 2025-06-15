"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (lettersRef.current.length !== text.length) return;

    gsap.registerPlugin(ScrollTrigger);
    const letters = lettersRef.current;

    gsap.set(letters, { opacity: 0, y: 1000 });

    const animation = gsap.to(letters, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
      },
    });

    return () => {
      animation.kill();
    };
  }, [text]);

  return (
    <div ref={containerRef} className={`flex justify-center ${className}`}>
      {[...text].map((letter, i) => (
        <div
          key={`${letter}-${i}-${text.length}`}
          ref={(el) => {
            if (el) lettersRef.current[i] = el;
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </div>
      ))}
    </div>
  );
};
