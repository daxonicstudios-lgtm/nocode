import type { BlockProps } from "@/blocks/types";

export default function Footer402(props: BlockProps) {
  const { theme, heading = "Northwind", bodyText = "Writing about product, design, and the craft of building." } = props;
  const posts = [
    { title: "Design debt is real debt", date: "Apr 18, 2026", author: "Lena Park" },
    { title: "Why we killed our roadmap", date: "Apr 05, 2026", author: "Samir Ibe" },
    { title: "A taxonomy of product bugs", date: "Mar 28, 2026", author: "Mira Okonkwo" },
    { title: "Interfaces that disappear", date: "Mar 14, 2026", author: "Theo Lang" },
  ];
  return (
    <footer
      className="w-full bg-neutral-950 py-16 text-neutral-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-3xl tracking-tight text-white">{heading}</p>
            <p className="mt-3 max-w-xs text-sm text-neutral-400">{bodyText}</p>
            <a href="#" className="mt-6 inline-block border-b border-neutral-700 pb-1 text-sm text-neutral-300 hover:text-white">
              Subscribe to our journal →
            </a>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">From the journal</p>
            <ul className="mt-6 divide-y divide-neutral-800 border-y border-neutral-800">
              {posts.map((p) => (
                <li key={p.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <a href="#" className="font-serif text-lg text-white hover:underline">{p.title}</a>
                  <span className="text-xs text-neutral-500">{p.author} · {p.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row">
          <span>© 2026 {heading} Studio</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
