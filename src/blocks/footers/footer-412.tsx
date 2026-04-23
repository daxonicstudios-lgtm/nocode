import type { BlockProps } from "@/blocks/types";

export default function Footer412(props: BlockProps) {
  const { theme, heading = "Pastiche" } = props;
  const posts = [
    { title: "In praise of short documents", date: "Apr 20, 2026", category: "Notes" },
    { title: "The meeting that never was", date: "Apr 08, 2026", category: "Work" },
    { title: "A better way to kick off projects", date: "Mar 27, 2026", category: "Process" },
    { title: "On taste, for teams", date: "Mar 15, 2026", category: "Leadership" },
    { title: "Writing is the work", date: "Mar 02, 2026", category: "Craft" },
  ];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-gray-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">A reader-supported publication about work, clarity, and small companies.</p>
            <nav className="mt-6 flex flex-col gap-2 text-sm text-gray-700">
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#" className="hover:text-gray-900">Archive</a>
              <a href="#" className="hover:text-gray-900">Subscribe</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </nav>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Latest</p>
            <ul className="mt-4 divide-y divide-gray-200">
              {posts.map((p) => (
                <li key={p.title} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <a href="#" className="truncate text-sm font-semibold text-gray-900 hover:underline">{p.title}</a>
                    <p className="text-xs text-gray-500">{p.category}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs text-gray-500">{p.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-500">© 2026 {heading}. Built on a laptop.</div>
      </div>
    </footer>
  );
}
