import type { BlockProps } from "@/blocks/types";

export default function Footer036(props: BlockProps) {
  const { theme, heading = "Obsidian" } = props;
  return (
    <footer className="w-full bg-black py-8 text-white" style={{ backgroundColor: theme?.background || "#000", color: theme?.foreground || "#fff" }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.5em] uppercase text-white/60">{heading}</p>
        <p className="mt-2 text-sm font-light text-white/40">© 2026</p>
      </div>
    </footer>
  );
}
