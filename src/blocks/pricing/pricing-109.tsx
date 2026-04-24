import type { BlockProps } from "@/blocks/types";
import { Circle } from "lucide-react";

export default function Pricing109(props: BlockProps) {
  const {
    theme,
    heading = "Simple Pricing",
    subheading = "No contracts, no surprises",
    bodyText,
    buttonText = "Start Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Basic", value: "$10", description: "Email support, 2GB storage, 1 user" },
      { title: "Standard", value: "$25", description: "Chat support, 20GB storage, 5 users" },
      { title: "Premium", value: "$55", description: "Phone support, 200GB storage, unlimited users" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-60 mb-8">{subheading}</p>
        <div className="border rounded-2xl overflow-hidden divide-y" style={{ borderColor: theme?.accent }}>
          {items.map((item, i) => (
            <div key={i} className="p-5 text-left">
              <div className="flex items-center gap-2 mb-1">
                <Circle className="w-3 h-3 fill-current" style={{ color: theme?.primary }} />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-xs opacity-60 mb-3 ml-5">{item.description}</p>
              <div className="flex items-center justify-between ml-5">
                <span className="text-2xl font-bold" style={{ color: theme?.primary }}>{item.value}<span className="text-sm font-normal opacity-50">/mo</span></span>
                <a href={buttonUrl} className="text-sm font-medium rounded-lg px-4 py-1.5 text-white" style={{ backgroundColor: theme?.primary }}>
                  {buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
