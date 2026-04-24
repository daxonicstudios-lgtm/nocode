import type { BlockProps } from "@/blocks/types";
import { CheckCircle } from "lucide-react";

const defaults = [
  { title: "No credit card required", description: "Start building for free with full access to core features." },
  { title: "Unlimited projects", description: "Create as many projects as you need without hitting a ceiling." },
  { title: "99.99% uptime SLA", description: "We guarantee your services stay online when it matters most." },
  { title: "24/7 priority support", description: "Reach our team any time via chat, email, or phone." },
  { title: "Automatic backups", description: "Your data is backed up every hour to multiple secure regions." },
  { title: "Custom domain support", description: "Connect your own domain and SSL certificate in seconds." },
];

export default function Features027(props: BlockProps) {
  const {
    theme,
    heading = "Everything Included",
    subheading = "No hidden fees, no surprises. Here is what you get on every plan.",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
          {items.slice(0, 6).map((item, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: theme?.primary ?? "#22c55e" }} />
              <div>
                <h3 className="text-sm font-semibold mb-0.5">{item.title ?? defaults[i]?.title}</h3>
                <p className="text-xs opacity-55 leading-relaxed">{item.description ?? defaults[i]?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
