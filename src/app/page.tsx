import { About } from "./components/About";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Features />
    </div>
  );
}
