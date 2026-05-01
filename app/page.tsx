import { Hero } from "./components/Hero";
import { Infrastructure } from "./components/Infrastructure";
import { FeaturedProject } from "./components/FeaturedProject";
import { FeaturedProjectJobAI } from "./components/FeaturedProjectJobAI";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <section id="projects">
        <Infrastructure />
        <FeaturedProject />
        <FeaturedProjectJobAI />
      </section>
      <Contact />
    </main>
  );
}
