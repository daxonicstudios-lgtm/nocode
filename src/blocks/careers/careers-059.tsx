import type { BlockProps } from "@/blocks/types";
import { MapPin, Clock } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Full Stack Developer", description: "Build and maintain our core platform.", label: "Full-time" },
  { title: "UI/UX Designer", description: "Design beautiful, intuitive interfaces.", label: "Full-time" },
  { title: "Customer Success Lead", description: "Help our users succeed and grow.", label: "Part-time" },
];
export default function Careers059(props: BlockProps) {
  const { theme, heading = "Career cards grid", subheading = "We're hiring!", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 6).map((job, i) => (
            <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p className="mt-2 text-sm opacity-60">{job.description}</p>
              <div className="mt-4 flex items-center gap-3 text-xs opacity-40">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {String(job.label ?? "")}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Remote</span>
              </div>
              <a href="#" className="mt-4 inline-block text-sm font-semibold" style={{ color: theme?.primary }}>Apply Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
