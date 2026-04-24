import type { BlockProps } from "@/blocks/types";
import { ChevronDown } from "lucide-react";

export default function Features132(props: BlockProps) {
  const {
    theme,
    heading = "Feature Details",
    subheading = "Click to expand and learn more about each capability",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Visual Page Builder", description: "Drag and drop blocks to build any layout. No code required. Choose from 500+ pre-designed components that adapt to your brand colors and fonts automatically." },
      { title: "AI Content Generator", description: "Describe what you need and our AI writes compelling copy, suggests layouts, and even generates images. Supports 30+ languages for global reach." },
      { title: "Built-In SEO Tools", description: "Auto-generated sitemaps, meta tags, Open Graph images, and structured data. Our SEO score checker helps you rank higher on search engines." },
      { title: "E-Commerce Engine", description: "Accept payments, manage inventory, and track orders without any third-party plugins. Supports Stripe, PayPal, and mobile money." },
      { title: "Team Collaboration", description: "Invite team members with role-based access. Leave comments, track changes, and approve edits before they go live." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <ChevronDown size={20} className="opacity-50 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5">
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </details>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
