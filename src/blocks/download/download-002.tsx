import type { BlockProps } from "@/blocks/types";

export default function Download002(props: BlockProps) {
  const { theme, heading = "Scan to download", bodyText = "Point your phone camera at the QR code to get the app.", buttonText = "Or download directly", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-3 text-sm opacity-70">{bodyText}</p>
        <div className="mt-10 inline-block p-6 rounded-2xl" style={{ backgroundColor: theme?.secondary ?? "#f3f4f6" }}>
          <div className="w-40 h-40 bg-white border-2 grid grid-cols-8 grid-rows-8 gap-0.5 p-1" style={{ borderColor: theme?.foreground }}>
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className={Math.random() > 0.5 ? "bg-black" : "bg-white"} />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <a href={buttonUrl} className="text-sm underline opacity-70 hover:opacity-100">{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
