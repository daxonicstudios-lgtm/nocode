import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

export default function Features117(props: BlockProps) {
  const {
    theme,
    heading = "Feature Matrix",
    subheading = "Full availability across all plan levels",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Website Builder", value: "yes,yes,yes" },
      { title: "Blog Engine", value: "yes,yes,yes" },
      { title: "E-Commerce", value: "no,yes,yes" },
      { title: "Custom Code", value: "no,no,yes" },
      { title: "Team Seats", value: "1,5,unlimited" },
      { title: "Analytics", value: "basic,advanced,advanced" },
    ],
  } = props;

  const tiers = ["Free", "Growth", "Business"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: `${theme?.primary || "#6366f1"}10` }}>
                <th className="p-4 text-left font-semibold" />
                {tiers.map((t, i) => (
                  <th key={i} className="p-4 text-center font-semibold">{t}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => {
                const cells = (item.value || "").split(",");
                return (
                  <tr key={i} className="border-t" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                    <td className="p-4 font-medium">{item.title}</td>
                    {cells.map((cell, j) => (
                      <td key={j} className="p-4 text-center">
                        {cell.trim() === "yes" ? <Check size={16} className="mx-auto text-green-500" /> :
                         cell.trim() === "no" ? <X size={16} className="mx-auto text-red-400" /> :
                         <span className="opacity-80">{cell.trim()}</span>}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
