import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";
export default function EcomCards159(props: BlockProps) {
  const { theme, heading = "Horizontal product card", subheading = "$39.99", bodyText = "Premium quality product with fast shipping and 30-day returns.", buttonText = "Add to Cart" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-10">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-6 rounded-2xl border p-4" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
        <div className="w-full sm:w-48 aspect-square rounded-xl shrink-0" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }} />
        <div className="flex-1 flex flex-col justify-between py-2">
          <div>
            <h3 className="font-bold text-lg">{heading}</h3>
            <div className="flex items-center gap-1 mt-1">{[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}<span className="text-xs opacity-40 ml-1">(128)</span></div>
            <p className="text-sm opacity-60 mt-2">{bodyText}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-black" style={{ color: theme?.primary }}>{subheading}</span>
            <button className="px-5 py-2 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
