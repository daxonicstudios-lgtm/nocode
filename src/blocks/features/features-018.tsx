import type { BlockProps } from "@/blocks/types";

const defaults = [
  {
    title: "Visual Page Builder",
    description: "Drag and drop sections to compose full pages in minutes. No coding required.",
    imageUrl: "https://placehold.co/600x340/e2e8f0/64748b?text=Page+Builder",
  },
  {
    title: "Template Marketplace",
    description: "Browse hundreds of professionally designed templates sorted by industry and style.",
    imageUrl: "https://placehold.co/600x340/e2e8f0/64748b?text=Templates",
  },
  {
    title: "One-Click Publish",
    description: "Go live instantly with custom domains, SSL certificates, and global CDN included.",
    imageUrl: "https://placehold.co/600x340/e2e8f0/64748b?text=Publish",
  },
  {
    title: "Form & Survey Builder",
    description: "Collect leads and feedback with conditional logic forms that integrate with your CRM.",
    imageUrl: "https://placehold.co/600x340/e2e8f0/64748b?text=Forms",
  },
];

export default function Features018(props: BlockProps) {
  const {
    theme,
    heading = "See It in Action",
    subheading = "A visual walkthrough of our core features",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${theme?.accent || "#e5e7eb"}` }}>
              <div className="w-full aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={item.imageUrl || `https://placehold.co/600x340/e2e8f0/64748b?text=Feature+${i + 1}`}
                  alt={item.title || "Feature"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
