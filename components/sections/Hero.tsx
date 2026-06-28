"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), {
  ssr: false,
});

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const lines = el.querySelectorAll(".reveal-line > span");
    gsap.fromTo(
      lines,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden px-6 pb-12 pt-28 safe-top md:px-10 md:pt-32"
    >
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      <div className="relative z-10 flex flex-wrap items-start justify-between gap-y-2 font-mono text-[10px] uppercase tracking-widest text-muted sm:text-xs">
        <span>Est. 2012</span>
        <span className="hidden md:block">Inspire · Innovate · Impact</span>
        <span>Independent Studio</span>
      </div>

      <div className="relative z-10 pointer-events-none">
        <h1
          ref={titleRef}
          className="text-[13vw] font-semibold leading-[0.92] tracking-tight sm:text-[12vw] md:text-[11vw]"
        >
          <span className="reveal-line">
            <span>Designed to</span>
          </span>
          <span className="reveal-line">
            <span>
              mean <span className="text-accent">something.</span>
            </span>
          </span>
        </h1>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base text-muted">
            Websites, products, brands, and systems built for clarity, scale
            and impact.
          </p>
          <p className="pointer-events-auto font-mono text-xs uppercase tracking-widest text-accent">
            ✦ Dare to touch the lines
          </p>
        </div>
      </div>
    </section>
  );
}
