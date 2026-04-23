import type { BlockProps } from "@/blocks/types";

export default function Footer411(props: BlockProps) {
  const { theme, heading = "Arcwave", bodyText = "Deep dives on product, shipped weekly." } = props;
  const posts = [
    { title: "How we cut onboarding by 80%", date: "Apr 12, 2026" },
    { title: "The anatomy of a great changelog", date: "Apr 01, 2026" },
    { title: "Retention is a design problem", date: "Mar 20, 2026" },
  ];
  return (
    <footer
      className="w-full bg-emerald-950 py-14 text-emerald-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-3xl font-bold">{heading}</p>
            <p className="mt-2 max-w-md text-sm text-emerald-200">{bodyText}</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-emerald-900/40 px-4 py-2 text-xs text-emerald-100 hover:bg-emerald-900">
            All posts →
          </a>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map((p, i) => (
            <li key={p.title}>
              <a href="#" className="flex h-full flex-col justify-between rounded-lg bg-emerald-900/40 p-5 ring-1 ring-emerald-800 transition hover:ring-emerald-400">
                <span className="text-xs text-emerald-400">#{i + 1}</span>
                <p className="mt-6 text-base font-semibold leading-snug text-white">{p.title}</p>
                <p className="mt-4 text-xs text-emerald-300">{p.date}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-emerald-800 pt-6 text-xs text-emerald-400 sm:flex-row">
          <span>© 2026 {heading} Labs</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
