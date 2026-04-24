import type { BlockProps } from "@/blocks/types";

export default function Content038(props: BlockProps) {
  const { theme, heading = "Our Approach", bodyText = "We started with a simple question: why is building a website still so hard? After years of research, we built a platform that anyone can use — no coding, no design skills, no hassle." } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-6 text-lg leading-relaxed opacity-70">{bodyText}</p>
          <div className="mt-8 h-1 w-16 rounded-full" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
        </div>
      </div>
    </section>
  );
}
