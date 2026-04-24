import type { BlockProps } from "@/blocks/types";

export default function Footer113(props: BlockProps) {
  const {
    theme,
    heading = "Lantern",
    bodyText = "Journaling for clearer thinking.",
  } = props;
  const cols = [
    { title: "Explore", links: ["Prompts", "Themes", "Community"] },
    { title: "Account", links: ["Sign in", "Sign up", "Billing"] },
    { title: "Company", links: ["About", "Contact", "Press"] },
  ];
  return (
    <footer className="w-full bg-amber-50 py-14 text-amber-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <p className="text-2xl font-semibold">{heading}</p>
          <p className="mt-1 text-sm text-amber-900/70">{bodyText}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title} className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:underline">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-amber-900/60">© 2026 {heading} Journal</p>
      </div>
    </footer>
  );
}
