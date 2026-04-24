import type { BlockProps } from "@/blocks/types";
import { Smartphone, Tablet } from "lucide-react";

export default function Cta081(props: BlockProps) {
  const {
    theme,
    heading = "Take it with you everywhere",
    subheading = "Download our app and manage your business on the go.",
    buttonText = "Download on the App Store",
    secondaryButtonText = "Get it on Google Play",
    buttonUrl = "#",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#000000" }}>
            <Smartphone className="w-6 h-6" />
            <div className="text-left">
              <div className="text-[10px] opacity-70">Download on the</div>
              <div className="text-sm font-bold -mt-0.5">App Store</div>
            </div>
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#000000" }}>
            <Tablet className="w-6 h-6" />
            <div className="text-left">
              <div className="text-[10px] opacity-70">Get it on</div>
              <div className="text-sm font-bold -mt-0.5">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
