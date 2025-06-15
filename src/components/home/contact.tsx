import { useUser } from "@/hooks/useUser";
import { Loading } from "../screens/loading";

export const ContactSection = () => {
  const { user, isLoading } = useUser();

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="space-y-6">
        <h2 className="text-[7rem] text-center font-bold">
          Social Media I Yapped In
        </h2>
        <ul className="flex items-center *:size-36 space-x-12 *:bg-white *:p-8 *:rounded-full justify-center">
          {user &&
            user.contacts &&
            user?.contacts.map((media) => (
              <li key={media.label}>
                <a href={media.href}>
                  <img src={media.icon} alt={media.label} />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
