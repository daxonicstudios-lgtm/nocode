"use client";
import { useState, useEffect } from "react";
import type { BlockProps } from "@/blocks/types";
import { Terminal, Type, AlignLeft } from "lucide-react";

const icons = [Terminal, Type, AlignLeft];

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setDisplayed(text.slice(0, idx));
      if (idx >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span>{displayed}<span className="animate-pulse">|</span></span>;
}

export default function Features320(props: BlockProps) {
  const {
    theme,
    heading = "Built by Developers, for Everyone",
    subheading = "Watch each feature describe itself",
    items = [
      { title: "CLI Tools", description: "Manage your entire project from the command line with powerful shortcuts." },
      { title: "Rich Typography", description: "Beautiful font pairing and sizing that works on every device." },
      { title: "Content Blocks", description: "Pre-built sections you can drop in and customize in seconds." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 text-left" style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#f9fafb" }}>
                <Icon size={24} style={{ color: theme?.primary || "#6366f1" }} className="mb-3" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed min-h-[3rem]">
                  <TypewriterText text={item.description || ""} delay={i * 800} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
