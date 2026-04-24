import type { BlockProps } from "@/blocks/types";
import { CreditCard, Receipt, Wallet } from "lucide-react";

const icons = [CreditCard, Receipt, Wallet];
const stripColors = ["#6366f1", "#ec4899", "#10b981"];

export default function Features182(props: BlockProps) {
  const {
    theme,
    heading = "Payment Solutions",
    subheading = "Accept payments from anywhere in the world",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Card Processing", description: "Accept Visa, Mastercard, and local payment methods instantly." },
      { title: "Auto Invoicing", description: "Generate and send professional invoices automatically." },
      { title: "Digital Wallet", description: "Support Apple Pay, Google Pay, and mobile money." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const color = theme?.primary || stripColors[i % stripColors.length];
            return (
              <div key={i} className="flex rounded-xl overflow-hidden shadow-sm" style={{ border: `1px solid ${theme?.foreground || "#000"}10` }}>
                <div className="w-1.5 shrink-0" style={{ backgroundColor: color }} />
                <div className="p-6 flex-1">
                  <Icon size={22} className="mb-3" style={{ color }} />
                  <h3 className="text-base font-bold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
