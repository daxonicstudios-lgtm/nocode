import type { BlockProps } from "@/blocks/types";

export default function Cta272(props: BlockProps) {
  const { theme, heading = "Join thousands of happy customers", subheading = "Get started in minutes, not hours.", buttonText = "Get Started", buttonUrl = "#", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 opacity-60 text-lg">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-block px-8 py-3 rounded-xl font-bold text-white text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </a>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-video rounded-2xl" style={{ backgroundColor: theme?.accent ?? "#e2e8f0" }}>
            {imageUrl && <img src={imageUrl} alt="" className="w-full h-full object-cover rounded-2xl" />}
          </div>
        </div>
      </div>
    </section>
  );
}
