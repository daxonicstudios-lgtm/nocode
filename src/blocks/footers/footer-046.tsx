import type { BlockProps } from "@/blocks/types";

export default function Footer046(props: BlockProps) {
  const { theme, heading = "Maple" } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-t border-b border-gray-200 py-3 text-xs">
          <span className="font-semibold uppercase tracking-widest text-gray-800">{heading}</span>
          <span className="text-gray-400">Since 2026</span>
        </div>
      </div>
    </footer>
  );
}
