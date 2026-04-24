import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Why Every Business Needs a Website in 2026", description: "The business case for having an online presence, even if you sell entirely offline.", label: "Business", imageUrl: "", url: "#" },
  { title: "Typography Tips for Better Readability", description: "Small font decisions that make a big difference in how users consume your content.", label: "Design", imageUrl: "", url: "#" },
  { title: "Automating Your Workflow With Webhooks", description: "Connect your website to the rest of your tools without writing backend code.", label: "Tutorial", imageUrl: "", url: "#" },
  { title: "Customer Spotlight: Nairobi Tech Hub", description: "How a coworking space built their member portal in a single afternoon.", label: "Case Study", imageUrl: "", url: "#" },
];

export default function Blog013(props: BlockProps) {
  const { theme, heading = "Top Stories", subheading = "The posts our readers love most.", items = DEFAULT_ITEMS } = props;

  const featured = items[0];
  const rest = items.slice(1, 4);

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <a href={featured?.url ?? "#"} className="group block rounded-2xl overflow-hidden mb-8" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {featured?.imageUrl && <img src={featured.imageUrl} alt={featured.title ?? ""} className="w-full h-full object-cover" />}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(featured?.label ?? "")}</span>
              <h3 className="mt-3 text-2xl font-bold group-hover:underline">{featured?.title}</h3>
              <p className="mt-3 opacity-70">{featured?.description}</p>
            </div>
          </div>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block rounded-xl p-5" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              <h3 className="mt-2 font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
