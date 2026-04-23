import type { BlockProps } from "@/blocks/types";

export default function Footer416(props: BlockProps) {
  const { theme, heading = "Brackets" } = props;
  const posts = [
    { title: "A type-safe config is a happy config", date: "Apr 16, 2026", category: "TypeScript" },
    { title: "Patterns for long-running workflows", date: "Apr 03, 2026", category: "Backend" },
    { title: "Why we wrote our own edge cache", date: "Mar 19, 2026", category: "Infra" },
  ];
  return (
    <footer
      className="w-full bg-zinc-950 py-14 font-mono text-zinc-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold text-white">$ {heading.toLowerCase()} --help</p>
            <p className="mt-3 text-sm text-zinc-500"># a dev blog by builders, for builders</p>
            <pre className="mt-5 overflow-x-auto rounded-md border border-zinc-800 bg-black p-3 text-xs text-emerald-400">{`$ curl -sSL https://${heading.toLowerCase()}.dev/rss`}</pre>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-wider text-zinc-500">// recent posts</p>
            <ul className="mt-4 space-y-3">
              {posts.map((p) => (
                <li key={p.title} className="rounded border border-zinc-800 bg-zinc-900/50 px-4 py-3">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400">{p.category}</span>
                  <a href="#" className="mt-1 block text-sm text-white hover:underline">{p.title}</a>
                  <p className="mt-1 text-[11px] text-zinc-500">// {p.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-zinc-800 pt-5 text-xs text-zinc-500 sm:flex-row">
          <span>/* © 2026 {heading} */</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">github</a>
            <a href="#" className="hover:text-white">rss</a>
            <a href="#" className="hover:text-white">sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
