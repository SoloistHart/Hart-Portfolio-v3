"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-6 md:px-10 transition-all duration-500 safe-top ${
        scrolled || menuOpen
          ? "py-4 backdrop-blur-md bg-background/60"
          : "py-6"
      }`}
    >
      <nav className="flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-widest"
          data-hover
          onClick={closeMenu}
        >
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

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-line px-4 py-2 text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent sm:inline-block"
            data-hover
          >
            Start a project
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-foreground transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-foreground transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-foreground transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-background/95 backdrop-blur-lg transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-8 px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-4xl font-medium transition-colors hover:text-accent"
                onClick={closeMenu}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-block rounded-full border border-line px-6 py-3 text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
              onClick={closeMenu}
            >
              Start a project
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
