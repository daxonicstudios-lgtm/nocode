import type { BlockProps } from "@/blocks/types";

export default function Footer040(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-500">© 2026 Bluestone</p>
        <a href="#" className="text-xs text-gray-500 underline-offset-2 hover:text-gray-900 hover:underline">Status: All systems operational</a>
      </div>
    </footer>
  );
}
