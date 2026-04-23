import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Footer405(props: BlockProps) {
  const { theme, heading = "Lumen Labs", bodyText = "Research notes from our applied AI team." } = props;
  const posts = [
    { title: "Why small models are winning", date: "Apr 19, 2026", category: "Research" },
    { title: "Evaluating agents in the wild", date: "Apr 06, 2026", category: "Evals" },
    { title: "A brief history of retrieval", date: "Mar 24, 2026", category: "Primer" },
  ];
  return (
    <footer
      className="w-full bg-gradient-to-b from-indigo-950 to-black py-16 text-indigo-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-indigo-300">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-medium uppercase tracking-[0.25em]">From the lab</span>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a
              href="#"
              key={p.title}
              className="group rounded-xl border border-indigo-900/60 bg-indigo-950/40 p-5 backdrop-blur transition hover:border-indigo-500"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400">{p.category}</p>
              <p className="mt-3 text-base font-semibold leading-snug text-white group-hover:underline">{p.title}</p>
              <p className="mt-3 text-xs text-indigo-400">{p.date}</p>
            </a>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-indigo-900/60 pt-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold">{heading}</p>
            <p className="mt-1 text-sm text-indigo-300">{bodyText}</p>
          </div>
          <nav className="flex gap-5 text-sm text-indigo-200">
            <a href="#" className="hover:text-white">Papers</a>
            <a href="#" className="hover:text-white">API</a>
            <a href="#" className="hover:text-white">Careers</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-indigo-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
