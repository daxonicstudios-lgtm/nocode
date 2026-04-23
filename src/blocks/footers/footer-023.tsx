import type { BlockProps } from "@/blocks/types";

export default function Footer023(props: BlockProps) {
  const { theme, navLinks = [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }] } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-5" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 text-xs text-gray-500 sm:flex-row sm:justify-between sm:px-6">
        <p>© 2026 Thorn & Co.</p>
        <nav className="flex gap-5">
          {navLinks.map((l, i) => (
            <a key={i} href={l.url} className="underline-offset-4 hover:underline">{l.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
