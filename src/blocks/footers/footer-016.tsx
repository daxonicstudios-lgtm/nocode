import type { BlockProps } from "@/blocks/types";

export default function Footer016(props: BlockProps) {
  const { theme, navLinks = [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "Contact", url: "#" }] } = props;
  return (
    <footer className="w-full bg-white py-10" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-gray-700">
          {navLinks.map((l, i) => (
            <a key={i} href={l.url} className="hover:underline">{l.label}</a>
          ))}
        </nav>
        <p className="mt-4 text-xs text-gray-400">© 2026 Holloway & Co.</p>
      </div>
    </footer>
  );
}
