import type { BlockProps } from "@/blocks/types";

export default function Footer426(props: BlockProps) {
  const { theme, heading = "Northbridge" } = props;
  const logos = ["TechCrunch", "Forbes", "Wired", "The Verge", "Fast Company", "Bloomberg"];
  return (
    <footer
      className="w-full bg-gray-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm font-semibold text-gray-700">Featured in</p>
            <a href="#" className="text-xs font-medium text-gray-500 hover:text-gray-900">See all press →</a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {logos.map((l) => (
              <div key={l} className="flex items-center justify-center rounded-md border border-gray-200 py-3 font-serif text-sm text-gray-700">
                {l}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-1 text-sm text-gray-500">Building quietly since 2021.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Overview</a></li>
              <li><a href="#" className="hover:text-black">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Docs</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Press kit</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-500">© 2026 {heading} Inc.</p>
      </div>
    </footer>
  );
}
