import type { BlockProps } from "@/blocks/types";

export default function Footer038(props: BlockProps) {
  const { theme, heading = "Copper" } = props;
  return (
    <footer className="w-full border-t border-amber-200 bg-amber-50 py-5" style={{ backgroundColor: theme?.background || "#fffbeb", color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-amber-900" style={{ color: theme?.primary }}>{heading}</p>
        <p className="text-xs text-amber-900/70">© 2026 · Handmade with intent</p>
      </div>
    </footer>
  );
}
