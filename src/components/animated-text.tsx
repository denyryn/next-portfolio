"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
}) => {
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lettersRef.current.length !== text.length) return;

    const animatableLetters = lettersRef.current.filter(
      Boolean
    ) as HTMLDivElement[];

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(animatableLetters, { opacity: 0, y: 1000 });

    const animation = gsap.to(animatableLetters, {
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
    <div
      ref={containerRef}
      className={`text-center relative *:relative *:inline-block *:font-bold ${
        className ?? ""
      }`}
    >
      {[...text].map((letter, i) => (
        <div
          key={`${letter}-${i}-${text.length}`}
          ref={(el) => {
            lettersRef.current[i] = el;
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </div>
      ))}
    </div>
  );
};
