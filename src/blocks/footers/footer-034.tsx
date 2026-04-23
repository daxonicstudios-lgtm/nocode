import type { BlockProps } from "@/blocks/types";

export default function Footer034(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <p className="mx-auto max-w-prose px-4 text-center text-[11px] uppercase tracking-[0.4em] text-gray-400">
        © 2026 — Rowan & Ash
      </p>
    </footer>
  );
}
