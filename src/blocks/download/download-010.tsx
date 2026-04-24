import type { BlockProps } from "@/blocks/types";
import { Download } from "lucide-react";

export default function Download010(props: BlockProps) {
  const { theme, heading = "Take It Anywhere", subheading = "Download now and get started.", bodyText = "Available on iOS and Android. Free to download.", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 opacity-60 text-lg">{subheading}</p>
          <p className="mt-2 text-sm opacity-50">{bodyText}</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold bg-black">
              <Download className="w-4 h-4" /> App Store
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
              <Download className="w-4 h-4" /> Google Play
            </a>
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <div className="w-56 h-96 rounded-3xl" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
            {imageUrl && <img src={imageUrl} alt="" className="w-full h-full object-cover rounded-3xl" />}
          </div>
        </div>
      </div>
    </section>
  );
}
