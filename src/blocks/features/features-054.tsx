import type { BlockProps } from "@/blocks/types";

export default function Features054(props: BlockProps) {
  const {
    theme,
    heading = "Our Process",
    subheading = "Simple steps to transform your online presence",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/500x340",
    items = [
      { title: "Discover", description: "We learn about your brand, goals, and audience to craft a tailored strategy." },
      { title: "Design", description: "Our team creates stunning visual concepts that align with your brand identity." },
      { title: "Develop", description: "We build a fast, responsive site using modern technology and best practices." },
      { title: "Deliver", description: "Launch day arrives with full testing, optimization, and ongoing support." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-16">
          {items.map((item, i) => {
            const isEven = i % 2 === 0;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
                <div className="w-full md:w-1/2">
                  <img src={imageUrl} alt={item.title || ""} className="w-full rounded-xl object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                  <span className="text-6xl font-black opacity-10" style={{ color: theme?.primary || "#6366f1" }}>{num}</span>
                  <h3 className="text-2xl font-bold -mt-4">{item.title}</h3>
                  <p className="opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
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
