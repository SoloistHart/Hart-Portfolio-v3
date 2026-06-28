import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40"
    >
      <Reveal
        as="p"
        className="mb-8 font-mono text-xs uppercase tracking-widest text-accent"
      >
        ✦ Start a project
      </Reveal>
      <Reveal
        as="h2"
        className="text-[12vw] font-semibold leading-[0.95] tracking-tight md:text-[9vw]"
      >
        Let&apos;s build
        <br />
        something <span className="text-accent">lasting.</span>
      </Reveal>

      <div className="mt-16 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
        <a
          href="mailto:hello@hart.studio"
          data-hover
          className="text-2xl font-medium underline-offset-4 hover:underline md:text-4xl"
        >
          hello@hart.studio
        </a>
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          <a href="#" data-hover className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="#" data-hover className="hover:text-foreground">
            Instagram
          </a>
          <a href="#" data-hover className="hover:text-foreground">
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-20 flex items-center justify-between font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} HART®</span>
        <span>Inspire · Innovate · Impact</span>
      </div>
    </footer>
  );
}
