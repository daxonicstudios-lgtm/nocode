import type { BlockProps } from "@/blocks/types";

export default function Pricing123(props: BlockProps) {
  const {
    theme,
    heading = "Our Plans",
    subheading = "Simple pricing, powerful features",
    bodyText,
    buttonText = "Choose",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Free", value: "$0", description: "1 project, community support" },
      { title: "Growth", value: "$24", description: "10 projects, live chat" },
      { title: "Business", value: "$59", description: "Unlimited, phone support" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group rounded-xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border" style={{ borderColor: theme?.accent }}>
              <div className="w-full h-1 rounded-full mb-6 transition-all duration-300 group-hover:h-2" style={{ backgroundColor: theme?.primary }} />
              <h3 className="font-bold text-xl mb-1">{item.title}</h3>
              <p className="text-sm opacity-60 mb-6">{item.description}</p>
              <p className="text-4xl font-extrabold mb-1" style={{ color: theme?.primary }}>
                {item.value}<span className="text-base font-normal opacity-50">/mo</span>
              </p>
              <a href={buttonUrl} className="mt-6 block text-center rounded-lg py-3 font-semibold border-2 transition-colors duration-300 group-hover:text-white" style={{ borderColor: theme?.primary, color: theme?.primary, backgroundColor: "transparent" }}>
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
