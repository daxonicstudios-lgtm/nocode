import type { BlockProps } from "@/blocks/types";

export default function Footer029(props: BlockProps) {
  const { theme, heading = "Meridian" } = props;
  return (
    <footer className="w-full bg-white py-8" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto flex max-w-lg flex-col items-center gap-2 px-4 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white" style={{ backgroundColor: theme?.primary }}>
          {heading.charAt(0)}
        </span>
        <p className="text-sm font-medium text-gray-900">{heading}</p>
        <p className="text-xs text-gray-500">© 2026 — Quietly building the future.</p>
      </div>
    </footer>
  );
}
