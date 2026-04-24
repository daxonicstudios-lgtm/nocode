import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Strategy & Consulting", description: "We help you define your digital roadmap." },
  { title: "Design & Branding", description: "Create a memorable visual identity." },
  { title: "Development", description: "Build scalable, performant applications." },
];

export default function Services253(props: BlockProps) {
  const { theme, heading = "What We Do", subheading = "End-to-end services for modern businesses.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-4">
          {items.slice(0, 5).map((svc, i) => (
            <div key={i} className="flex items-center justify-between p-6 rounded-xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div>
                <h3 className="font-semibold text-lg">{svc.title}</h3>
                <p className="text-sm opacity-60 mt-1">{svc.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 shrink-0 opacity-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
