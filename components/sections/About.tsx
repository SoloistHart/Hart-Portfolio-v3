import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/portfolio-data";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-10 md:py-40">
      <Reveal
        as="p"
        className="mb-12 font-mono text-xs uppercase tracking-widest text-accent"
      >
        ✦ About
      </Reveal>
      <Reveal
        as="h2"
        className="max-w-5xl text-3xl font-light leading-tight md:text-6xl"
      >
        {siteContent.about.summary}
      </Reveal>
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {siteContent.futureModules.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.1}
            className="border-t border-line pt-6"
          >
            <h3 className="mb-3 text-xl font-medium">{item.title}</h3>
            <p className="text-muted">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
