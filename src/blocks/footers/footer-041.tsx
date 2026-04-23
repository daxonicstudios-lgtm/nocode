import type { BlockProps } from "@/blocks/types";

export default function Footer041(props: BlockProps) {
  const { theme, heading = "Halcyon", navLinks = [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }] } = props;
  return (
    <footer className="w-full bg-[#0a0a0a] py-6 text-gray-300" style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <span className="text-sm font-semibold text-white">{heading}</span>
        <nav className="flex gap-5 text-xs text-gray-400">
          {navLinks.map((l, i) => (
            <a key={i} href={l.url} className="hover:text-white">{l.label}</a>
          ))}
        </nav>
        <p className="text-xs text-gray-500">© 2026</p>
      </div>
    </footer>
  );
}
