import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Amara Okonkwo", description: "This platform saved my boutique during lockdown. I built my whole online store in an afternoon on my phone.", label: "Founder, Okonkwo Style" },
  { title: "David Mensah", description: "Our agency switched three clients over last month. The AI actually gets what we're asking for.", label: "Creative Director, Braze" },
  { title: "Lilian Adeyemi", description: "I don't write code. I don't want to. And yet I have a website that looks like my friend paid someone a lot of money for.", label: "Photographer" },
];

export default function Testimonials001(props: BlockProps) {
  const { theme, heading = "Loved by creators everywhere", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-14">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((t, i) => (
            <div key={i} className="p-7 rounded-2xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <p className="text-base leading-relaxed">&ldquo;{t.description}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full" style={{ backgroundColor: theme?.primary }} />
                <div>
                  <p className="font-semibold text-sm">{t.title}</p>
                  <p className="text-xs opacity-60">{t.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
