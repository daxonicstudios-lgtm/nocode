import type { BlockProps } from "@/blocks/types";
import { ShoppingCart, CreditCard, Package, Truck, Tag, BarChart3 } from "lucide-react";

const icons = [ShoppingCart, CreditCard, Package, Truck, Tag, BarChart3];

export default function Features092(props: BlockProps) {
  const {
    theme,
    heading = "E-Commerce Features",
    subheading = "Everything you need to sell online successfully",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Cart", description: "Abandoned cart recovery, upsells, and cross-sells that boost average order value." },
      { title: "Payment Processing", description: "Accept credit cards, mobile money, bank transfers, and cryptocurrency payments." },
      { title: "Inventory Management", description: "Track stock levels across warehouses with automatic low-stock alerts." },
      { title: "Shipping Calculator", description: "Real-time shipping rates from DHL, FedEx, and local carriers at checkout." },
      { title: "Discount Engine", description: "Create coupons, flash sales, bundle deals, and loyalty rewards effortlessly." },
      { title: "Sales Analytics", description: "Revenue dashboards with product performance, customer lifetime value, and cohort analysis." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.accent || "#f59e0b" }}>E-Commerce</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: theme?.accent ? `${theme.accent}22` : "#fef3c7" }}>
                <Icon size={28} className="mb-4" style={{ color: theme?.primary || "#f59e0b" }} />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#f59e0b" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
