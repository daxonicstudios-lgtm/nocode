import type { BlockProps } from "@/blocks/types";
import { Star, ShoppingBag } from "lucide-react";
export default function EcomDetail149(props: BlockProps) {
  const { theme, heading = "Dark product detail", subheading = "$149.99", bodyText = "Next-generation product designed for performance and style.", buttonText = "Buy Now" } = props;
  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1 aspect-square rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">{heading}</h1>
          <div className="flex items-center gap-1 mt-2">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
          <p className="text-3xl font-black mt-4 text-white">{subheading}</p>
          <p className="mt-4 opacity-50">{bodyText}</p>
          <button className="mt-6 w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-white" style={{ color: theme?.primary ?? "#0f172a" }}><ShoppingBag className="w-4 h-4" /> {buttonText}</button>
        </div>
      </div>
    </section>
  );
}
