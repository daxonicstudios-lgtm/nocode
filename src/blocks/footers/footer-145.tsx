import type { BlockProps } from "@/blocks/types";

export default function Footer145(props: BlockProps) {
  const {
    theme,
    heading = "Overline",
    bodyText = "News built for readers, not advertisers.",
  } = props;
  const cols = [
    { title: "Sections", links: ["Politics", "Business", "Culture", "Opinion"] },
    { title: "Subscribe", links: ["Digital", "Print", "Gift", "Student"] },
  ];
  return (
    <footer className="w-full bg-[#111] py-16 text-neutral-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-5xl text-white">{heading}</p>
            <p className="mt-3 text-sm italic text-neutral-400">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="border-b border-neutral-700 pb-2 font-serif text-lg text-white">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-neutral-500">© 2026 {heading} Media · Since 1892</p>
      </div>
    </footer>
  );
}
