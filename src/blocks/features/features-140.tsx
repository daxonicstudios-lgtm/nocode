"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Check } from "lucide-react";

export default function Features140(props: BlockProps) {
  const {
    theme,
    heading = "How It All Works",
    subheading = "Step through our process one feature at a time",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Describe Your Vision", description: "Tell our AI what kind of website you need. Be as detailed or brief as you like." },
      { title: "AI Builds Your Site", description: "Our engine selects the perfect components and assembles a professional layout in seconds." },
      { title: "Customize Everything", description: "Tweak colors, fonts, images, and content using an intuitive visual editor." },
      { title: "Preview & Publish", description: "Review your site on every device size, then publish with one click." },
    ],
  } = props;

  const [step, setStep] = useState(0);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex justify-center gap-2 mb-8">
          {items.map((_, i) => (
            <button key={i} onClick={() => setStep(i)} className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors" style={i <= step ? { backgroundColor: theme?.primary || "#6366f1", color: "#fff" } : { backgroundColor: theme?.accent || "#e5e7eb" }}>
              {i < step ? <Check size={16} /> : i + 1}
            </button>
          ))}
        </div>
        <div className="rounded-xl border p-8 text-center" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          <span className="text-xs font-bold uppercase tracking-wide opacity-50">Step {step + 1} of {items.length}</span>
          <h3 className="text-2xl font-bold mt-2 mb-3">{items[step]?.title}</h3>
          <p className="opacity-70 text-sm max-w-lg mx-auto mb-6">{items[step]?.description}</p>
          <div className="flex justify-center gap-3">
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="px-5 py-2 rounded-lg text-sm font-medium border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                Previous
              </button>
            )}
            {step < items.length - 1 ? (
              <button onClick={() => setStep(step + 1)} className="px-5 py-2 rounded-lg text-sm font-medium text-white flex items-center gap-2" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                Next <ArrowRight size={14} />
              </button>
            ) : buttonText ? (
              <a href={buttonUrl} className="px-5 py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
