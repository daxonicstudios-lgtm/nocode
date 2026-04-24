import type { BlockProps } from "@/blocks/types";

export default function Features160(props: BlockProps) {
  const {
    theme,
    heading = "What You Get",
    subheading = "Every feature designed with purpose",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Visual Editor", description: "Build pages with a powerful drag-and-drop interface." },
      { title: "Analytics Dashboard", description: "Track visits, clicks, and conversions in real time." },
      { title: "Email Capture", description: "Grow your list with embedded signup forms." },
      { title: "Mobile Optimization", description: "Every page looks perfect on phones and tablets." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">{heading}</h2>
        <p className="opacity-50 mb-14">{subheading}</p>
        <div className="divide-y" style={{ borderColor: theme?.foreground ? `${theme.foreground}12` : "#e5e7eb" }}>
          {items.map((item, i) => (
            <div key={i} className="py-6" style={{ borderColor: theme?.foreground ? `${theme.foreground}12` : "#e5e7eb" }}>
              <h3 className="text-base font-medium mb-1">{item.title}</h3>
              <p className="opacity-50 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-8 text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
        )}
      </div>
    </section>
  );
}
