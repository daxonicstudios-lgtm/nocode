import type { BlockProps } from "@/blocks/types";

export default function Footer007(props: BlockProps) {
  const { theme, navLinks = [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "Cookies", url: "#" }] } = props;
  return (
    <footer className="w-full bg-gray-900 py-5 text-gray-400" style={{ backgroundColor: theme?.background || "#111827", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 text-xs sm:flex-row sm:gap-6 sm:px-6 lg:px-8">
        <p>© 2026 Harbor</p>
        <span className="hidden h-3 w-px bg-gray-700 sm:block" />
        <nav className="flex gap-4">
          {navLinks.map((l, i) => (
            <a key={i} href={l.url} className="hover:text-white">{l.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
