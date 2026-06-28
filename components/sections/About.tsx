import Reveal from "@/components/Reveal";

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
        An independent digital studio crafting meaningful brand experiences
        through <span className="text-muted">strategy</span>,{" "}
        <span className="text-muted">design</span>, and{" "}
        <span className="text-muted">technology</span>.
      </Reveal>
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {[
          {
            t: "Clarity first",
            d: "We design for longevity — craft always, built to scale.",
          },
          {
            t: "Human technology",
            d: "Digital products that are intuitive, purposeful and meaningful.",
          },
          {
            t: "Measured execution",
            d: "Focused vision turned into outcomes from idea to impact.",
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1} className="border-t border-line pt-6">
            <h3 className="mb-3 text-xl font-medium">{c.t}</h3>
            <p className="text-muted">{c.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
