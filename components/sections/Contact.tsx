import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/portfolio-data";

export default function Contact() {
  const [lineOne, lineTwo] = siteContent.contact.title.includes(" and ")
    ? siteContent.contact.title.split(" and ")
  : [siteContent.contact.title, ""];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40"
    >
      <Reveal
        as="p"
        className="mb-8 font-mono text-xs uppercase tracking-widest text-accent"
      >
        ✦ Next move
      </Reveal>
      <Reveal
        as="h2"
        className="text-[12vw] font-semibold leading-[0.95] tracking-tight md:text-[9vw]"
      >
        {lineOne.trim()}
        {lineTwo ? (
          <>
            <br />
            and {lineTwo.trim()}
          </>
        ) : null}
      </Reveal>

      <Reveal
        as="p"
        className="mt-8 max-w-2xl text-base text-muted md:text-lg"
        delay={0.08}
      >
        {siteContent.contact.description}
      </Reveal>

      <div className="mt-16 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
        <a
          href={`mailto:${siteContent.contact.email}`}
          data-hover
          className="text-2xl font-medium underline-offset-4 hover:underline md:text-4xl"
        >
          {siteContent.contact.email}
        </a>
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {siteContent.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              data-hover
              className="hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-2 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {siteContent.brand.name}
        </span>
        <span className="hidden sm:inline">{siteContent.brand.shortRole}</span>
      </div>
    </footer>
  );
}
