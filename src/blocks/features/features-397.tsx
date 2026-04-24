import type { BlockProps } from "@/blocks/types";
import { Receipt, CreditCard, Wallet, Banknote } from "lucide-react";

const icons = [Receipt, CreditCard, Wallet, Banknote];

export default function Features397(props: BlockProps) {
  const {
    theme,
    heading = "Feature Itemization",
    subheading = "Everything included, nothing hidden",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Invoice Automation", description: "Generate and send professional invoices automatically.", value: "$0.00" },
      { title: "Payment Processing", description: "Accept cards, wallets, and bank transfers globally.", value: "$0.00" },
      { title: "Budget Tracking", description: "Set limits and get alerts before overspending.", value: "$0.00" },
      { title: "Revenue Reports", description: "Detailed breakdowns of income by source and period.", value: "$0.00" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fafafa", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-lg mx-auto">
        <div className="border rounded-lg p-6" style={{ borderColor: `${theme?.foreground || "#1f2937"}22` }}>
          <div className="text-center mb-6 pb-4 border-b border-dashed" style={{ borderColor: `${theme?.foreground || "#1f2937"}22` }}>
            <h2 className="text-xl font-bold mb-1">{heading}</h2>
            <p className="text-xs opacity-50">{subheading}</p>
            <p className="text-xs opacity-30 mt-2">Date: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-4">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-dotted" style={{ borderColor: `${theme?.foreground || "#1f2937"}15` }}>
                  <Icon size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme?.primary || "#10b981" }} />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-bold text-sm">{item.title}</h3>
                      <span className="text-sm" style={{ color: theme?.primary || "#10b981" }}>{item.value || "Included"}</span>
                    </div>
                    <p className="text-xs opacity-50 mt-0.5">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-double flex justify-between font-bold" style={{ borderColor: `${theme?.foreground || "#1f2937"}22` }}>
            <span className="text-sm">TOTAL</span>
            <span className="text-sm" style={{ color: theme?.primary || "#10b981" }}>FREE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
