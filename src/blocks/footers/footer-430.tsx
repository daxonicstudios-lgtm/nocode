import type { BlockProps } from "@/blocks/types";

export default function Footer430(props: BlockProps) {
  const { theme, heading = "Orison" } = props;
  const logos = ["The New York Times", "Harvard Business Review", "MIT Tech Review", "The Atlantic"];
  return (
    <footer
      className="w-full bg-[#faf7f2] py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif text-5xl italic text-stone-900">{heading}</p>
        <p className="mt-3 text-sm text-stone-600">A slower way to read the internet.</p>
        <div className="mx-auto mt-10 h-px w-16 bg-stone-400" />
        <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.4em] text-stone-500">Endorsed by</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {logos.map((l) => (
            <span key={l} className="font-serif text-base italic text-stone-700">{l}</span>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-300 pt-6 text-xs text-stone-600 sm:flex-row sm:text-left">
          <span>© 2026 {heading} Press</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-stone-900">Library</a>
            <a href="#" className="hover:text-stone-900">Gift</a>
            <a href="#" className="hover:text-stone-900">About</a>
            <a href="#" className="hover:text-stone-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
