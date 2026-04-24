import type { BlockProps } from "@/blocks/types";

export default function Footer005(props: BlockProps) {
  const { theme, heading = "Vault" } = props;
  return (
    <footer className="w-full bg-[#fafafa] py-8" style={{ backgroundColor: theme?.background || "#fafafa", color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-2xl text-gray-900" style={{ color: theme?.primary }}>{heading}</p>
        <p className="mt-2 text-xs tracking-wide text-gray-500">© 2026 — Crafted with care</p>
      </div>
    </footer>
  );
}
