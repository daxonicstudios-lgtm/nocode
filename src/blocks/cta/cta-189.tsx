import type { BlockProps } from "@/blocks/types";
import { MessageCircle } from "lucide-react";

export default function Cta189(props: BlockProps) {
  const {
    theme,
    heading = "Questions before you commit?",
    subheading = "We are transparent about everything.",
    buttonText = "Sign Up Free",
    buttonUrl = "#",
    items = [
      { title: "How does billing work?", description: "We bill monthly or annually. Switch plans anytime." },
      { title: "Can I import my existing site?", description: "Yes, our migration tool handles WordPress, Wix, and more." },
      { title: "What about SEO?", description: "Every site is optimized for search engines out of the box." },
      { title: "Do you offer team plans?", description: "Yes, with shared workspaces and role-based access." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <MessageCircle className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#2563eb" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-70">{subheading}</p>
      </div>
      <div className="max-w-2xl mx-auto mt-8 space-y-2">
        {items.map((item, i) => (
          <details key={i} className="group rounded-xl overflow-hidden" style={{ backgroundColor: theme?.background ?? "#fff" }}>
            <summary className="cursor-pointer px-5 py-4 font-semibold text-sm flex justify-between items-center">
              {item.title}
              <span className="opacity-40 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <div className="px-5 pb-4 text-sm opacity-70">{item.description}</div>
          </details>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href={buttonUrl} className="inline-block px-7 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
