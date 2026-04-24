import type { BlockProps } from "@/blocks/types";

export default function Careers003(props: BlockProps) {
  const { theme, heading = "Apply for this role", subheading = "Staff Software Engineer — Editor Team", buttonText = "Submit application" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-60">{heading}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{subheading}</h2>
        </div>
        <form className="space-y-4">
          <input placeholder="Full name" className="w-full px-4 py-3 rounded-lg border text-sm bg-transparent" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border text-sm bg-transparent" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <input placeholder="Link to your portfolio or GitHub" className="w-full px-4 py-3 rounded-lg border text-sm bg-transparent" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <textarea placeholder="Why this role?" rows={5} className="w-full px-4 py-3 rounded-lg border text-sm resize-none bg-transparent" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <div>
            <label className="block text-sm opacity-70 mb-2">Resume (PDF, 5MB max)</label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center text-sm opacity-60" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              Drop your file here or click to browse
            </div>
          </div>
          <button type="button" className="w-full py-3 rounded-full text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#000" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
