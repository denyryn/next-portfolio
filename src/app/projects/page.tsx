import { HeroSection } from "@/components/projects/hero";
import { ProjectListSection } from "@/components/projects/list";
import { ContactSection } from "@/components/global/contact";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ProjectListSection />
      <ContactSection />
    </div>
  );
}
