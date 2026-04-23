import type { BlockProps } from "@/blocks/types";

export default function Footer413(props: BlockProps) {
  const { theme, heading = "Verso", bodyText = "Stories about starting up in emerging markets." } = props;
  const posts = [
    { title: "Fintech's quiet revolution in Lagos", date: "Apr 18, 2026" },
    { title: "Logistics, recoded", date: "Apr 04, 2026" },
    { title: "Why agritech needs boring tools", date: "Mar 22, 2026" },
  ];
  return (
    <footer
      className="w-full bg-white py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-white to-sky-50 p-8 ring-1 ring-gray-200 md:p-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-600">The journal</p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <a href="#" key={p.title} className="group block">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-rose-200 via-orange-100 to-sky-200" aria-hidden />
                <p className="mt-3 text-base font-semibold text-gray-900 group-hover:underline">{p.title}</p>
                <p className="mt-1 text-xs text-gray-500">{p.date}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-1 text-sm text-gray-500">{bodyText}</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Features</a>
            <a href="#" className="hover:text-black">Interviews</a>
            <a href="#" className="hover:text-black">Newsletter</a>
            <a href="#" className="hover:text-black">Pitch us</a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-gray-500">© 2026 {heading} Media</p>
      </div>
    </footer>
  );
}
