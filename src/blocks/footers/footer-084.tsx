import type { BlockProps } from "@/blocks/types";

export default function Footer084(props: BlockProps) {
  const {
    theme,
    heading = "Dune",
    bodyText = "Desert-inspired hospitality brands.",
    navLinks = [
      { label: "Stays", url: "#" },
      { label: "Experiences", url: "#" },
      { label: "Gift", url: "#" },
      { label: "Reserve", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-[#efe6d5] py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-6xl font-thin tracking-tight text-[#5a4428]">{heading}</p>
          <p className="mt-4 max-w-sm text-sm text-[#7a6247]">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-4 md:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.url}
                className="font-serif text-2xl italic text-[#5a4428] hover:text-[#2a1f10]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-5xl px-4 text-xs text-[#7a6247] sm:px-6 lg:px-8">
        © 2026 — {heading} Hospitality Group
      </p>
    </footer>
  );
}
