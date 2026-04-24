import type { BlockProps } from "@/blocks/types";
export default function IndPhotography039(props: BlockProps) {
  const { theme, heading = "Photography section", subheading = "Professional photography solutions", buttonText = "Learn More", buttonUrl = "#" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 opacity-60 leading-relaxed">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-block px-6 py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
        </div>
        <div className="flex-1 w-full aspect-[4/3] rounded-2xl" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }} />
      </div>
    </section>
  );
}
