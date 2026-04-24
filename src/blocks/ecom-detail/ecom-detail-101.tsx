import type { BlockProps } from "@/blocks/types";
import { Star, ShoppingBag, Heart, Truck, RotateCcw } from "lucide-react";
export default function EcomDetail101(props: BlockProps) {
  const { theme, heading = "Split product detail page", subheading = "$89.99", bodyText = "Premium quality crafted with attention to detail. Made from sustainable materials with comfort in mind. Available in multiple sizes and colors.", buttonText = "Add to Cart" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <div className="aspect-square rounded-2xl" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }} />
          <div className="flex gap-2 mt-3">
            {[1,2,3,4].map(i => <div key={i} className="w-16 h-16 rounded-lg" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />)}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{heading}</h1>
          <div className="flex items-center gap-2 mt-2">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}<span className="text-sm opacity-40">(256 reviews)</span></div>
          <p className="text-3xl font-black mt-4" style={{ color: theme?.primary }}>{subheading}</p>
          <p className="mt-4 opacity-60 leading-relaxed">{bodyText}</p>
          <div className="flex gap-3 mt-6">
            <button className="flex-1 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><ShoppingBag className="w-4 h-4" /> {buttonText}</button>
            <button className="w-12 rounded-xl border flex items-center justify-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}><Heart className="w-5 h-5" /></button>
          </div>
          <div className="mt-6 space-y-2 text-sm opacity-50">
            <div className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free shipping on orders over $50</div>
            <div className="flex items-center gap-2"><RotateCcw className="w-4 h-4" /> 30-day returns</div>
          </div>
        </div>
      </div>
    </section>
  );
}
