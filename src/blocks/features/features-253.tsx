import type { BlockProps } from "@/blocks/types";
import { Plug, ArrowRight, Link2, Workflow } from "lucide-react";

const icons = [Plug, Link2, Workflow, Plug];

export default function Features253(props: BlockProps) {
  const {
    theme,
    heading = "Connect Everything",
    subheading = "Seamless integrations with the tools your team already uses",
    bodyText,
    buttonText = "See All Integrations",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Slack", description: "Get instant notifications, run commands, and sync channels effortlessly." },
      { title: "Salesforce", description: "Bi-directional CRM sync keeps contacts and deals always up to date." },
      { title: "Zapier", description: "Connect to 5,000+ apps without writing a single line of code." },
      { title: "Stripe", description: "Automated billing, invoices, and subscription management built in." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px opacity-20" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="relative text-center">
                  <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center border-2" style={{ borderColor: theme?.primary || "#6366f1", backgroundColor: theme?.background || "#fff" }}>
                    <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                  </div>
                  {i < items.length - 1 && (
                    <ArrowRight size={16} className="hidden lg:block absolute top-5 -right-3 z-10" style={{ color: theme?.primary || "#6366f1" }} />
                  )}
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
