import type { BlockProps } from "@/blocks/types";
import { Heart, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero160(props: BlockProps) {
  const {
    theme,
    heading = "Compassionate Legal Support for Your Family",
    subheading = "Guiding You Through Life's Most Sensitive Transitions",
    bodyText = "Whether you're navigating divorce, custody arrangements, adoption, or estate planning, our family law attorneys provide the empathetic, personalized counsel you deserve. Every family is unique, and so is our approach.",
    buttonText = "Book a Confidential Consultation",
    buttonUrl = "#",
    secondaryButtonText = "Learn About Our Approach",
    secondaryButtonUrl = "#",
    items = [
      { title: "Divorce & Separation", description: "Equitable resolution with dignity" },
      { title: "Child Custody", description: "Protecting your children's best interests" },
      { title: "Adoption", description: "Building families through legal guidance" },
      { title: "Estate Planning", description: "Securing your family's future" },
    ],
  } = props;

  const bg = theme?.background ?? "#f7fafb";
  const fg = theme?.foreground ?? "#1a2e3b";
  const primary = theme?.primary ?? "#0d9488";
  const accent = theme?.accent ?? "#5eead4";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Soft gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${primary}08, transparent 60%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${primary}15` }}
              >
                <Heart className="w-5 h-5" style={{ color: primary }} />
              </div>
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: primary }}
              >
                Family Law Attorneys
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
              {heading}
            </h1>

            <p
              className="text-lg sm:text-xl font-medium mb-4"
              style={{ color: primary }}
            >
              {subheading}
            </p>

            <p className="text-base opacity-60 max-w-lg mb-10 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-base font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: primary, color: "#ffffff" }}
              >
                <Users className="w-5 h-5" />
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-medium border transition-colors hover:opacity-80"
                style={{ borderColor: `${primary}44`, color: primary }}
              >
                {secondaryButtonText}
              </a>
            </div>

            {/* Reassurance note */}
            <p className="text-sm opacity-40 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: primary }} />
              All consultations are 100% confidential and judgment-free
            </p>
          </div>

          {/* Right — services cards */}
          <div className="space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl flex items-start gap-5 transition-all hover:shadow-md"
                style={{
                  backgroundColor: i === 0 ? `${primary}10` : `${fg}04`,
                  border: `1px solid ${i === 0 ? `${primary}25` : `${fg}08`}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{
                    backgroundColor: i === 0 ? `${primary}20` : `${fg}08`,
                  }}
                >
                  <Heart
                    className="w-5 h-5"
                    style={{ color: i === 0 ? primary : `${fg}88` }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-50">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
