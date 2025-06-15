import { AnimatedParagraph } from "../animated-pharagraph";
import { useUser } from "@/hooks/useUser";

export const TechSection = () => {
  const { user } = useUser();

  const techs = user?.techs ?? [];

  return (
    <section className="min-h-screen px-4 py-20">
      <AnimatedParagraph className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-center">
        Huff. That was a long one. <br className="hidden sm:inline" />
        Anyway, here are the techs I’ve enjoyed working with
      </AnimatedParagraph>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-12 max-w-5xl mx-auto">
        {techs.length > 0 ? (
          techs.map((tech, index) => (
            <AnimatedParagraph key={index}>
              <div className="flex flex-col items-center justify-center gap-3 p-4 bg-white dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors rounded-lg shadow-md">
                <img
                  src={tech?.icon ?? "/fallback-icon.svg"}
                  alt={tech?.name ?? "Tech"}
                  className="w-14 h-14 object-contain"
                />
                <p className="text-sm font-medium text-center text-black dark:text-white">
                  {tech?.name ?? "Unknown"}
                </p>
              </div>
            </AnimatedParagraph>
          ))
        ) : (
          <AnimatedParagraph className="col-span-full text-center text-lg text-gray-500">
            No technologies found.
          </AnimatedParagraph>
        )}
      </div>
    </section>
  );
};
