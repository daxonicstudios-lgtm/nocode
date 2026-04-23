import type { BlockProps } from "@/blocks/types";
import { MonitorSmartphone, CloudUpload, ShieldCheck, Fingerprint } from "lucide-react";

const icons = [MonitorSmartphone, CloudUpload, ShieldCheck, Fingerprint];

export default function Features048(props: BlockProps) {
  const {
    theme,
    heading = "Visual-First Features",
    subheading = "See it. Get it. Use it.",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Cross-Device", description: "Works seamlessly on phone, tablet, and desktop." },
      { title: "Cloud Backup", description: "Automatic backups every five minutes." },
      { title: "Data Protection", description: "End-to-end encryption on all stored data." },
      { title: "Biometric Auth", description: "Log in with face or fingerprint." },
    ],
  } = props;

  const accent = theme?.primary ?? "#7c3aed";

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f8f7ff", color: theme?.foreground ?? "#1a1a2e" }} className="py-16 px-4 sm:px-8 lg:py-24">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold mb-2" style={{ color: accent }}>{subheading}</p>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl" style={{ backgroundColor: `${accent}08` }}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${accent}15` }}>
                <Icon className="w-10 h-10" style={{ color: accent }} />
              </div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm opacity-60">{item.description}</p>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-block px-6 py-3 rounded-xl text-white font-medium" style={{ backgroundColor: accent }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
