import type { BlockProps } from "@/blocks/types";

export default function Footer048(props: BlockProps) {
  const { theme, heading = "Ivy" } = props;
  return (
    <footer className="w-full bg-white py-8" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <p className="font-serif text-lg italic text-gray-900" style={{ color: theme?.primary }}>{heading}</p>
          <p className="mt-2 text-xs text-gray-500">© 2026 — A small studio, making small things with big love.</p>
        </div>
      </div>
    </footer>
  );
}
