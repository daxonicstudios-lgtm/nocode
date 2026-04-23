import type { BlockProps } from "@/blocks/types";

export default function Cta002(props: BlockProps) {
  const { theme, heading = "Join 20,000+ creators", subheading = "Get a weekly email with tips, stories, and updates. No spam, no filler.", buttonText = "Subscribe", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto rounded-3xl p-10 sm:p-14 text-center" style={{ backgroundColor: theme?.primary ?? "#0ea5e9", color: "#fff" }}>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-3 text-base opacity-90">{subheading}</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-full text-sm text-gray-900 bg-white focus:outline-none" />
          <button className="px-6 py-3 rounded-full bg-white text-sm font-semibold" style={{ color: theme?.primary ?? "#0ea5e9" }} formAction={buttonUrl}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
