import type { BlockProps } from "@/blocks/types";
import { Mail } from "lucide-react";

export default function Newsletter002(props: BlockProps) {
  const { theme, heading = "Weekly, short, honest", subheading = "One email every Friday. 5 things worth reading. Join 18,000+ subscribers.", bodyText = "No spam. Unsubscribe with one click.", buttonText = "Join free" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto p-10 md:p-14 rounded-3xl border grid grid-cols-1 md:grid-cols-3 gap-6 items-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
        <Mail className="w-14 h-14 opacity-30" />
        <div className="md:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-2 text-sm opacity-75">{subheading}</p>
          <form className="mt-5 flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="email" className="flex-1 px-4 py-2.5 rounded-lg border text-sm bg-transparent" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
            <button type="button" className="px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>{buttonText}</button>
          </form>
          <p className="mt-3 text-xs opacity-60">{bodyText}</p>
        </div>
      </div>
    </section>
  );
}
