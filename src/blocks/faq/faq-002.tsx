import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "How fast can I publish?", description: "Most users go live within 15 minutes of signup." },
  { title: "Do you support mobile payments?", description: "Yes — we integrate with Flutterwave, Paystack, and Stripe." },
  { title: "Can multiple people edit the same site?", description: "Team plans include real-time collaboration for up to 25 editors." },
  { title: "What if I need help?", description: "Email, chat, and video support depending on your plan." },
  { title: "Are there templates?", description: "Over 1,500 blocks across 128 categories. Mix and match freely." },
  { title: "Is my data secure?", description: "Bank-grade encryption, daily backups, SOC 2 compliant infrastructure." },
];

export default function Faq002(props: BlockProps) {
  const { theme, heading = "Everything you need to know", subheading = "Can't find an answer? Email hello@example.com", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-sm opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {items.slice(0, 6).map((q, i) => (
            <div key={i}>
              <h3 className="font-semibold">{q.title}</h3>
              <p className="mt-2 text-sm opacity-75 leading-relaxed">{q.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
