import type { BlockProps } from "@/blocks/types";
import { ShoppingBag, Heart, Eye } from "lucide-react";
export default function EcomCards012(props: BlockProps) {
  const { theme, heading = "Product card with hover actions", subheading = "$49.99", buttonText = "Add to Cart" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-10">
      <div className="max-w-xs mx-auto group">
        <div className="aspect-[3/4] rounded-xl relative overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
          <div className="absolute inset-x-0 bottom-0 p-3 flex justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform">
            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"><Heart className="w-4 h-4" /></button>
            <button className="w-10 h-10 rounded-full shadow flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><ShoppingBag className="w-4 h-4" /></button>
            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"><Eye className="w-4 h-4" /></button>
          </div>
        </div>
        <h3 className="mt-3 font-medium">{heading}</h3>
        <p className="font-bold mt-1" style={{ color: theme?.primary }}>{subheading}</p>
      </div>
    </section>
  );
}
