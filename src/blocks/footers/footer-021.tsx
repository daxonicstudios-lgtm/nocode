import type { BlockProps } from "@/blocks/types";

export default function Footer021(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto h-16 max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <p className="text-xs text-gray-400 tracking-wider">© 2026 · WREN · All rights reserved</p>
      </div>
    </footer>
  );
}
