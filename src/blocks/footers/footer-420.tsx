import type { BlockProps } from "@/blocks/types";

export default function Footer420(props: BlockProps) {
  const { theme, heading = "Ridgepoint", bodyText = "Climbing technique, gear notes, and trip reports." } = props;
  const posts = [
    { title: "A packing list that actually works", date: "Apr 17, 2026", category: "Gear" },
    { title: "Three days in the Drakensberg", date: "Apr 05, 2026", category: "Trip" },
    { title: "Why we keep going back to granite", date: "Mar 24, 2026", category: "Essay" },
  ];
  return (
    <footer
      className="w-full bg-teal-900 py-14 text-teal-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-3xl font-bold">{heading}</p>
            <p className="mt-2 max-w-xs text-sm text-teal-200">{bodyText}</p>
            <form className="mt-6">
              <label className="text-xs uppercase tracking-widest text-teal-300">Join the trail list</label>
              <div className="mt-2 flex gap-2">
                <input type="email" placeholder="you@domain.com" className="flex-1 rounded-md border border-teal-700 bg-teal-950/50 px-3 py-2 text-sm placeholder:text-teal-400" />
                <button className="rounded-md bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-900">Join</button>
              </div>
            </form>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">Recent trip reports</p>
            <ol className="mt-4 space-y-3">
              {posts.map((p, i) => (
                <li key={p.title} className="flex items-center gap-4 rounded-md bg-teal-950/40 p-3">
                  <span className="font-mono text-lg text-teal-300">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <a href="#" className="text-sm font-semibold text-white hover:underline">{p.title}</a>
                    <p className="text-xs text-teal-300">{p.category} · {p.date}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-teal-800 pt-5 text-xs text-teal-300 sm:flex-row">
          <span>© 2026 {heading} Outfitters</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Shop</a>
            <a href="#" className="hover:text-white">Guides</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
