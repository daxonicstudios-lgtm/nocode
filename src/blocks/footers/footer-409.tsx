import type { BlockProps } from "@/blocks/types";

export default function Footer409(props: BlockProps) {
  const { theme, heading = "Helix" } = props;
  const posts = [
    { title: "The case for simple tools", date: "Apr 15, 2026", category: "Craft" },
    { title: "Prompting is programming", date: "Apr 03, 2026", category: "AI" },
    { title: "Shipping in public", date: "Mar 25, 2026", category: "Growth" },
  ];
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Keep reading</p>
            <div className="mt-4 space-y-3">
              {posts.map((p) => (
                <a href="#" key={p.title} className="group flex items-center justify-between gap-4 rounded-lg border border-gray-200 p-4 hover:border-gray-900">
                  <div>
                    <span className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium uppercase text-gray-700">{p.category}</span>
                    <p className="mt-2 text-sm font-semibold text-gray-900 group-hover:underline">{p.title}</p>
                  </div>
                  <span className="text-xs text-gray-500">{p.date}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 p-8 text-white">
            <div>
              <p className="text-2xl font-bold">{heading}</p>
              <p className="mt-3 text-sm text-gray-300">Get a short email every Friday with what we published this week.</p>
            </div>
            <form className="mt-6 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-gray-300" />
              <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading} Collective</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Writers</a>
            <a href="#" className="hover:text-gray-900">Archive</a>
            <a href="#" className="hover:text-gray-900">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
