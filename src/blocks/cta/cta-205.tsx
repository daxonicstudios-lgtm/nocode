import type { BlockProps } from "@/blocks/types";
import { BellPlus, Shield } from "lucide-react";

export default function Cta205(props: BlockProps) {
  const {
    theme,
    heading = "Security alert preferences",
    subheading = "Choose how you want to be notified about security events on your account.",
    buttonText = "Configure Alerts",
    buttonUrl = "#",
    secondaryButtonText = "Use Defaults",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-xl" style={{ backgroundColor: theme?.muted ?? "#fef3c7" }}>
          <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#d97706", color: "#fff" }}>
            <Shield className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold">{heading}</h2>
            <p className="mt-2 text-sm opacity-70">{subheading}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#d97706" }}>
                <BellPlus className="w-4 h-4" /> {buttonText}
              </a>
              <a href={secondaryButtonUrl} className="px-5 py-2.5 rounded-lg text-sm font-medium border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
