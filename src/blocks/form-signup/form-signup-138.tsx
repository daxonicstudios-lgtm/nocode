import type { BlockProps } from "@/blocks/types";

export default function FormSignup138(props: BlockProps) {
  const { theme, heading = "Dark signup / registration form", subheading = "Signup / registration form", buttonText = "Submit" } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/40" />
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/40" />
          <input type="text" placeholder="Additional info" className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/40" />
          <button type="submit" className="w-full py-3 rounded-xl font-semibold text-sm bg-white" style={{ color: theme?.primary ?? "#0f172a" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
