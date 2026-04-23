import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Wallet, Coins, Globe } from "lucide-react";

export default function Hero112(props: BlockProps) {
  const {
    theme,
    heading = "Trade the Future of Web3",
    subheading = "Decentralized, secure, and lightning-fast. Access 500+ tokens across 12 chains with the lowest fees in DeFi.",
    buttonText = "Launch App",
    buttonUrl = "#",
    secondaryButtonText = "Read Whitepaper",
    secondaryButtonUrl = "#",
    items = [
      { icon: "wallet", title: "$12B+", description: "Total Value Locked" },
      { icon: "coins", title: "2M+", description: "Active Wallets" },
      { icon: "globe", title: "12", description: "Chains Supported" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    wallet: <Wallet className="w-5 h-5" />,
    coins: <Coins className="w-5 h-5" />,
    globe: <Globe className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c0015", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
    >
      {/* Gradient background from purple to dark */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}15 0%, ${theme?.background ?? "#0c0015"} 50%, ${theme?.accent ?? "#06b6d4"}10 100%)`,
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-30"
        style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-20"
        style={{ backgroundColor: theme?.accent ?? "#06b6d4" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-10 border"
          style={{
            borderColor: `${theme?.primary ?? "#7c3aed"}50`,
            color: theme?.primary ?? "#7c3aed",
            boxShadow: `0 0 20px ${theme?.primary ?? "#7c3aed"}20`,
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: theme?.accent ?? "#06b6d4" }}
          />
          Live on Mainnet
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.05]">
          {heading.split(" ").map((word, i) => (
            <span key={i}>
              {i === heading.split(" ").length - 1 ? (
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}, ${theme?.accent ?? "#06b6d4"})`,
                  }}
                >
                  {word}
                </span>
              ) : (
                word
              )}{" "}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-base sm:text-lg opacity-50 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold hover:opacity-90 transition-all"
            style={{
              backgroundImage: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}, ${theme?.accent ?? "#06b6d4"})`,
              boxShadow: `0 0 30px ${theme?.primary ?? "#7c3aed"}40`,
            }}
          >
            <Wallet className="w-4 h-4" />
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/30 transition-colors"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Stats cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border backdrop-blur-sm"
              style={{
                borderColor: `${theme?.primary ?? "#7c3aed"}20`,
                backgroundColor: `${theme?.primary ?? "#7c3aed"}08`,
              }}
            >
              <div className="mb-3" style={{ color: theme?.accent ?? "#06b6d4" }}>
                {iconMap[item.icon ?? ""] ?? <Coins className="w-5 h-5" />}
              </div>
              <div className="text-2xl md:text-3xl font-bold">{item.title}</div>
              <div className="mt-1 text-sm opacity-40">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
