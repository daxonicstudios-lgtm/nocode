import type { BlockProps } from "@/blocks/types";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Senior Frontend Engineer", description: "Engineering", label: "Remote" },
  { title: "Product Designer", description: "Design", label: "Lagos, NG" },
  { title: "Growth Marketing Manager", description: "Marketing", label: "Remote" },
  { title: "DevOps Engineer", description: "Engineering", label: "Berlin, DE" },
];
export default function Careers030(props: BlockProps) {
  const { theme, heading = "Job listing with details", subheading = "Join our team and help build the future", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-3">
          {items.slice(0, 6).map((job, i) => (
            <a key={i} href="#" className="flex items-center gap-4 rounded-xl border p-5 group hover:shadow-sm transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex-1">
                <h3 className="font-semibold group-hover:underline">{job.title}</h3>
                <div className="flex items-center gap-3 mt-1 text-xs opacity-50">
                  <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.description}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {String(job.label ?? "")}</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 opacity-30 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
