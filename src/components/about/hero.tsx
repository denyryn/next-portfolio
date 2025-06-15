import gsap from "gsap";
import { useUser } from "@/hooks/useUser";
import { Loading } from "../screens/loading";
import { AnimatedText } from "../animated-text";
import { AnimatedParagraph } from "../animated-pharagraph";

export const HeroSection = () => {
  const { user, isLoading } = useUser();

  if (isLoading || !user) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen flex items-center w-full justify-center text-center">
      <div className=" max-w-2xl mx-auto">
        {/* Set of words */}
        <span className="text-[1rem] md:text-[2rem] tracking-[0.2em]">
          This is an
        </span>

        {/* Section Name */}
        <div className="uppercase text-[6rem] md:text-[10rem] font-bold -space-y-16">
          <AnimatedText text="About "></AnimatedText>
          <AnimatedText text="Me"></AnimatedText>
        </div>

        {/* Set of words */}
        <span className="text-[1rem] md:text-[2rem] tracking-[0.2em]">
          Paaaaaaaage
        </span>
      </div>
    </section>
  );
};
