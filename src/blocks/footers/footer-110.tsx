import type { BlockProps } from "@/blocks/types";

export default function Footer110(props: BlockProps) {
  const {
    theme,
    heading = "Clearspace",
    bodyText = "Focus tools for deep work.",
  } = props;
  const cols = [
    { title: "App", links: ["Download", "Features", "Pricing"] },
    { title: "More", links: ["Blog", "Press Kit", "Contact"] },
  ];
  return (
    <footer className="w-full bg-white py-20" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-3xl font-bold tracking-tight">{heading}</p>
        <p className="mt-3 text-sm text-neutral-600">{bodyText}</p>
        <div className="mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Made in</p>
            <p className="mt-2 text-sm text-neutral-800">Cape Town, South Africa</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{c.title}</p>
              <ul className="mt-2 space-y-1">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-800 hover:text-neutral-500">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-neutral-400">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
