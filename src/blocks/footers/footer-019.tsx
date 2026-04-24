import type { BlockProps } from "@/blocks/types";

export default function Footer019(props: BlockProps) {
  const { theme, heading = "Sable" } = props;
  return (
    <footer className="w-full border-t border-dashed border-gray-300 bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 text-sm sm:px-6">
        <p className="font-mono text-gray-700">{heading}</p>
        <p className="font-mono text-gray-400">// © 2026</p>
      </div>
    </footer>
  );
}
