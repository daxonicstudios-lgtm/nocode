import type { BlockProps } from "@/blocks/types";
import { CalendarCheck, FileText, Video, Shield, Heart, Clock } from "lucide-react";

const icons = [CalendarCheck, FileText, Video, Shield, Heart, Clock];

export default function Features094(props: BlockProps) {
  const {
    theme,
    heading = "Healthcare Platform",
    subheading = "HIPAA-compliant tools for modern healthcare providers",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Online Appointments", description: "Patients book, reschedule, and cancel appointments online with automatic reminders." },
      { title: "Medical Records", description: "Secure electronic health records with role-based access and full audit trails." },
      { title: "Telemedicine", description: "HIPAA-compliant video consultations with screen sharing and digital prescriptions." },
      { title: "Data Security", description: "End-to-end encryption, SOC 2 compliance, and regular security audits." },
      { title: "Patient Portal", description: "A self-service portal where patients view results, message doctors, and pay bills." },
      { title: "Wait Time Updates", description: "Real-time wait time displays reduce anxiety and improve patient satisfaction." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.primary || "#0ea5e9" }}>Healthcare</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl border p-6" style={{ borderColor: `${theme?.primary || "#0ea5e9"}30` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme?.primary || "#0ea5e9"}15` }}>
                  <Icon size={22} style={{ color: theme?.primary || "#0ea5e9" }} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#0ea5e9" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
