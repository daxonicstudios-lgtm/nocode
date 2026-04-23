import type { BlockProps } from "@/blocks/types";

export default function Footer026(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full bg-white py-5" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-left text-xs text-gray-400">© 2026 Aster Technologies, Inc.</p>
      </div>
    </footer>
  );
}
