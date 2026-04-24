import type { BlockProps } from "@/blocks/types";
import { HelpCircle } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "What is this platform?", description: "An AI-powered no-code website builder for anyone." },
  { title: "How much does it cost?", description: "Free to start. Paid plans from $19/month." },
  { title: "Do I need coding skills?", description: "Not at all. Our AI handles the technical work." },
  { title: "Can I export my website?", description: "Yes, Pro and Business plans include full export." },
  { title: "Is my data secure?", description: "Enterprise-grade encryption and data protection." },
  { title: "How do I get support?", description: "Community, email, and priority support channels." },
];

export default function Faq033(props: BlockProps) {
  const { theme, heading = "Two-column FAQ grid layout", subheading = "Quick answers to common questions", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 6).map((faq, i) => (
            <div key={i} className="rounded-xl p-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: theme?.primary }} />
                <div>
                  <h3 className="font-semibold">{faq.title}</h3>
                  <p className="mt-2 text-sm opacity-60 leading-relaxed">{faq.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
