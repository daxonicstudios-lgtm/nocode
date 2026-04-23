import type { BlockProps } from "@/blocks/types";

export default function Footer133(props: BlockProps) {
  const {
    theme,
    heading = "Juniper",
    bodyText = "Skincare rooted in botanicals.",
  } = props;
  const cols = [
    { title: "Shop", links: ["Serums", "Cleansers", "Moisturizers", "Bundles"] },
    { title: "Care", links: ["Ingredients", "Routines", "Journal"] },
  ];
  return (
    <footer className="w-full bg-[#faf6f1] py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl italic text-stone-900">{heading}</p>
            <p className="mt-3 text-sm text-stone-600">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-stone-800 hover:text-stone-600">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-stone-300 pt-5 text-xs text-stone-500 md:flex-row md:justify-between">
          <span>© 2026 {heading} Botanicals</span>
          <span>Cruelty-free · Made in small batches</span>
        </div>
      </div>
    </footer>
  );
}
