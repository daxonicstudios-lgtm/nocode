import type { BlockProps } from "@/blocks/types";

export default function Footer147(props: BlockProps) {
  const {
    theme,
    heading = "Compass",
    bodyText = "Career coaching for the curious.",
  } = props;
  const cols = [
    { title: "Services", links: ["1:1 Coaching", "Workshops", "Assessments"] },
    { title: "Resources", links: ["Blog", "Tools", "Newsletter"] },
    { title: "Contact", links: ["Book a Call", "FAQ", "Email"] },
  ];
  return (
    <footer className="w-full bg-teal-50 py-14 text-teal-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-teal-900/80">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-teal-800">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-teal-900/80 hover:text-teal-950">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-teal-900/60">© 2026 {heading} Coaching</p>
      </div>
    </footer>
  );
}
