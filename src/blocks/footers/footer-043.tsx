import type { BlockProps } from "@/blocks/types";

export default function Footer043(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500" />
      <div className="bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-gray-700">© 2026 Prism Studio — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
