import type { BlockProps } from "@/blocks/types";

export default function Footer403(props: BlockProps) {
  const { theme, heading = "Parallel" } = props;
  const posts = [
    { title: "State machines for real humans", date: "Apr 20, 2026", category: "Engineering" },
    { title: "The quiet power of defaults", date: "Apr 11, 2026", category: "Design" },
    { title: "We moved off Kubernetes", date: "Apr 03, 2026", category: "Infra" },
  ];
  return (
    <footer
      className="w-full bg-slate-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Latest posts</p>
            <a href="#" className="text-xs font-medium text-slate-900 hover:underline">View all →</a>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <a href="#" key={p.title} className="group block rounded-xl border border-slate-200 p-5 transition hover:border-slate-400">
                <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-600">{p.category}</span>
                <p className="mt-3 text-base font-semibold leading-snug text-slate-900 group-hover:underline">{p.title}</p>
                <p className="mt-2 text-xs text-slate-500">{p.date}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-lg font-bold text-slate-900">{heading}</p>
          <nav className="flex flex-wrap gap-5 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Product</a>
            <a href="#" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">Blog</a>
            <a href="#" className="hover:text-slate-900">Careers</a>
          </nav>
          <p className="text-xs text-slate-500">© 2026 {heading}, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
