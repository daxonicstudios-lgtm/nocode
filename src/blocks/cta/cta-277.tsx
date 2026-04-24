import type { BlockProps } from "@/blocks/types";
import { Moon, Sun } from "lucide-react";

export default function Cta277(props: BlockProps) {
  const {
    theme,
    heading = "Works Day and Night",
    subheading = "Always-on monitoring so you can rest easy.",
    buttonText = "Start Monitoring",
    buttonUrl = "#",
    secondaryButtonText = "View Dashboard",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden">
      <div className="grid sm:grid-cols-2 min-h-[380px]">
        <div className="flex items-center justify-center px-8 py-16" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }}>
          <div className="text-center sm:text-right max-w-xs">
            <Moon className="w-8 h-8 mb-3 mx-auto sm:ml-auto sm:mr-0 opacity-60" />
            <h2 className="text-2xl sm:text-3xl font-extrabold">{heading}</h2>
            <p className="mt-2 opacity-60 text-sm">{subheading}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-8 py-16" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0f172a" }}>
          <div className="text-center sm:text-left max-w-xs">
            <Sun className="w-8 h-8 mb-3 mx-auto sm:mr-auto sm:ml-0 opacity-40" />
            <div className="flex flex-col gap-3">
              <a href={buttonUrl} className="px-7 py-3.5 rounded-full text-white text-center font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#0f172a" }}>
                {buttonText}
              </a>
              <a href={secondaryButtonUrl} className="px-7 py-3.5 rounded-full text-center font-bold text-sm border-2" style={{ borderColor: theme?.primary ?? "#0f172a", color: theme?.primary ?? "#0f172a" }}>
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
