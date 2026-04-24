import type { BlockProps } from "@/blocks/types";

export default function Footer050(props: BlockProps) {
  const { theme, heading = "Zephyr", navLinks = [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "Contact", url: "#" }] } = props;
  return (
    <footer className="w-full bg-[#0a0a0a] py-10 text-gray-300" style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-2xl font-light tracking-widest text-white uppercase">{heading}</p>
        <nav className="mt-4 flex justify-center gap-8 text-xs text-gray-400">
          {navLinks.map((l, i) => (
            <a key={i} href={l.url} className="hover:text-white">{l.label}</a>
          ))}
        </nav>
        <p className="mt-6 text-[11px] tracking-[0.3em] uppercase text-gray-600">© 2026 · All rights reserved</p>
      </div>
    </footer>
  );
}
