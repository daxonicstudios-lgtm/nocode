import type { BlockProps } from "@/blocks/types";
import { Wallet, TrendingUp, PieChart, Shield, Bell, ArrowUpDown } from "lucide-react";

const icons = [Wallet, TrendingUp, PieChart, Shield, Bell, ArrowUpDown];

export default function Features100(props: BlockProps) {
  const {
    theme,
    heading = "Finance & Investment",
    subheading = "Professional-grade tools for modern financial services",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Portfolio Dashboard", description: "Track holdings, asset allocation, and performance across all accounts in real time." },
      { title: "Market Analytics", description: "Interactive charts with technical indicators, price alerts, and trend analysis." },
      { title: "Risk Assessment", description: "Visual risk scoring with diversification recommendations and stress testing." },
      { title: "Compliance Engine", description: "Automated KYC/AML checks, regulatory reporting, and audit trail generation." },
      { title: "Smart Alerts", description: "Custom notifications for price movements, portfolio thresholds, and market events." },
      { title: "Trading Interface", description: "Execute trades with real-time quotes, order books, and position management." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#e2e8f0" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4" style={{ backgroundColor: `${theme?.primary || "#22c55e"}22`, color: theme?.primary || "#22c55e" }}>Finance</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6 hover:border-opacity-60 transition-colors" style={{ borderColor: `${theme?.primary || "#22c55e"}30`, backgroundColor: `${theme?.primary || "#22c55e"}08` }}>
                <Icon size={24} className="mb-4" style={{ color: theme?.primary || "#22c55e" }} />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg font-medium" style={{ backgroundColor: theme?.primary || "#22c55e", color: "#0f172a" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
