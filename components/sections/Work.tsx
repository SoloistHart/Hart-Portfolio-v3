"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";
import { projects } from "@/lib/portfolio-data";

export default function Work() {
  const [active, setActive] = useState<number | null>(null);
  const isTouch = useIsTouchDevice();

  return (
    <section id="work" className="px-6 py-28 md:px-10 md:py-40">
      <Reveal
        as="p"
        className="mb-12 font-mono text-xs uppercase tracking-widest text-accent"
      >
        ✦ Selected Work
      </Reveal>

      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <a
              href="#contact"
              data-hover
              onMouseEnter={() => !isTouch && setActive(i)}
              onMouseLeave={() => !isTouch && setActive(null)}
              onTouchStart={() => setActive(i)}
              onTouchEnd={() => setActive(null)}
              className="group flex flex-col gap-2 border-b border-line py-6 transition-colors active:text-accent sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:py-10"
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="font-mono text-xs text-muted">
                  0{i + 1}
                </span>
                <span
                  className={`text-2xl font-medium transition-all duration-300 sm:text-3xl md:text-6xl ${
                    active === i
                      ? "translate-x-2 text-accent sm:translate-x-3"
                      : "text-foreground"
                  }`}
                >
                  {p.title}
                </span>
              </div>
              <div className="flex items-center gap-4 pl-8 text-left sm:gap-6 sm:pl-0 sm:text-right">
                <span className="text-sm text-muted sm:block">{p.category}</span>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
