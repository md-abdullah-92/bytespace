import { Footer } from "@/components/layout/Footer";
import { CourseCatalog } from "@/components/sections/CourseCatalog";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <CourseCatalog />
      <LearningPaths />
      <GrowthSection />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
}
