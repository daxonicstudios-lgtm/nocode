"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Image, Pen, Layout, Code2 } from "lucide-react";

export default function Hero276(props: BlockProps) {
  const {
    theme,
    heading = "Creative Without Limits",
    subheading = "A portfolio-driven agency for the digital age",
    bodyText = "We design, build, and launch digital products that people love. From brand identity to full-stack development.",
    buttonText = "See Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Brand Identity", description: "Visual systems that tell your story", icon: "pen" },
      { title: "Web Design", description: "Pixel-perfect responsive experiences", icon: "layout" },
      { title: "Development", description: "Scalable code, modern frameworks", icon: "code" },
      { title: "Photography", description: "Capturing moments that matter", icon: "image" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    pen: <Pen className="h-5 w-5" />,
    layout: <Layout className="h-5 w-5" />,
    code: <Code2 className="h-5 w-5" />,
    image: <Image className="h-5 w-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#1c1917" }}
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Masonry Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {/* Main Heading Block - spans 2 cols, 2 rows */}
          <div
            className="flex flex-col justify-center rounded-2xl p-8 sm:col-span-2 lg:row-span-2"
            style={{
              backgroundColor: theme?.primary ?? "#7c3aed",
              color: "#ffffff",
            }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest opacity-70">
              {subheading}
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-md text-sm leading-relaxed opacity-80">{bodyText}</p>
            <a
              href={buttonUrl}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Feature Cards in masonry layout */}
          {items.slice(0, 4).map((item, i) => {
            const heights = ["lg:row-span-1", "lg:row-span-2", "lg:row-span-2", "lg:row-span-1"];
            return (
              <div
                key={i}
                className={`group flex flex-col justify-between rounded-2xl border p-6 transition-shadow hover:shadow-lg ${heights[i]}`}
                style={{
                  backgroundColor: theme?.card ?? "#ffffff",
                  borderColor: theme?.border ?? "#e7e5e4",
                  color: theme?.cardForeground ?? theme?.foreground,
                }}
              >
                <div>
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#7c3aed"}12`,
                      color: theme?.primary ?? "#7c3aed",
                    }}
                  >
                    {iconMap[item.icon ?? ""] ?? <Layout className="h-5 w-5" />}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-50">{item.description}</p>
                </div>
                <div className="mt-4">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: theme?.primary ?? "#7c3aed" }}
                  >
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            );
          })}

          {/* Image / Visual Block */}
          <div className="relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="h-full min-h-[200px] w-full object-cover"
              />
            ) : (
              <div
                className="flex h-full min-h-[200px] items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${theme?.accent ?? "#f472b6"} 0%, ${theme?.primary ?? "#7c3aed"} 100%)`,
                }}
              >
                <div className="text-center text-white">
                  <p className="text-4xl font-extrabold">250+</p>
                  <p className="mt-1 text-sm font-medium opacity-80">Projects Completed</p>
                </div>
              </div>
            )}
          </div>

          {/* Clients / Trust Row */}
          <div
            className="flex items-center justify-center gap-6 rounded-2xl border p-6 sm:col-span-2"
            style={{
              backgroundColor: theme?.card ?? "#ffffff",
              borderColor: theme?.border ?? "#e7e5e4",
              color: theme?.cardForeground ?? theme?.foreground,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest opacity-30">
              Trusted by teams at
            </p>
            {["Acme", "Globex", "Initech", "Umbrella"].map((name, i) => (
              <span key={i} className="text-sm font-bold opacity-20">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
