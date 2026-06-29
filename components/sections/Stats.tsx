"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 30, suffix: "+", label: "n8n workflows deployed" },
  { value: 4, suffix: "+", label: "Production tools shipped" },
  { value: 50, suffix: "%", label: "Collection rate improvement" },
  { value: 3, suffix: "", label: "Featured production projects" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { n: 0 };
    const anim = gsap.to(obj, {
      n: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: () => {
        el.textContent = Math.floor(obj.n).toString();
      },
    });
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [value]);

  return (
    <span className="text-6xl font-semibold md:text-8xl">
      <span ref={ref}>0</span>
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-line pt-6">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-4 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
