import type { BlockProps } from "@/blocks/types";

export default function Footer012(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="relative w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-600 sm:px-6 lg:px-8">
        © 2026 Pacific Studios. All rights reserved.
      </div>
    </footer>
  );
}
