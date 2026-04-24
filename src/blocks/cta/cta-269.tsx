import type { BlockProps } from "@/blocks/types";
import { Users } from "lucide-react";

export default function Cta269(props: BlockProps) {
  const {
    theme,
    heading = "Join the Community",
    subheading = "Used and loved by the best teams on the planet.",
    buttonText = "Join Now",
    buttonUrl = "#",
    items = [
      { title: "Basecamp" }, { title: "Linear" }, { title: "Vercel" },
      { title: "Supabase" }, { title: "Railway" }, { title: "Resend" },
    ],
  } = props;

  return (
    <section className="px-4 py-20" style={{ background: `linear-gradient(180deg, ${theme?.background ?? "#ffffff"} 0%, ${theme?.accent ?? "#f0f9ff"} 100%)`, color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-3xl mx-auto text-center">
        <Users className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary ?? "#0ea5e9" }} />
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {items.map((item, i) => (
            <div key={i} className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-bold opacity-40 uppercase">{item.title}</span>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
