import type { BlockProps } from "@/blocks/types";

export default function Pricing125(props: BlockProps) {
  const {
    theme,
    heading = "Pricing",
    subheading = "Pick a plan that works for you",
    bodyText,
    buttonText = "Subscribe",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Essential", value: "$9", description: "Core features included" },
      { title: "Advanced", value: "$29", description: "Everything plus integrations" },
      { title: "Ultimate", value: "$69", description: "White-label, dedicated support" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-10 relative border" style={{ borderColor: theme?.accent }}>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-60 mb-4">{item.description}</p>
              <p className="text-5xl font-black mb-1 transition-colors" style={{ color: theme?.primary }}>{item.value}</p>
              <p className="text-sm opacity-40 mb-6">per month</p>
              <a href={buttonUrl} className="block rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: theme?.primary }}>
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
