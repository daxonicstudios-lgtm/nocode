import type { BlockProps } from "@/blocks/types";

export default function Cta003(props: BlockProps) {
  const { theme, heading = "Your website. Live in 10 minutes.", buttonText = "Get started", buttonUrl = "#", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-3xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
        <div className="p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{heading}</h2>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: theme?.primary ?? "#000" }}>
            {buttonText} →
          </a>
        </div>
        <div className="aspect-[4/3] md:aspect-auto md:h-full" style={{ backgroundColor: theme?.secondary ?? "#f3f4f6" }}>
          {imageUrl ? <img src={imageUrl} alt="" className="w-full h-full object-cover" /> : null}
        </div>
      </div>
    </section>
  );
}
