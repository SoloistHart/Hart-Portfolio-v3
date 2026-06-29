import { siteContent } from "@/lib/portfolio-data";

const items = [
  ...siteContent.hero.chips,
  ...siteContent.about.skills.flatMap((group) => group.items.slice(0, 2)),
];

export default function Marquee() {
  return (
    <div className="border-y border-line py-6 overflow-hidden">
      <div className="marquee-track">
        {[...Array(2)].map((_, dup) => (
          <div key={dup} className="flex shrink-0">
            {items.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-6 px-6 text-2xl font-medium sm:gap-8 sm:px-8 sm:text-3xl md:text-5xl"
              >
                {item}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
