import type { BlockProps } from "@/blocks/types";

export default function Footer418(props: BlockProps) {
  const { theme, heading = "Hartwell" } = props;
  const posts = [
    { title: "Our 2026 product principles", date: "Apr 21, 2026", category: "Inside" },
    { title: "What open source taught us", date: "Apr 09, 2026", category: "Culture" },
    { title: "A short guide to saying no", date: "Mar 28, 2026", category: "Teams" },
  ];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-lg font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-500">Tools for measured teams.</p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-black">Overview</a></li>
              <li><a href="#" className="hover:text-black">Pricing</a></li>
              <li><a href="#" className="hover:text-black">Enterprise</a></li>
              <li><a href="#" className="hover:text-black">Changelog</a></li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Latest from the blog</p>
            <ul className="mt-3 divide-y divide-gray-100 border-y border-gray-100">
              {posts.map((p) => (
                <li key={p.title} className="py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <a href="#" className="text-sm font-medium text-gray-900 hover:underline">{p.title}</a>
                    <span className="flex-shrink-0 text-xs text-gray-500">{p.date}</span>
                  </div>
                  <span className="mt-1 inline-block text-[11px] font-medium uppercase tracking-wide text-gray-500">{p.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading} & Co.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
