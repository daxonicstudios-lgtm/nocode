import type { BlockProps } from "@/blocks/types";

export default function Footer432(props: BlockProps) {
  const { theme, heading = "Sondergrid" } = props;
  const logos = ["TechCrunch", "Forbes", "Wired", "The Verge", "Bloomberg", "Fast Company"];
  return (
    <footer
      className="w-full bg-indigo-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 rounded-2xl bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">In the news</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">Stories about {heading}, from the people writing them.</p>
          </div>
          <a href="#" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Press contact →
          </a>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center rounded-lg bg-white/60 py-4 text-sm font-semibold text-indigo-900/70 ring-1 ring-indigo-100">
              {l}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-bold text-gray-900">{heading}</p>
            <p className="mt-1 text-sm text-gray-600">Workflows without the friction.</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Product</a>
            <a href="#" className="hover:text-black">Pricing</a>
            <a href="#" className="hover:text-black">Customers</a>
            <a href="#" className="hover:text-black">Security</a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-indigo-900/60">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
