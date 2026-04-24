import type { BlockProps } from "@/blocks/types";
import { Store, LayoutGrid, BarChart3, Globe } from "lucide-react";

const icons = [Store, LayoutGrid, BarChart3, Globe];

export default function Features267(props: BlockProps) {
  const {
    theme,
    heading = "Your Marketplace, Your Rules",
    subheading = "Launch a multi-vendor marketplace in days, not months",
    bodyText,
    buttonText = "Start Your Marketplace",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Vendor Onboarding", description: "Self-service registration with approval workflows and KYC verification." },
      { title: "Storefront Builder", description: "Each vendor gets a customizable storefront with their own branding." },
      { title: "Commission Engine", description: "Flexible commission structures by category, vendor tier, or product type." },
      { title: "Global Reach", description: "Multi-currency, multi-language support opens your marketplace to the world." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fefce8", color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 flex gap-4" style={{ backgroundColor: theme?.background || "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#fef9c3", color: theme?.primary || "#ca8a04" }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#ca8a04" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
