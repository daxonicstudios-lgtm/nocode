import type { BlockProps } from "@/blocks/types";

export default function Footer410(props: BlockProps) {
  const { theme, heading = "Yonder" } = props;
  const posts = [
    { title: "Travel notes: Dakar", date: "Apr 17, 2026", category: "Field" },
    { title: "A year in the van", date: "Apr 05, 2026", category: "Essay" },
    { title: "Why we left the city", date: "Mar 23, 2026", category: "Life" },
  ];
  return (
    <footer
      className="w-full bg-stone-100 py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-serif text-4xl text-stone-900">{heading}</p>
            <p className="mt-3 text-sm text-stone-600">A slow magazine for people going somewhere.</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Recently published</p>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {posts.map((p) => (
                <a href="#" key={p.title} className="group block">
                  <div className="aspect-[4/3] rounded-sm bg-gradient-to-br from-stone-300 to-stone-400" aria-hidden />
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-stone-500">{p.category}</p>
                  <p className="mt-1 font-serif text-base text-stone-900 group-hover:underline">{p.title}</p>
                  <p className="mt-1 text-xs text-stone-500">{p.date}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-stone-300 pt-5 text-xs text-stone-500 sm:flex-row">
          <span>© 2026 {heading} Magazine</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-stone-900">Issues</a>
            <a href="#" className="hover:text-stone-900">Shop</a>
            <a href="#" className="hover:text-stone-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
