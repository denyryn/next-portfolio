"use client";

import TiltedCard from "../tilted-card";
import { useUser } from "@/hooks/useUser";

type Link = {
  href: string;
  label: string;
  icon: string;
};

const Link = ({ href, label, icon }: Link) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-fit hover:space-x-2 font-semibold text-base bg-gray-100 text-gray-900 rounded-full p-2 flex items-center group transition-all duration-300 ease-in-out hover:shadow-md"
    >
      <img
        className="h-full transition-transform duration-300 group-hover:scale-90"
        src={icon}
        alt={label}
      />
      <span className="overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out w-0 opacity-0 group-hover:w-[4.5rem] group-hover:opacity-100 group-hover:ml-2">
        {label}
      </span>
    </a>
  );
};

export const ContactSection = () => {
  const { user } = useUser();
  return (
    <section className="min-h-screen flex items-center justify-center  px-4">
      <div className="relative mx-auto flex flex-col lg:flex-row items-center justify-between max-w-5xl w-full gap-12 py-16">
        {/* Tilted Card */}
        <div className="relative">
          <TiltedCard
            imageSrc={user?.portrait}
            altText="Deny's Headshot"
            containerHeight={500}
            containerWidth={"100%"}
            imageHeight={500}
            imageWidth={400}
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={true}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left max-w-md space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Aand, it's ended. Let’s Talk
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            Whether it's about code, an idea, or just a chat. I'm here to
            listen. Reach me out and let's make something remarkable, together.
          </p>
          <div className="pt-4 flex flex-wrap gap-4 items-center justify-center lg:justify-start transition-all duration-300 ease-in-out">
            {user?.contacts &&
              user?.contacts.map((link) => <Link key={link.href} {...link} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
