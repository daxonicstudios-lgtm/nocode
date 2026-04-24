import type { BlockProps } from "@/blocks/types";
import { RefreshCcw, RotateCcw, ArrowLeftRight, CheckCircle } from "lucide-react";

const icons = [RefreshCcw, RotateCcw, ArrowLeftRight, CheckCircle];

export default function Features269(props: BlockProps) {
  const {
    theme,
    heading = "Hassle-Free Returns",
    subheading = "A smooth return process builds trust and repeat business",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Easy Returns Portal", description: "Customers initiate returns in two clicks with pre-paid shipping labels." },
      { title: "Instant Refunds", description: "Refunds processed the moment your warehouse scans the return." },
      { title: "Exchange First", description: "Encourage exchanges over refunds with smart product suggestions." },
      { title: "Quality Checks", description: "Automated inspection workflows ensure returned items are properly graded." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4 rounded-lg border p-5" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{ backgroundColor: theme?.primary || "#059669" }}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} style={{ color: theme?.primary || "#059669" }} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#059669" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
