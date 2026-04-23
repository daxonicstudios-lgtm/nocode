import type { BlockProps } from "@/blocks/types";

export default function Footer003(props: BlockProps) {
  const { theme, heading = "Ember", navLinks = [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "Contact", url: "#" }] } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
        <p className="font-semibold text-gray-900" style={{ color: theme?.primary }}>{heading}</p>
        <nav className="flex gap-6 text-gray-600">
          {navLinks.map((l, i) => (
            <a key={i} href={l.url} className="hover:text-gray-900">{l.label}</a>
          ))}
        </nav>
        <p className="text-gray-500">© 2026</p>
      </div>
    </footer>
  );
}
