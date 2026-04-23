import type { BlockProps } from "@/blocks/types";

export default function Footer419(props: BlockProps) {
  const { theme, heading = "Atlas Review" } = props;
  const posts = [
    { title: "Building for the next billion users", date: "Apr 20, 2026", category: "Feature" },
    { title: "The quiet economics of platforms", date: "Apr 08, 2026", category: "Essay" },
    { title: "Interview: a founder in Nairobi", date: "Mar 26, 2026", category: "Q&A" },
    { title: "What we got wrong this quarter", date: "Mar 14, 2026", category: "Retrospective" },
  ];
  return (
    <footer
      className="w-full bg-[#0f1115] py-16 text-gray-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-800 pb-8">
          <p className="font-serif text-4xl text-white">{heading}</p>
          <p className="mt-2 text-sm text-gray-400">A quarterly on markets, technology, and the people behind them.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <a href="#" key={p.title} className="group flex items-start gap-4 border-b border-gray-800 pb-5">
              <div className="hidden h-20 w-28 flex-shrink-0 rounded bg-gradient-to-br from-gray-700 to-gray-900 sm:block" aria-hidden />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">{p.category}</p>
                <p className="mt-2 font-serif text-lg text-white group-hover:underline">{p.title}</p>
                <p className="mt-1 text-xs text-gray-500">{p.date}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading}. Print & digital.</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-white">Subscribe</a>
            <a href="#" className="hover:text-white">Back issues</a>
            <a href="#" className="hover:text-white">Masthead</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
