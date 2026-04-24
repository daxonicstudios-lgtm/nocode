import type { BlockProps } from "@/blocks/types";
import { Calendar, Clock, User } from "lucide-react";

export default function Blog091(props: BlockProps) {
  const {
    theme,
    heading = "Building Accessible Web Applications from Scratch",
    subheading = "A comprehensive guide to WCAG compliance, semantic HTML, and inclusive design patterns.",
    bodyText = "Accessibility is not an afterthought — it is a fundamental aspect of quality software. In this guide, we walk through the principles of accessible design, from proper heading hierarchies and landmark regions to keyboard navigation and screen reader testing. You will learn how to audit your existing application, prioritize fixes, and build accessibility into your development workflow from day one. We also cover ARIA attributes, focus management in single-page applications, and automated testing tools that catch common issues before they reach production.",
    imageUrl,
    items = [{ label: "Apr 18, 2026", value: "12 min read", title: "Amina Diallo" }],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <article className="max-w-3xl mx-auto">
        <div className="aspect-[2/1] rounded-2xl mb-8" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb", backgroundImage: imageUrl ? `url(${imageUrl})` : undefined, backgroundSize: "cover" }} />
        <div className="flex flex-wrap items-center gap-4 text-xs opacity-50 mb-4">
          <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{items[0]?.title}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{String(items[0]?.label)}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{String(items[0]?.value)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{heading}</h1>
        <p className="mt-4 text-lg opacity-70 leading-relaxed">{subheading}</p>
        <div className="h-px my-8" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <div className="text-base leading-relaxed opacity-80 whitespace-pre-line">{bodyText}</div>
      </article>
    </section>
  );
}
