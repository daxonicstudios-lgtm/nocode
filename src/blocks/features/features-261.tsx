import type { BlockProps } from "@/blocks/types";
import { ShoppingCart, ShoppingBag, CreditCard, Tag } from "lucide-react";

const icons = [ShoppingCart, ShoppingBag, CreditCard, Tag];

export default function Features261(props: BlockProps) {
  const {
    theme,
    heading = "Shopping Made Simple",
    subheading = "A seamless checkout experience that converts browsers into buyers",
    bodyText,
    buttonText = "Start Selling",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Cart", description: "Persistent cart with automatic tax calculation and shipping estimates." },
      { title: "Quick Buy", description: "One-click purchasing for returning customers speeds up every order." },
      { title: "Secure Checkout", description: "PCI-compliant payments with support for 50+ payment methods." },
      { title: "Dynamic Pricing", description: "Automatic discounts, bundles, and promotional pricing rules." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 text-center border" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#fef3c7", color: theme?.primary || "#d97706" }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#d97706" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
