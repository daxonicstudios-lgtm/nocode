import type { BlockProps } from "@/blocks/types";
import { Star, Download, Shield } from "lucide-react";

export default function Features078(props: BlockProps) {
  const {
    theme,
    heading = "Available Everywhere",
    subheading = "Download our app on your favorite platform",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/260x520",
    items = [
      { title: "Instant Sync", description: "Changes on your phone appear on your desktop in real time.", imageUrl: "https://placehold.co/260x520/6366f1/fff?text=Sync" },
      { title: "Offline Mode", description: "Edit pages and manage content even without an internet connection.", imageUrl: "https://placehold.co/260x520/8b5cf6/fff?text=Offline" },
      { title: "Secure Access", description: "Biometric login and encrypted storage keep your data safe on every device.", imageUrl: "https://placehold.co/260x520/06b6d4/fff?text=Secure" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-end justify-center">
          {items.map((item, i) => (
            <div key={i} className="text-center flex-1 max-w-xs mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-lg mb-5 mx-auto w-52" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                <img src={item.imageUrl || imageUrl} alt={item.title || ""} className="w-full object-cover" />
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="opacity-60 text-sm">{item.description}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={14} fill={theme?.primary || "#f59e0b"} color={theme?.primary || "#f59e0b"} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
              <Download size={18} /> {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
