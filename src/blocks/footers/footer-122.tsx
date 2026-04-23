import type { BlockProps } from "@/blocks/types";

export default function Footer122(props: BlockProps) {
  const {
    theme,
    heading = "Linework",
    bodyText = "Freelance contracts done right.",
  } = props;
  const cols = [
    { title: "Product", links: ["Contracts", "Invoices", "Proposals"] },
    { title: "Learn", links: ["Guide", "Templates", "Support"] },
  ];
  return (
    <footer className="w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="rounded-xl bg-neutral-50 p-6">
            <p className="text-lg font-bold">{heading}</p>
            <p className="mt-2 text-sm text-neutral-600">{bodyText}</p>
            <a href="#" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700">Start free →</a>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="pt-2">
              <p className="text-sm font-semibold">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading}. Made for freelancers.</p>
      </div>
    </footer>
  );
}
