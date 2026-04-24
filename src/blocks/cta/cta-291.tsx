import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Wifi, Battery, Signal } from "lucide-react";

export default function Cta291(props: BlockProps) {
  const {
    theme,
    heading = "Beautiful on Every Screen",
    subheading = "Mobile-first design that your users will love.",
    buttonText = "Try the App",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20 sm:py-28" style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-12">
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="w-56 shrink-0">
          <div className="rounded-[2rem] border-4 p-2 overflow-hidden" style={{ borderColor: theme?.foreground ?? "#1e293b" }}>
            <div className="rounded-[1.5rem] overflow-hidden" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
              <div className="flex items-center justify-between px-4 py-2 text-white text-[10px]">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <Signal className="w-3 h-3" /><Wifi className="w-3 h-3" /><Battery className="w-3 h-3" />
                </div>
              </div>
              <div className="px-4 pb-6 pt-4 text-white text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 mx-auto mb-3" />
                <p className="text-xs font-bold">Your App</p>
                <p className="text-[10px] opacity-60 mt-1">Dashboard ready</p>
                <div className="mt-4 h-20 rounded-lg bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
