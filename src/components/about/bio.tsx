import { UserProvider } from "@/contexts/UserContext";
import { AnimatedParagraph } from "../animated-pharagraph";
import { useUser } from "@/hooks/useUser";

const HighlightText = ({ text }: { text: string }) => {
  return (
    <span className="font-medium decoration-wavy text-blue-600 dark:text-blue-400 decoration-foreground underline">
      {text}
    </span>
  );
};

const Bio = () => {
  const { user } = useUser();

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center text-xl md:text-2xl leading-relaxed space-y-2 md:space-y-4 max-w-3xl text-gray-900 dark:text-gray-300">
        <AnimatedParagraph>
          Hi, I'm <HighlightText text="Deny Rianto" />, a{" "}
          <HighlightText text="Fullstack Developer" /> with hands-on experience
          across every stage of the software lifecycle, from initial
          brainstorming to final deployment.
        </AnimatedParagraph>
        <AnimatedParagraph>
          Currently, I’m focused on building a digital service with my partner,
          where I apply the best practices and conventions I've gathered
          throughout my journey. My goal isn’t just to build something that
          works today — but to{" "}
          <HighlightText text="build systems that are scalable, maintainable," />{" "}
          and don’t become a burden tomorrow.
        </AnimatedParagraph>
        <AnimatedParagraph>
          At the core of my work is a simple philosophy:
          <br />
          <HighlightText text="“Clear, scalable, simple, forward. Every action must ease tomorrow.”" />
        </AnimatedParagraph>
        <AnimatedParagraph>
          I believe great software should be clear, purposeful, and painless. It
          not just for users, but for the developers behind it.
        </AnimatedParagraph>
      </div>
    </section>
  );
};

export const BioSection = () => {
  return (
    <UserProvider>
      <Bio />
    </UserProvider>
  );
};
