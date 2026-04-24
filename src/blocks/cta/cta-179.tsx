import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Cta179(props: BlockProps) {
  const {
    theme,
    heading = "Compare plans and choose yours",
    subheading = "Simple pricing, no hidden fees.",
    buttonText = "Choose Plan",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-3 text-center opacity-70">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch">
          <div className="flex-1 p-6 rounded-xl border border-gray-200">
            <p className="font-semibold">Starter</p>
            <p className="text-3xl font-bold mt-2">$9<span className="text-sm font-normal opacity-60">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm">
              {["5 projects", "Basic analytics", "Email support"].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: theme?.primary ?? "#2563eb" }} />{f}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 p-6 rounded-xl text-white relative -mt-2 sm:-mt-4 shadow-xl" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            <p className="font-semibold">Pro</p>
            <p className="text-3xl font-bold mt-2">$29<span className="text-sm font-normal opacity-60">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Unlimited projects", "Advanced analytics", "Priority support"].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4" />{f}</li>
              ))}
            </ul>
            <a href={buttonUrl} className="mt-6 block text-center px-6 py-3 rounded-lg bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#2563eb" }}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
