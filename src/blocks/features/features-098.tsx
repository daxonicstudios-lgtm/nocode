import type { BlockProps } from "@/blocks/types";
import { Scale, Receipt, FileText, Clock, Users, FolderOpen } from "lucide-react";

const icons = [Scale, Receipt, FileText, Clock, Users, FolderOpen];

export default function Features098(props: BlockProps) {
  const {
    theme,
    heading = "Legal Practice Management",
    subheading = "Streamline your law firm with purpose-built tools",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Case Management", description: "Track cases from intake to resolution with timelines, documents, and status updates." },
      { title: "Time & Billing", description: "Track billable hours, generate invoices, and accept online payments automatically." },
      { title: "Document Assembly", description: "Generate contracts, briefs, and filings from templates with auto-populated client data." },
      { title: "Deadline Tracking", description: "Never miss a filing deadline with court date calendars and automatic reminders." },
      { title: "Client Portal", description: "Secure portal where clients view case updates, share documents, and message their attorney." },
      { title: "Matter Files", description: "Organize all case-related documents, notes, and communications in structured matter folders." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.primary || "#1e293b" }}>Legal</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: `${theme?.foreground || "#000"}15` }}>
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6" style={{ backgroundColor: theme?.background || "#ffffff" }}>
                <Icon size={24} className="mb-4" style={{ color: theme?.primary || "#1e293b" }} />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#1e293b" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
