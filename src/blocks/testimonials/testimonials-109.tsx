import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "David L.", description: "I cannot recommend this platform enough. It transformed how we approach web projects. The AI suggestions are spot-on and saved us countless hours.", label: "CTO, InnovateLab" },
];

export default function Testimonials109(props: BlockProps) {
  const { theme, heading = "Success Stories", items = DEFAULT_ITEMS } = props;

  const t = items[0];
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">{heading}</h2>
        <Quote className="w-10 h-10 mx-auto mb-6 opacity-20" />
        <p className="text-xl sm:text-2xl italic leading-relaxed opacity-80">{t?.description}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
          <div className="text-left">
            <div className="font-semibold">{t?.title}</div>
            <div className="text-sm opacity-50">{String(t?.label ?? "")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
