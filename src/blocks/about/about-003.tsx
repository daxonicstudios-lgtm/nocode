import type { BlockProps } from "@/blocks/types";

export default function About003(props: BlockProps) {
  const { theme, heading = "From a kitchen table in Lagos", subheading = "Our mission", bodyText = "Our founder, Amara, built the first version of this product on her laptop between freelance gigs. She needed a website for her own design studio, couldn't afford an agency, and kept running into platforms built for people in Silicon Valley, not Surulere. So she started building.", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#f3f4f6" }}>
            {imageUrl ? <img src={imageUrl} alt="" className="w-full h-full object-cover" /> : null}
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-medium uppercase tracking-widest opacity-60 mb-3">{subheading}</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{heading}</h2>
          <p className="mt-6 text-base opacity-75 leading-relaxed">{bodyText}</p>
        </div>
      </div>
    </section>
  );
}
