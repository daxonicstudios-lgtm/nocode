import type { BlockProps } from "@/blocks/types";

export default function Footer134(props: BlockProps) {
  const {
    theme,
    heading = "Loomis",
    bodyText = "Learning platform for developers.",
  } = props;
  const cols = [
    { title: "Learn", links: ["Courses", "Paths", "Projects", "Certifications"] },
    { title: "Company", links: ["About", "Instructors", "Contact"] },
  ];
  return (
    <footer className="w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <p className="text-lg font-bold">{heading}</p>
            <p className="mt-1.5 text-sm text-neutral-600">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="rounded-2xl border border-neutral-200 p-6">
              <p className="text-sm font-semibold">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-neutral-500">© 2026 {heading} Learning</p>
      </div>
    </footer>
  );
}
