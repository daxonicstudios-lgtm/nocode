import type { BlockProps } from "@/blocks/types";

export default function Footer065(props: BlockProps) {
  const {
    theme,
    heading = "Pique",
    bodyText = "Boutique travel, thoughtfully arranged.",
    navLinks = [
      { label: "Destinations", url: "#" },
      { label: "Itineraries", url: "#" },
      { label: "Journal", url: "#" },
      { label: "Enquire", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-[#1a1612] py-16 text-[#d4c8b8]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 md:grid-cols-[2fr_1fr] sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-5xl tracking-tight text-[#ede4d6]">{heading}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">{bodyText}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#8a7d6d]">
            +27 21 000 0000 · hello@{heading.toLowerCase()}.travel
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm uppercase tracking-widest hover:text-[#ede4d6]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
