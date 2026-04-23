import type { BlockProps } from "@/blocks/types";

export default function Footer044(props: BlockProps) {
  const { theme, heading = "Atlas" } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-5" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-2xl font-extrabold tracking-tight text-gray-900" style={{ color: theme?.primary }}>{heading}.</span>
        <span className="text-xs font-medium text-gray-400">© MMXXVI</span>
      </div>
    </footer>
  );
}
