import type { BlockProps } from "@/blocks/types";
import { Gift } from "lucide-react";

export default function Cta139(props: BlockProps) {
  const {
    theme,
    heading = "Get Your Free Guide",
    subheading = "10 strategies to grow your online business — delivered instantly.",
    buttonText = "Download Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#fef3c7", color: theme?.foreground }}>
      <div className="max-w-lg mx-auto flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-white shadow">
        <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme?.primary || "#d97706" }}>
          <Gift className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg font-bold mb-1">{heading}</h2>
          <p className="text-sm opacity-70 mb-4">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Email address" className="flex-1 px-3 py-2 rounded border text-sm outline-none" />
            <button type="submit" className="px-4 py-2 rounded text-white text-sm font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#d97706" }}>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
