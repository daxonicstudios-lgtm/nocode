import type { BlockProps } from "@/blocks/types";

export default function Footer024(props: BlockProps) {
  const { theme, heading = "Osprey" } = props;
  return (
    <footer className="w-full bg-black py-10 text-white" style={{ backgroundColor: theme?.background || "#000", color: theme?.foreground || "#fff" }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-3xl tracking-tight" style={{ color: theme?.primary }}>{heading}</p>
        <div className="mt-4 flex justify-center">
          <span className="h-px w-12 bg-white/40" />
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">© 2026</p>
      </div>
    </footer>
  );
}
