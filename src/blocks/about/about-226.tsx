import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "10K+", description: "Happy Users" },
  { title: "50+", description: "Countries" },
  { title: "15K+", description: "Sites Built" },
  { title: "99.9%", description: "Uptime" },
];

export default function About226(props: BlockProps) {
  const { theme, heading = "The Team Behind It", bodyText = "We are a team of designers, engineers, and dreamers building the future of web creation. Our platform empowers anyone to build a professional website in minutes.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 text-lg opacity-70">{bodyText}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.slice(0, 4).map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
              <div className="text-3xl font-black" style={{ color: theme?.primary }}>{stat.title}</div>
              <div className="text-sm opacity-50 mt-1">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
