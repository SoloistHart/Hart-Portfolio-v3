const items = [
  "Strategy",
  "Design",
  "Development",
  "Motion",
  "Branding",
  "WebGL",
  "3D",
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
                className="flex items-center gap-8 px-8 text-3xl font-medium md:text-5xl"
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
