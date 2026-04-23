import type { BlockProps } from "@/blocks/types";

export default function Footer424(props: BlockProps) {
  const { theme, heading = "Mercuria" } = props;
  const logos = ["Bloomberg", "Financial Times", "Reuters", "The Economist", "Wall Street Journal"];
  return (
    <footer
      className="w-full bg-[#0a1f33] py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400">Covered by</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {logos.map((l) => (
              <span key={l} className="font-serif text-lg text-slate-200/80">{l}</span>
            ))}
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-3xl text-white">{heading}</p>
            <p className="mt-2 text-sm text-slate-400">Market intelligence for the institutional desk.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Platform</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Terminal</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Data</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Firm</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-5 text-xs text-slate-500 sm:flex-row">
          <span>© 2026 {heading} Research, LLC</span>
          <span>Regulated by FCA · FINRA · BaFin</span>
        </div>
      </div>
    </footer>
  );
}
