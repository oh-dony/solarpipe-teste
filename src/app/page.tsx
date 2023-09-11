// Components
import { About } from "@/app/components/About";
import { Features } from "@/app/components/Features";
import { Hero } from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Features />
    </div>
  );
}
