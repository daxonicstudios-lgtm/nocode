import type { BlockProps } from "@/blocks/types";

export default function Footer028(props: BlockProps) {
  const { theme, navLinks = [{ label: "About", url: "#" }, { label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "Contact", url: "#" }] } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-gray-600">
          {navLinks.map((l, i) => (
            <span key={i} className="inline-flex items-center">
              <a href={l.url} className="hover:text-gray-900">{l.label}</a>
              {i < navLinks.length - 1 && <span className="mx-2 text-gray-300">·</span>}
            </span>
          ))}
        </nav>
        <p className="mt-3 text-center text-xs text-gray-400">© 2026 Beacon Labs</p>
      </div>
    </footer>
  );
}
