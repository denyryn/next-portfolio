"use client";

import { AnimatedText } from "@/components/animated-text";
import { useUser } from "@/hooks/useUser";
import { useHasMounted } from "@/hooks/useHasMounted";
import { Loading } from "@/components/screens/loading";

export const HeroSection = () => {
  const { user, isLoading } = useUser();
  const hasMounted = useHasMounted();

  const name = user?.name || "Guest";
  const [firstName = "", lastName = ""] = name.split(" ");
  const safeFirstName = firstName.toUpperCase();
  const safeLastName = lastName.toUpperCase();

  return (
    <section className="flex justify-center items-center min-h-screen flex-col px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Greetings */}
        <span className="block text-[1rem] md:text-[2rem] tracking-[0.2em]">
          Hi, my name is
        </span>

        {/* Name */}
        <div className="flex flex-col items-center -space-y-16 md:-space-y-24 relative uppercase text-[6rem] md:text-[10rem] font-bold">
          <AnimatedText text={safeFirstName || "GUEST"} />
          {safeLastName && <AnimatedText text={safeLastName} />}
        </div>

        {/* Role */}
        <span className="block text-[1rem] md:text-[2rem] tracking-[0.2em]">
          a Fullstack Developer who builds from idea to deployment.
        </span>
      </div>
    </section>
  );
};
