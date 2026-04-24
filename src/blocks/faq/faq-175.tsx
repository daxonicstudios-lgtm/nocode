import type { BlockProps } from "@/blocks/types";
import { MessageCircle } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How long does setup take?", description: "Most users have their site live within 10 minutes." },
  { title: "Do you offer templates?", description: "Thousands of pre-built sections by category and industry." },
  { title: "Can I use it on mobile?", description: "Yes, built mobile-first. Edit from your phone." },
  { title: "What about SEO?", description: "Meta tags, clean URLs, and fast load times included." },
];

export default function Faq175(props: BlockProps) {
  const { theme, heading = "FAQ as bordered cards", subheading = "Got questions? We have answers.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.slice(0, 6).map((faq, i) => (
            <div key={i} className="rounded-2xl border p-6" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <MessageCircle className="w-5 h-5 mb-3" style={{ color: theme?.primary }} />
              <h3 className="font-semibold">{faq.title}</h3>
              <p className="mt-2 text-sm opacity-60">{faq.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
