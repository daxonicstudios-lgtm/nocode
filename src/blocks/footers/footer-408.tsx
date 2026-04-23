import type { BlockProps } from "@/blocks/types";

export default function Footer408(props: BlockProps) {
  const { theme, heading = "Ocello" } = props;
  const posts = [
    { title: "Building for the next billion users", date: "Apr 14, 2026", author: "Ada Nwosu" },
    { title: "Designing for spotty connectivity", date: "Apr 02, 2026", author: "Rohan Verma" },
    { title: "How we scaled to 10M requests", date: "Mar 21, 2026", author: "Juno Park" },
  ];
  return (
    <footer
      className="w-full bg-black py-16 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-16 bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Recent essays</p>
        <ul className="mt-6 divide-y divide-neutral-900 border-y border-neutral-900">
          {posts.map((p) => (
            <li key={p.title}>
              <a href="#" className="group flex flex-col gap-1 py-5 transition sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xl font-semibold tracking-tight group-hover:text-fuchsia-300">{p.title}</span>
                <span className="text-xs text-neutral-500">{p.author} · {p.date}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <p className="text-2xl font-semibold">{heading}</p>
            <p className="mt-2 text-sm text-neutral-400">Calm software, thoughtful writing.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white">Writing</a></li>
              <li><a href="#" className="hover:text-white">Work</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Social</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white">RSS</a></li>
              <li><a href="#" className="hover:text-white">Mastodon</a></li>
              <li><a href="#" className="hover:text-white">Email</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-neutral-600">© 2026 {heading}. Quietly maintained.</p>
      </div>
    </footer>
  );
}
