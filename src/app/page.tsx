import HeroSection from "@/components/sections/HeroSection";
import ClientStrip from "@/components/sections/ClientStrip";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="landing-page">
      <HeroSection />
      <ClientStrip />
      <ProjectsSection />
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
