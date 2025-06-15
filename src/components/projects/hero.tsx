import { AnimatedText } from "../animated-text";

export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="uppercase text-[4rem] md:text-[10rem] font-bold -space-y-10 lg:-space-y-16">
        <AnimatedText text="My " />
        <AnimatedText text="Projects" />
      </div>
    </section>
  );
};
