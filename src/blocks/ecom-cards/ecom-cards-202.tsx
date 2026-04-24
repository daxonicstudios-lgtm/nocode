import type { BlockProps } from "@/blocks/types";
export default function EcomCards202(props: BlockProps) {
  const { theme, heading = "Product card with sale badge", subheading = "$59.99", bodyText = "Sale" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-10">
      <div className="max-w-xs mx-auto">
        <div className="aspect-square rounded-2xl relative" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
          <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-red-500 text-white">{bodyText}</span>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">{heading}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-lg" style={{ color: theme?.primary }}>{subheading}</span>
            <span className="text-sm line-through opacity-40">$79.99</span>
          </div>
        </div>
      </div>
    </section>
  );
}
