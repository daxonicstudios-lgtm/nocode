import type { BlockProps } from "@/blocks/types";
import { CreditCard, Lock } from "lucide-react";
export default function EcomCheckout062(props: BlockProps) {
  const { theme, heading = "Checkout form with payment", buttonText = "Place Order" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-8">{heading}</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="First name" className="px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
            <input placeholder="Last name" className="px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          </div>
          <input placeholder="Email" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <input placeholder="Address" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="City" className="px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
            <input placeholder="ZIP" className="px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          </div>
          <div className="pt-4 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <div className="flex items-center gap-2 mb-3"><CreditCard className="w-4 h-4" style={{ color: theme?.primary }} /><span className="font-semibold text-sm">Payment</span></div>
            <input placeholder="Card number" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <input placeholder="MM/YY" className="px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
              <input placeholder="CVC" className="px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><Lock className="w-4 h-4" /> {buttonText}</button>
        </form>
      </div>
    </section>
  );
}
