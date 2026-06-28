"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-6 md:px-10 transition-all duration-500 ${
        scrolled ? "py-4 backdrop-blur-md bg-background/60" : "py-6"
      }`}
    >
      <nav className="flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-widest" data-hover>
          HART<span className="text-accent">®</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
                data-hover
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          data-hover
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
