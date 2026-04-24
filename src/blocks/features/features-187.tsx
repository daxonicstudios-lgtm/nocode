import type { BlockProps } from "@/blocks/types";
import { BookOpen, GraduationCap, Award } from "lucide-react";

const icons = [BookOpen, GraduationCap, Award];

export default function Features187(props: BlockProps) {
  const {
    theme,
    heading = "Learning Platform",
    subheading = "Education tools that engage and inspire",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Course Builder", description: "Create interactive courses with video, quizzes, and assignments." },
      { title: "Student Portal", description: "Track progress, earn certificates, and join discussions." },
      { title: "Certifications", description: "Issue verifiable digital certificates on course completion." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm" style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "#ffffff" }}>
                <div className="p-6 pb-0">
                  <Icon size={24} className="mb-4" style={{ color: primary }} />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="h-16 mt-4" style={{ background: `linear-gradient(to top, ${primary}08, transparent)` }} />
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
