import type { BlockProps } from "@/blocks/types";
import { CreditCard, Wallet, Banknote, BadgeCheck } from "lucide-react";

const icons = [CreditCard, Wallet, Banknote, BadgeCheck];

export default function Features264(props: BlockProps) {
  const {
    theme,
    heading = "Payments Without Headaches",
    subheading = "Accept every payment method your customers prefer",
    bodyText,
    buttonText = "Set Up Payments",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Card Payments", description: "Accept Visa, Mastercard, Amex, and Discover with instant settlement." },
      { title: "Digital Wallets", description: "Apple Pay, Google Pay, and mobile money for frictionless checkout." },
      { title: "Bank Transfers", description: "Direct debit and wire transfer support for large B2B transactions." },
      { title: "Fraud Protection", description: "AI-powered fraud detection blocks suspicious transactions in real time." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#f8fafc", color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: theme?.background || "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div className="w-16 h-10 rounded-lg mx-auto mb-4 flex items-center justify-center border-2" style={{ borderColor: theme?.primary || "#3b82f6", color: theme?.primary || "#3b82f6" }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#3b82f6" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
