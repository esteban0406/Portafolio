import { Hero } from "./components/Hero";
import { Infrastructure } from "./components/Infrastructure";
import { FeaturedProject } from "./components/FeaturedProject";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Infrastructure />
      <FeaturedProject />
    </main>
  );
}
