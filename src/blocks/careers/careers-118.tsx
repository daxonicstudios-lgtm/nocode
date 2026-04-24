import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Backend Engineer", description: "Node.js, PostgreSQL, APIs", label: "Remote" },
  { title: "Mobile Developer", description: "React Native, iOS, Android", label: "Lagos" },
  { title: "Data Analyst", description: "SQL, Python, Analytics", label: "Remote" },
];
export default function Careers118(props: BlockProps) {
  const { theme, heading = "Dark careers section", subheading = "Build the future with us", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
          <p className="mt-4 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-3">
          {items.slice(0, 5).map((job, i) => (
            <a key={i} href="#" className="flex items-center justify-between rounded-xl p-5 group" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div>
                <h3 className="font-semibold text-white">{job.title}</h3>
                <p className="text-xs opacity-40 mt-1">{job.description} · {String(job.label ?? "")}</p>
              </div>
              <ArrowRight className="w-4 h-4 opacity-30 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
