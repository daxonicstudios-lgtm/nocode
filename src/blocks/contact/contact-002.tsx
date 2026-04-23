import type { BlockProps } from "@/blocks/types";
import { Mail, Phone, MapPin } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Email", description: "hello@example.com" },
  { title: "Phone", description: "+234 800 000 0000" },
  { title: "Office", description: "14 Admiralty Way, Lekki, Lagos" },
];

const ICONS = [Mail, Phone, MapPin];

export default function Contact002(props: BlockProps) {
  const { theme, heading = "Contact us", subheading = "Two ways to reach us. Whichever you prefer.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-base opacity-70">{subheading}</p>
          <ul className="mt-10 space-y-5">
            {items.slice(0, 3).map((c, i) => {
              const Icon = ICONS[i % 3];
              return (
                <li key={i} className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#f3f4f6" }}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm opacity-60">{c.title}</p>
                    <p className="font-medium">{c.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <form className="p-6 rounded-2xl border space-y-3" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <input placeholder="Name" className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: "transparent" }} />
          <input placeholder="Email" type="email" className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: "transparent" }} />
          <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border text-sm resize-none" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: "transparent" }} />
          <button type="button" className="w-full py-3 rounded-full text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>Send</button>
        </form>
      </div>
    </section>
  );
}
