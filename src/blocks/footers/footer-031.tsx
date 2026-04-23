import type { BlockProps } from "@/blocks/types";

export default function Footer031(props: BlockProps) {
  const { theme, heading = "Slate" } = props;
  return (
    <footer className="w-full bg-slate-800 py-6 text-slate-200" style={{ backgroundColor: theme?.background || "#1e293b", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-lg font-light">{heading}</span>
        <p className="text-xs text-slate-400">© 2026 · All rights reserved</p>
      </div>
    </footer>
  );
}
