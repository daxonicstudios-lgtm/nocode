import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const DEFAULTS = [
  { title: "Why Every Startup Needs a Website", description: "Social media is not enough. Your website is your home base online.", label: "Opinion", value: "Apr 20" },
  { title: "Custom Animations Tutorial", description: "Add subtle motion to your blocks with CSS transitions.", label: "Tutorial", value: "Apr 18" },
  { title: "Team Pricing Announced", description: "Collaborate with your team on shared projects.", label: "News", value: "Apr 15" },
  { title: "Image Lazy Loading Explained", description: "Speed up page load by deferring offscreen images.", label: "Performance", value: "Apr 12" },
  { title: "Dark Mode Implementation", description: "Give users a choice with a theme toggle.", label: "Feature", value: "Apr 10" },
];

export default function Blog285(props: BlockProps) {
  const { theme, heading = "The Blog", subheading = "Insights, tutorials, and news from our team.", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
            <p className="opacity-60 mt-2">{subheading}</p>
            <div className="mt-6 p-5 rounded-xl" style={{ backgroundColor: theme?.accent ?? "#f9fafb" }}>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>Featured</span>
              <h3 className="text-lg font-bold mt-2">{featured?.title}</h3>
              <p className="opacity-70 text-sm mt-1">{featured?.description}</p>
            </div>
          </div>
          <div className="lg:col-span-3 divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            {rest.map((post, i) => (
              <article key={i} className="flex items-center justify-between gap-4 py-4 cursor-pointer group">
                <div>
                  <span className="text-xs opacity-40">{String(post.value ?? "")}</span>
                  <h3 className="font-semibold group-hover:underline">{post.title}</h3>
                  <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-30 shrink-0" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
