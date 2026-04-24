import type { BlockProps } from "@/blocks/types";
import { BookOpen, Award, TrendingUp, Users, Video, FileCheck } from "lucide-react";

const icons = [BookOpen, Award, TrendingUp, Users, Video, FileCheck];

export default function Features095(props: BlockProps) {
  const {
    theme,
    heading = "Education Platform",
    subheading = "Empower learners with modern tools for growth",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Course Builder", description: "Create structured courses with modules, lessons, quizzes, and assignments in minutes." },
      { title: "Certifications", description: "Issue verifiable digital certificates that students can share on professional profiles." },
      { title: "Progress Tracking", description: "Visual dashboards show completion rates, quiz scores, and time spent learning." },
      { title: "Student Community", description: "Discussion forums, study groups, and peer-to-peer learning built into every course." },
      { title: "Live Classes", description: "Host interactive live sessions with screen sharing, polls, and breakout rooms." },
      { title: "Assignments", description: "Create, distribute, and grade assignments with rubrics and automatic feedback." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.primary || "#10b981" }}>Education</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 hover:-translate-y-1 transition-transform" style={{ backgroundColor: theme?.accent || "#ecfdf5" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#10b981" }}>
                    <Icon size={18} color="#fff" />
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#10b981" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
