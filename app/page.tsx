import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Stats />
      <Contact />
    </main>
  );
}
