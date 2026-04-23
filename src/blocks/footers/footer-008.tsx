import type { BlockProps } from "@/blocks/types";

export default function Footer008(props: BlockProps) {
  const { theme, heading = "Vertex" } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rotate-45 bg-indigo-600" style={{ backgroundColor: theme?.accent }} />
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: theme?.primary }}>{heading}</span>
        </div>
        <p className="text-xs text-gray-500">© 2026</p>
      </div>
    </footer>
  );
}
