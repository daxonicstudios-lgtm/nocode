import type { BlockProps } from "@/blocks/types";
import { ArrowRight, BarChart3, Users, Zap } from "lucide-react";

export default function Cta295(props: BlockProps) {
  const {
    theme,
    heading = "Your Dashboard, Anywhere",
    subheading = "Full power in your pocket. No compromises.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.background ?? "#fff", color: theme?.foreground ?? "#111" }}>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="w-52 rounded-[2.5rem] border-[5px] p-2" style={{ borderColor: theme?.foreground ?? "#111" }}>
            <div className="rounded-[2rem] overflow-hidden" style={{ backgroundColor: theme?.background ?? "#f9fafb" }}>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                  <span className="text-[10px] font-bold">Analytics</span>
                </div>
                <div className="h-16 rounded-lg" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}15` }} />
                <div className="flex gap-2">
                  <div className="flex-1 p-2 rounded-lg bg-gray-100 text-center">
                    <Users className="w-3 h-3 mx-auto mb-1 opacity-50" />
                    <p className="text-[8px] font-bold">2.4k</p>
                  </div>
                  <div className="flex-1 p-2 rounded-lg bg-gray-100 text-center">
                    <Zap className="w-3 h-3 mx-auto mb-1 opacity-50" />
                    <p className="text-[8px] font-bold">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
