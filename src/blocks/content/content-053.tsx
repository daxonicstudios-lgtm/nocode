import type { BlockProps } from "@/blocks/types";

export default function Content053(props: BlockProps) {
  const { theme, heading = "About Our Work", subheading = "Making the web accessible to all.", bodyText = "Our mission is to democratize web design. We provide the tools, templates, and AI assistance needed to build professional websites in minutes.", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 text-lg opacity-70 leading-relaxed">{bodyText}</p>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-[4/3] rounded-2xl" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
            {imageUrl && <img src={imageUrl} alt="" className="w-full h-full object-cover rounded-2xl" />}
          </div>
        </div>
      </div>
    </section>
  );
}
