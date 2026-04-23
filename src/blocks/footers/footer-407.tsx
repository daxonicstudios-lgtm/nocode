import type { BlockProps } from "@/blocks/types";

export default function Footer407(props: BlockProps) {
  const { theme, heading = "Cobalt", bodyText = "Dispatches on infrastructure and scale." } = props;
  const posts = [
    { title: "Inside our multi-region migration", date: "Apr 16, 2026", category: "Infra" },
    { title: "Postgres at 100 TB", date: "Apr 04, 2026", category: "Databases" },
    { title: "Incident review: April outage", date: "Mar 29, 2026", category: "SRE" },
    { title: "Zero-downtime schema changes", date: "Mar 17, 2026", category: "Databases" },
  ];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-2xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 max-w-xs text-sm text-gray-600">{bodyText}</p>
            <form className="mt-5 flex w-full max-w-sm gap-2">
              <input type="email" placeholder="you@work.com" className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm" />
              <button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Subscribe</button>
            </form>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Latest from engineering</p>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {posts.map((p) => (
                <li key={p.title} className="rounded-lg border border-gray-200 p-4 hover:border-gray-400">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">{p.category}</p>
                  <a href="#" className="mt-1 block text-sm font-semibold text-gray-900 hover:underline">{p.title}</a>
                  <p className="mt-1 text-xs text-gray-500">{p.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading} Systems</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Status</a>
            <a href="#" className="hover:text-gray-900">Security</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
