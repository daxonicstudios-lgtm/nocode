import type { BlockProps } from "@/blocks/types";
import { Users, ArrowUpRight, Clock, Database, TrendingUp } from "lucide-react";

const icons = [Users, ArrowUpRight, Clock, Database, TrendingUp];

export default function Features065(props: BlockProps) {
  const {
    theme,
    heading = "By the Numbers",
    subheading = "Trusted by thousands of growing businesses",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Active Users", value: "50K+", description: "Teams rely on our platform daily to manage their online presence." },
      { title: "Uptime", value: "99.99%", description: "Industry-leading reliability with redundant infrastructure worldwide." },
      { title: "Avg Response", value: "< 2min", description: "Our support team responds faster than any competitor in the market." },
      { title: "Data Processed", value: "10TB", description: "Petabytes of content served across millions of websites every month." },
      { title: "Revenue Growth", value: "3x", description: "Average revenue increase our customers see within the first year." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isStatCard = i < 3;
            return (
              <div key={i} className={`rounded-2xl p-6 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`} style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                {isStatCard ? (
                  <>
                    <Icon size={20} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                    <p className="text-3xl font-black mb-1" style={{ color: theme?.primary || "#6366f1" }}>{item.value}</p>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="opacity-60 text-sm">{item.description}</p>
                  </>
                ) : (
                  <>
                    <Icon size={20} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                  </>
                )}
              </div>
            );
          })}
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
