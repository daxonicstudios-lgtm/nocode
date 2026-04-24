import type { BlockProps } from "@/blocks/types";
import { Box, Database, Server, Cloud, Lock, Cpu } from "lucide-react";

const icons = [Box, Database, Server, Cloud, Lock, Cpu];

export default function Features090(props: BlockProps) {
  const {
    theme,
    heading = "Infrastructure Features",
    subheading = "Enterprise-grade infrastructure for modern applications",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Containers", description: "Isolated containerized environments for each project." },
      { title: "Managed Database", description: "Auto-scaling Postgres with point-in-time recovery." },
      { title: "Edge Functions", description: "Run server logic at 200+ locations worldwide." },
      { title: "Object Storage", description: "Unlimited file storage with CDN-backed delivery." },
      { title: "Access Control", description: "Row-level security and API key management." },
      { title: "Compute", description: "Serverless functions that scale to millions of requests." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes borderDraw090 {
          from { clip-path: inset(0 100% 100% 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        .border-draw-090 { position: relative; }
        .border-draw-090::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid ${primary};
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .border-draw-090:hover::after {
          opacity: 1;
          animation: borderDraw090 0.5s ease-out;
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="border-draw-090 rounded-2xl p-6 cursor-pointer" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                <Icon size={28} className="mb-4" style={{ color: primary }} />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
