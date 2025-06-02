import logo from "@/public/images/logo.png";
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col text-center">
      <div className="text-[1.5rem] md:text-[2rem] animate-pulse dark:invert size-42">
        <Image src={logo} alt="Loading.." />
      </div>
    </div>
  );
};
