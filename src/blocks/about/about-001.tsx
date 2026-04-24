import type { BlockProps } from "@/blocks/types";

export default function About001(props: BlockProps) {
  const { theme, heading = "About us", subheading = "Our story", bodyText = "We started this company in 2019 with a simple belief: great tools shouldn't be reserved for people who already know how to use them. Today we serve over 100,000 creators, small businesses, and dreamers across 80 countries." } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-widest opacity-60 mb-3">{heading}</p>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">{subheading}</h2>
        <p className="mt-8 text-lg opacity-75 leading-relaxed">{bodyText}</p>
      </div>
    </section>
  );
}
