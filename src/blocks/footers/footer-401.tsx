import type { BlockProps } from "@/blocks/types";

export default function Footer401(props: BlockProps) {
  const { theme, heading = "Meridian", bodyText = "Ideas for modern work." } = props;
  const posts = [
    { title: "Building for the next billion users", date: "Apr 14, 2026", category: "Strategy" },
    { title: "The case for simple tools", date: "Apr 02, 2026", category: "Craft" },
    { title: "How we scaled to 10M requests", date: "Mar 21, 2026", category: "Engineering" },
  ];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Recent posts</p>
            <ul className="mt-4 space-y-4">
              {posts.map((p) => (
                <li key={p.title} className="flex items-start gap-4">
                  <div className="hidden h-14 w-14 flex-shrink-0 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 sm:block" aria-hidden />
                  <div>
                    <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">{p.title}</a>
                    <p className="mt-0.5 text-xs text-gray-500">{p.category} · {p.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {heading}. All rights reserved.</div>
      </div>
    </footer>
  );
}
