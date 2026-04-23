import type { BlockProps } from "@/blocks/types";

export default function Footer406(props: BlockProps) {
  const { theme, heading = "Fieldnote" } = props;
  const posts = [
    { title: "A week with the new editor", date: "Apr 21, 2026" },
    { title: "Notes from our first offsite", date: "Apr 09, 2026" },
    { title: "We hired a historian", date: "Mar 30, 2026" },
  ];
  return (
    <footer
      className="w-full bg-amber-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-4xl italic text-amber-900">{heading}</p>
            <p className="mt-3 text-sm text-amber-800">A small publication about doing careful work with care.</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-3 py-1 text-xs text-amber-900">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> Published weekly
            </div>
          </div>
          <div className="w-full max-w-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Latest issues</p>
            <ol className="mt-4 space-y-4">
              {posts.map((p, i) => (
                <li key={p.title} className="flex items-baseline gap-4 border-b border-amber-200 pb-3">
                  <span className="font-serif text-2xl text-amber-400">0{i + 1}</span>
                  <div className="flex-1">
                    <a href="#" className="font-serif text-lg text-amber-900 hover:underline">{p.title}</a>
                    <p className="text-xs text-amber-700">{p.date}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-amber-200 pt-5 text-xs text-amber-700 sm:flex-row">
          <span>© 2026 {heading} Press</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber-900">Archive</a>
            <a href="#" className="hover:text-amber-900">About</a>
            <a href="#" className="hover:text-amber-900">Submit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
