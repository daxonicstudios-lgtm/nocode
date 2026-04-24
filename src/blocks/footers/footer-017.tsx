import type { BlockProps } from "@/blocks/types";

export default function Footer017(props: BlockProps) {
  const { theme, heading = "Cobalt" } = props;
  return (
    <footer className="w-full bg-blue-600 py-5 text-white" style={{ backgroundColor: theme?.primary || "#2563eb", color: theme?.foreground || "#fff" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-bold">{heading}</span>
        <span className="text-xs opacity-80">© 2026</span>
      </div>
    </footer>
  );
}
