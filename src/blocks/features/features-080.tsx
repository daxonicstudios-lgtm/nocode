import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Features080(props: BlockProps) {
  const {
    theme,
    heading = "See What You Can Build",
    subheading = "Real projects created by real users on our platform",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "E-commerce Store", description: "A fully functional online shop with cart, checkout, and inventory.", imageUrl: "https://placehold.co/400x280/6366f1/fff?text=Store" },
      { title: "Portfolio Site", description: "Showcase your work with elegant galleries and case studies.", imageUrl: "https://placehold.co/400x280/8b5cf6/fff?text=Portfolio" },
      { title: "SaaS Dashboard", description: "Data-rich admin panels with charts, tables, and user management.", imageUrl: "https://placehold.co/400x280/06b6d4/fff?text=Dashboard" },
      { title: "Blog Platform", description: "Content-first design with SEO, categories, and RSS feeds.", imageUrl: "https://placehold.co/400x280/f59e0b/fff?text=Blog" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div key={i} className={`relative ${i % 2 === 1 ? "sm:mt-8" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
                  <img src={item.imageUrl || "https://placehold.co/400x280"} alt={item.title || ""} className="w-full h-52 object-cover" />
                  <div className="p-5" style={{ backgroundColor: theme?.accent || "#f8fafc" }}>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="opacity-60 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
              {buttonText} <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
