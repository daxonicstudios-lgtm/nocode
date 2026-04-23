import type { BlockProps } from "@/blocks/types";

export default function Footer415(props: BlockProps) {
  const { theme, heading = "Foundry" } = props;
  const posts = [
    { title: "We rebuilt onboarding from zero", date: "Apr 22, 2026", category: "Product" },
    { title: "How we priced the enterprise tier", date: "Apr 10, 2026", category: "Business" },
  ];
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <a
              href="#"
              key={p.title}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 p-8 text-white"
            >
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                {p.category}
              </span>
              <p className="mt-6 text-2xl font-bold leading-tight group-hover:underline">{p.title}</p>
              <p className="mt-4 text-xs text-white/60">Published {p.date}</p>
            </a>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-gray-200 pt-10 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">Operating systems for modern teams.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Platform</a></li>
              <li><a href="#" className="hover:text-black">Integrations</a></li>
              <li><a href="#" className="hover:text-black">API</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Docs</a></li>
              <li><a href="#" className="hover:text-black">Guides</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Press</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-500">© 2026 {heading} Technologies, Inc.</p>
      </div>
    </footer>
  );
}
