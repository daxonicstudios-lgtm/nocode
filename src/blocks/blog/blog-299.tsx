import type { BlockProps } from "@/blocks/types";

const DEFAULTS = [
  { title: "Builder Community Reaches Historic Milestone", description: "Over ten thousand websites now live on the platform, representing creators from twenty-eight countries across the African continent and beyond. The growth rate has accelerated dramatically in the past quarter.", label: "LEAD STORY", value: "By the Editorial Board" },
  { title: "New Components Library Expands Offerings", description: "The engineering team has shipped an additional two thousand blocks, covering every category from heroes to footers.", label: "TECHNOLOGY", value: "By the Tech Desk" },
  { title: "Mobile Usage Hits Record High", description: "Eighty-seven percent of platform users now access the builder from mobile devices, validating the mobile-first approach.", label: "DATA", value: "By Research Team" },
  { title: "African Developers Lead Innovation", description: "Creative solutions emerging from Lagos, Nairobi, and Accra are setting new standards for the global no-code community.", label: "SPOTLIGHT", value: "By Regional Correspondents" },
];

export default function Blog299(props: BlockProps) {
  const { theme, heading = "THE BUILDER GAZETTE", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fffbeb", color: theme?.foreground ?? "#292524" }} className="px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center border-y-2 py-3 mb-6" style={{ borderColor: theme?.foreground ?? "#292524" }}>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <div className="flex items-center justify-center gap-4 mt-2 text-xs opacity-40">
            <span>EST. 2024</span>
            <span>|</span>
            <span>{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
            <span>|</span>
            <span>FREE EDITION</span>
          </div>
        </div>
        <article className="mb-6 pb-6 border-b" style={{ borderColor: theme?.secondary ?? "#d6d3d1" }}>
          <span className="text-xs font-bold tracking-wider opacity-40">{String(featured?.label ?? "")}</span>
          <h3 className="text-2xl sm:text-3xl font-bold mt-1 leading-tight" style={{ fontFamily: "Georgia, serif" }}>{featured?.title}</h3>
          <p className="opacity-70 mt-2 leading-relaxed max-w-3xl" style={{ fontFamily: "Georgia, serif" }}>{featured?.description}</p>
          <p className="text-xs opacity-30 mt-2 italic">{String(featured?.value ?? "")}</p>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 sm:divide-x" style={{ borderColor: theme?.secondary ?? "#d6d3d1" }}>
          {rest.map((post, i) => (
            <article key={i} className={`cursor-pointer ${i > 0 ? "sm:pl-6" : ""}`}>
              <span className="text-xs font-bold tracking-wider opacity-40">{String(post.label ?? "")}</span>
              <h3 className="font-bold mt-1 leading-snug" style={{ fontFamily: "Georgia, serif" }}>{post.title}</h3>
              <p className="text-sm opacity-60 mt-1 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
