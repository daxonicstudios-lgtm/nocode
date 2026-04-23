import type { BlockProps } from "@/blocks/types";
import { Download, ArrowRight, Smartphone } from "lucide-react";

export default function Hero229(props: BlockProps) {
  const {
    theme,
    heading = "Your Productivity, Reimagined",
    subheading = "Now in Beta",
    bodyText = "The all-in-one workspace that replaces your scattered tools. Tasks, docs, and collaboration — finally in one place.",
    buttonText = "Download App",
    buttonUrl = "#",
    secondaryButtonText = "See How It Works",
    secondaryButtonUrl = "#",
    items = [
      { title: "Task Management" },
      { title: "Real-time Docs" },
      { title: "Team Chat" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8f9fb", color: theme?.foreground ?? "#111827" }}
      className="min-h-screen flex items-center justify-center px-6 py-16 md:px-12 overflow-hidden"
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes skeletonToContent {
          0% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
        @keyframes contentReveal {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero229-skeleton {
          background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
          background-size: 400px 100%;
          animation: shimmer 1.5s linear infinite, skeletonToContent 0.4s ease-out 1.8s forwards;
          border-radius: 8px;
        }
        .hero229-skeleton-dark {
          background: linear-gradient(90deg, #d1d5db 25%, #e5e7eb 50%, #d1d5db 75%);
          background-size: 400px 100%;
          animation: shimmer 1.5s linear infinite, skeletonToContent 0.4s ease-out 1.8s forwards;
          border-radius: 6px;
        }
        .hero229-content-1 { animation: contentReveal 0.6s ease-out 2.0s forwards; opacity: 0; }
        .hero229-content-2 { animation: contentReveal 0.6s ease-out 2.15s forwards; opacity: 0; }
        .hero229-content-3 { animation: contentReveal 0.6s ease-out 2.3s forwards; opacity: 0; }
        .hero229-content-4 { animation: contentReveal 0.6s ease-out 2.45s forwards; opacity: 0; }
        .hero229-content-5 { animation: contentReveal 0.6s ease-out 2.6s forwards; opacity: 0; }
        .hero229-phone { animation: contentReveal 0.8s ease-out 2.4s forwards; opacity: 0; }
      `}</style>

      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content with skeleton overlay */}
          <div className="relative">
            {/* Skeleton placeholders (visible first, then fade) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="hero229-skeleton w-24 h-6 mb-6" />
              <div className="hero229-skeleton w-full h-12 mb-3" />
              <div className="hero229-skeleton w-3/4 h-12 mb-6" />
              <div className="hero229-skeleton-dark w-full h-5 mb-2" />
              <div className="hero229-skeleton-dark w-5/6 h-5 mb-8" />
              <div className="flex gap-3">
                <div className="hero229-skeleton w-36 h-12" />
                <div className="hero229-skeleton w-36 h-12" />
              </div>
            </div>

            {/* Actual content (hidden first, then appears) */}
            <div>
              <div className="hero229-content-1 mb-5">
                <span
                  className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: (theme?.primary ?? "#10b981") + "18", color: theme?.primary ?? "#10b981" }}
                >
                  {subheading}
                </span>
              </div>

              <h1 className="hero229-content-2 text-3xl md:text-5xl font-bold leading-tight mb-5">
                {heading}
              </h1>

              <p className="hero229-content-3 text-base md:text-lg opacity-55 leading-relaxed mb-8 max-w-md">
                {bodyText}
              </p>

              <div className="hero229-content-4 flex flex-wrap gap-3 mb-10">
                <a
                  href={buttonUrl}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: theme?.primary ?? "#10b981" }}
                >
                  <Download className="w-4 h-4" />
                  {buttonText}
                </a>
                <a
                  href={secondaryButtonUrl}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium border transition-colors"
                  style={{ borderColor: theme?.border ?? "#d1d5db" }}
                >
                  {secondaryButtonText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Feature pills */}
              <div className="hero229-content-5 flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium border"
                    style={{ borderColor: theme?.border ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: theme?.primary ?? "#10b981" }} />
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="hero229-phone flex justify-center">
            <div
              className="relative w-64 md:w-72 rounded-[2.5rem] border-[6px] p-4 shadow-2xl"
              style={{
                borderColor: theme?.foreground ?? "#1f2937",
                backgroundColor: theme?.background ?? "#ffffff",
              }}
            >
              {/* Notch */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-2xl"
                style={{ backgroundColor: theme?.foreground ?? "#1f2937" }}
              />
              {/* Screen content */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-5 h-5" style={{ color: theme?.primary ?? "#10b981" }} />
                  <span className="text-sm font-bold">Workspace</span>
                </div>
                {["Design Sprint", "Q2 Planning", "User Research"].map((task, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl border text-xs"
                    style={{ borderColor: theme?.border ?? "#e5e7eb" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{task}</span>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: (theme?.primary ?? "#10b981") + "20" }}
                      >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme?.primary ?? "#10b981" }} />
                      </span>
                    </div>
                  </div>
                ))}
                <div
                  className="mt-4 p-3 rounded-xl text-center text-xs font-medium"
                  style={{ backgroundColor: (theme?.primary ?? "#10b981") + "12", color: theme?.primary ?? "#10b981" }}
                >
                  + New Task
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
