import type { BlockProps } from "@/blocks/types";

export default function Footer414(props: BlockProps) {
  const { theme, heading = "Quill & Signal" } = props;
  const posts = [
    { title: "Async is a skill, not a setting", date: "Apr 19, 2026", category: "Teams" },
    { title: "On keeping a daily note", date: "Apr 07, 2026", category: "Habits" },
    { title: "Tools we actually use", date: "Mar 26, 2026", category: "Stack" },
  ];
  return (
    <footer
      className="w-full bg-slate-900 py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl text-white">{heading}</p>
            <p className="mt-3 text-sm text-slate-400">A quiet corner of the internet for people who work with words and systems.</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="rounded-md border border-slate-700 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-400">RSS</a>
              <a href="#" className="rounded-md border border-slate-700 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-400">Email</a>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Recent dispatches</p>
            <ul className="mt-4 space-y-5">
              {posts.map((p) => (
                <li key={p.title} className="flex items-start gap-4 border-l-2 border-slate-700 pl-4">
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{p.category}</p>
                    <a href="#" className="mt-1 block font-serif text-xl text-white hover:underline">{p.title}</a>
                    <p className="mt-1 text-xs text-slate-400">{p.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-5 text-xs text-slate-500 sm:flex-row">
          <span>© 2026 {heading}. No trackers, ever.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Colophon</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
