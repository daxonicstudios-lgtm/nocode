import type { BlockProps } from "@/blocks/types";

export default function Footer116(props: BlockProps) {
  const {
    theme,
    heading = "Draftline",
    bodyText = "Writing tools for modern teams.",
  } = props;
  const cols = [
    { title: "Product", links: ["Editor", "AI Assist", "Collaboration", "Export"] },
    { title: "Resources", links: ["Guides", "Templates", "Blog"] },
  ];
  return (
    <footer className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:divide-x md:divide-neutral-200">
          <div className="md:pr-8">
            <p className="text-xl font-semibold">{heading}</p>
            <p className="mt-2 text-sm text-neutral-600">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:px-8">
              <p className="text-sm font-semibold text-neutral-900">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
        © 2026 {heading}. Write boldly.
      </div>
    </footer>
  );
}
