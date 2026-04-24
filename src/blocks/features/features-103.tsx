import type { BlockProps } from "@/blocks/types";

export default function Features103(props: BlockProps) {
  const {
    theme,
    heading = "How It Works",
    subheading = "Three simple steps to get started",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Create an Account", description: "Sign up in under 60 seconds with just your email address." },
      { title: "Describe Your Vision", description: "Tell us what you need and our AI builds it instantly." },
      { title: "Go Live", description: "Publish your site to a custom domain with one click." },
      { title: "Grow Your Audience", description: "Use built-in analytics to optimize and scale." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 opacity-20" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
          {items.map((item, i) => (
            <div key={i} className="relative flex items-start mb-10 pl-16">
              <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
