import type { BlockProps } from "@/blocks/types";

export default function Footer417(props: BlockProps) {
  const { theme, heading = "Linen", bodyText = "Design writing, twice a month." } = props;
  const posts = [
    { title: "Interfaces that disappear", date: "Apr 18, 2026", author: "Elena Mori" },
    { title: "On rhythm in layout", date: "Apr 06, 2026", author: "Jamal Rhee" },
    { title: "Motion as meaning", date: "Mar 24, 2026", author: "Sofía Leal" },
  ];
  return (
    <footer
      className="w-full bg-[#f6f3ee] py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-serif text-5xl italic text-stone-900">{heading}</p>
          <p className="mt-3 max-w-sm text-sm text-stone-600">{bodyText}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <a
              href="#"
              key={p.title}
              className="group flex flex-col items-center border-t border-stone-300 pt-6 text-center"
            >
              <p className="font-serif text-xs uppercase tracking-[0.3em] text-stone-500">{p.author}</p>
              <p className="mt-3 font-serif text-xl text-stone-900 group-hover:underline">{p.title}</p>
              <p className="mt-2 text-xs text-stone-500">{p.date}</p>
            </a>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-stone-300 pt-6 text-xs text-stone-500 sm:flex-row">
          <span>© 2026 {heading} Studio</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-900">Journal</a>
            <a href="#" className="hover:text-stone-900">Work</a>
            <a href="#" className="hover:text-stone-900">Say hello</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
