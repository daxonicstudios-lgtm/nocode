import type { BlockProps } from "@/blocks/types";
import { User, Globe } from "lucide-react";

const POSTS = [
  { title: "Localization at Scale", description: "Translate your product for global markets efficiently.", label: "i18n" },
  { title: "RTL Layout Support", description: "Design interfaces that work beautifully in right-to-left languages.", label: "Design" },
  { title: "Payment Gateways Compared", description: "Stripe, Paystack, Flutterwave for African markets.", label: "Fintech" },
];

export default function Blog240(props: BlockProps) {
  const { theme, heading = "Global Perspectives", subheading = "Insights from our international contributors.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2"><Globe className="w-6 h-6" style={{ color: theme?.primary ?? "#6366f1" }} /><h2 className="text-3xl font-bold">{heading}</h2></div>
        <p className="opacity-60 mb-10">{subheading}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="border rounded-xl overflow-hidden" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="aspect-[2/1]" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <div className="p-5">
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-2 font-bold text-lg">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><User className="w-4 h-4 text-white" /></div>
                  <span className="text-xs font-medium opacity-60">Guest Author</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
