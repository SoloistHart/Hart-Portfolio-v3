"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { siteContent } from "@/lib/portfolio-data";

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), {
  ssr: false,
});

const titleLines = ["I help businesses", "integrate AI and"];

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
        <span>Manila · Remote</span>
        <span className="hidden md:block">{siteContent.hero.eyebrow}</span>
        <span>{siteContent.brand.shortRole}</span>
      </div>

      <div className="relative z-10 pointer-events-none">
        <h1
          ref={titleRef}
          className="text-[11vw] font-semibold leading-[0.92] tracking-tight sm:text-[10vw] md:text-[9vw] lg:text-[8vw]"
        >
          {titleLines.map((line) => (
            <span key={line} className="reveal-line">
              <span>{line}</span>
            </span>
          ))}
          <span className="reveal-line">
            <span>
              automate workflows that{" "}
              <span className="text-accent">scale.</span>
            </span>
          </span>
        </h1>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base text-muted">
            {siteContent.hero.description}
          </p>
          <p className="pointer-events-auto font-mono text-xs uppercase tracking-widest text-accent">
            ✦ Dare to touch the lines
          </p>
        </div>
      </div>
    </section>
  );
}
