import type { BlockProps } from "@/blocks/types";

export default function Footer093(props: BlockProps) {
  const {
    theme,
    heading = "Anvil",
    bodyText = "B2B procurement, forged for scale.",
    navLinks = [
      { label: "Platform", url: "#" },
      { label: "Enterprise", url: "#" },
      { label: "Partners", url: "#" },
      { label: "Login", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-slate-800 py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-2xl font-bold text-white">{heading}</p>
          <p className="mt-1 max-w-sm text-sm text-slate-400">{bodyText}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm text-slate-300 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-slate-700 px-4 pt-4 text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {heading} Corporation</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">Terms</a>
          <a href="#" className="hover:text-slate-300">Privacy</a>
          <a href="#" className="hover:text-slate-300">DPA</a>
        </div>
      </div>
    </footer>
  );
}
