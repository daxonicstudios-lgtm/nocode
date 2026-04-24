import type { BlockProps } from "@/blocks/types";

export default function Footer032(props: BlockProps) {
  const { theme, heading = "Willow" } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gray-200" />
          <span className="text-sm font-light tracking-[0.2em] text-gray-700 uppercase">{heading}</span>
          <span className="h-px w-12 bg-gray-200" />
        </div>
        <p className="mt-3 text-center text-xs text-gray-400">© 2026 — All rights reserved</p>
      </div>
    </footer>
  );
}
