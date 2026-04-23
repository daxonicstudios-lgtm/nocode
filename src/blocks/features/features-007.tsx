import type { BlockProps } from "@/blocks/types";

const placeholderColors = ["#c7d2fe", "#fde68a", "#bbf7d0", "#fbcfe8"];

export default function Features007(props: BlockProps) {
  const {
    theme,
    heading = "What We Offer",
    subheading = "Comprehensive solutions for modern businesses",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Website Builder", description: "Drag-and-drop simplicity with professional results.", imageUrl: "" },
      { title: "E-Commerce", description: "Sell products and accept payments on day one.", imageUrl: "" },
      { title: "SEO Tools", description: "Rank higher with built-in optimization features.", imageUrl: "" },
      { title: "Mobile App", description: "Manage your business from your phone, anywhere.", imageUrl: "" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: theme?.accent ? `${theme.accent}22` : "#e5e7eb" }}>
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title || ""} className="w-full h-40 object-cover" />
              ) : (
                <div className="w-full h-40 flex items-center justify-center text-2xl font-bold opacity-30" style={{ backgroundColor: placeholderColors[i % placeholderColors.length] }}>
                  {item.title?.charAt(0) || "?"}
                </div>
              )}
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
