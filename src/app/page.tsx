import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center opacity-0 font-mono text-[10px] uppercase tracking-widest">Loading Sequence...</div>,
  ssr: true,
});

const SkillsSection = dynamic(() => import("@/components/SkillsSection"), {
  ssr: true,
});

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: true,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="relative overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <div className="noise" />
      <Navbar />
      <div className="space-y-0">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

