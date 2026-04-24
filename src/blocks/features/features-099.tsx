import type { BlockProps } from "@/blocks/types";
import { Camera, CalendarCheck, Wand2, Image, Share2, CreditCard } from "lucide-react";

const icons = [Camera, CalendarCheck, Wand2, Image, Share2, CreditCard];

export default function Features099(props: BlockProps) {
  const {
    theme,
    heading = "Photography Platform",
    subheading = "Showcase your art and grow your photography business",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Portfolio Galleries", description: "Stunning, customizable galleries with lightbox viewing, categories, and password protection." },
      { title: "Session Booking", description: "Clients book shoots online with package selection, deposits, and calendar sync." },
      { title: "Photo Editing Suite", description: "Basic editing tools for cropping, filters, watermarks, and batch processing." },
      { title: "Client Proofing", description: "Share galleries for client review with favorites selection and download permissions." },
      { title: "Social Integration", description: "One-click sharing to social media with optimized image sizes and watermarks." },
      { title: "Online Store", description: "Sell prints, digital downloads, and licensing directly from your gallery pages." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.primary || "#ec4899" }}>Photography</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="group rounded-2xl p-6 transition-all hover:shadow-lg cursor-pointer" style={{ backgroundColor: theme?.accent || "#fdf2f8" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${theme?.primary || "#ec4899"}20` }}>
                  <Icon size={22} style={{ color: theme?.primary || "#ec4899" }} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#ec4899" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
