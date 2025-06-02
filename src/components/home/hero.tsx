"use client";

import { AnimatedText } from "@/components/animated-text";
import { useUser } from "@/hooks/useUser";
import { Loading } from "@/components/screens/loading";

export const HeroSection = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <Loading />;
  }

  const firstName = user?.name?.split(" ")[0]?.toUpperCase();
  const lastName = user?.name?.split(" ")[1]?.toUpperCase();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col -space-y-6 *:text-center">
      <div className="max-w-2xl mx-auto">
        {/* Greetings */}
        <span className="text-[1rem] md:text-[2rem] tracking-[0.2em]">
          Hi, my name is
        </span>

        {/* Name */}
        <div className="flex flex-col -space-y-16 md:-space-y-24 text-center relative *:relative *:inline-block *:font-bold *:text-[6rem] md:*:text-[10rem] font-(family-name:--font-gabarito)">
          {firstName ? (
            <AnimatedText text={firstName} />
          ) : (
            <AnimatedText text="GUEST" />
          )}
          {lastName && <AnimatedText text={lastName} />}
        </div>

        {/* Role */}
        <span className="text-[1rem] md:text-[2rem] tracking-[0.2em] text-justify">
          a Fullstack Developer who builds from idea to deployment.
        </span>
      </div>
    </div>
  );
};
