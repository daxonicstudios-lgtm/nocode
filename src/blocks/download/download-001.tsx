import type { BlockProps } from "@/blocks/types";
import { Smartphone } from "lucide-react";

export default function Download001(props: BlockProps) {
  const { theme, heading = "Your site. On every device.", bodyText = "Download our app to manage your site on the go. Edit, publish, and monitor from anywhere.", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{heading}</h2>
          <p className="mt-4 text-base opacity-75">{bodyText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-xl bg-black text-white text-sm font-medium">App Store</button>
            <button className="px-5 py-3 rounded-xl bg-black text-white text-sm font-medium">Google Play</button>
          </div>
        </div>
        <div className="relative aspect-[3/4] mx-auto w-full max-w-xs rounded-[2.5rem] border-4 overflow-hidden" style={{ borderColor: theme?.foreground, backgroundColor: theme?.secondary ?? "#f3f4f6" }}>
          {imageUrl ? <img src={imageUrl} alt="" className="w-full h-full object-cover" /> : <Smartphone className="w-24 h-24 opacity-20 absolute inset-0 m-auto" />}
        </div>
      </div>
    </section>
  );
}
