import type { BlockProps } from "@/blocks/types";
import { Navigation } from "lucide-react";

export default function Maps003(props: BlockProps) {
  const { theme, heading = "Visit the shop", bodyText = "Open Tuesday through Saturday, 10am to 7pm. Sunday and Monday by appointment.", buttonText = "Get directions", buttonUrl = "#" } = props;

  return (
    <section className="relative">
      <div className="aspect-[16/9] md:aspect-[21/9]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-md mx-5 md:ml-16 p-6 sm:p-8 rounded-2xl shadow-xl" style={{ backgroundColor: theme?.background ?? "#fff", color: theme?.foreground }}>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-sm opacity-75">{bodyText}</p>
          <a href={buttonUrl} className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>
            <Navigation className="w-4 h-4" /> {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
