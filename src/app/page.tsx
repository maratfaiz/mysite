import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectFan } from "@/components/ProjectFan";
import { DottedDivider } from "@/components/DottedDivider";
import { AboutSplit } from "@/components/AboutSplit";
import { FeaturedQuote } from "@/components/FeaturedQuote";
import { TagStrip } from "@/components/TagStrip";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-concrete">
      <Nav />
      <Hero />
      <ProjectFan />
      <DottedDivider />
      <AboutSplit />
      <FeaturedQuote />
      <TagStrip />
      <Footer />
    </div>
  );
}
