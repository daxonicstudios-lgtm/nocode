import type { BlockProps } from "@/blocks/types";

export default function Footer002(props: BlockProps) {
  const { theme, bodyText = "© 2026 Nimbus. All rights reserved." } = props;
  return (
    <footer className="w-full bg-black py-5 text-white" style={{ backgroundColor: theme?.background || "#000", color: theme?.foreground || "#fff" }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-light tracking-widest uppercase">{bodyText}</p>
      </div>
    </footer>
  );
}
