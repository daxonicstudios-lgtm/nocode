import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, KeyRound, ShieldCheck, Eye, Fingerprint } from "lucide-react";

const icons = [Shield, Lock, KeyRound, ShieldCheck, Eye, Fingerprint];

export default function Features255(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise-Grade Security",
    subheading = "Your data is protected at every layer, from transit to rest",
    bodyText,
    buttonText = "Learn More",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "End-to-End Encryption", description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit." },
      { title: "Two-Factor Auth", description: "Enforce 2FA across your org with TOTP, SMS, or hardware keys." },
      { title: "API Key Management", description: "Rotate, scope, and revoke API keys with full audit logging." },
      { title: "SOC 2 Compliant", description: "Independently audited controls you can share with your customers." },
      { title: "Privacy Controls", description: "GDPR and CCPA tools built in so compliance is never an afterthought." },
      { title: "Biometric Login", description: "Support for fingerprint and face recognition on mobile devices." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#f0fdf4", color: theme?.primary || "#16a34a" }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#16a34a" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
