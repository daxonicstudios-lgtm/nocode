import type { BlockProps } from "@/blocks/types";

export default function Footer014(props: BlockProps) {
  const { theme, heading = "Mercer" } = props;
  return (
    <footer className="w-full border-y-4 border-double border-gray-800 bg-white py-5" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-sm italic text-gray-800">{heading} · Est. 2026</p>
      </div>
    </footer>
  );
}
