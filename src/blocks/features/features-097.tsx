import type { BlockProps } from "@/blocks/types";
import { Dumbbell, Apple, Activity, Calendar, Trophy, Heart } from "lucide-react";

const icons = [Dumbbell, Apple, Activity, Calendar, Trophy, Heart];

export default function Features097(props: BlockProps) {
  const {
    theme,
    heading = "Fitness & Wellness",
    subheading = "Tools to help your clients reach their health goals",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Workout Builder", description: "Create custom workout plans with exercise libraries, sets, reps, and rest timers." },
      { title: "Nutrition Tracking", description: "Meal plans with calorie counting, macro tracking, and grocery list generation." },
      { title: "Progress Monitoring", description: "Body measurements, weight charts, and before-after photo comparisons." },
      { title: "Class Scheduling", description: "Let members book group classes, personal training, and facility time slots." },
      { title: "Challenges", description: "Run fitness challenges with leaderboards, milestones, and achievement badges." },
      { title: "Health Metrics", description: "Sync with wearables to track heart rate, sleep, steps, and active minutes." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.primary || "#f97316" }}>Fitness</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 border-l-4" style={{ borderColor: theme?.primary || "#f97316", backgroundColor: theme?.accent || "#fff7ed" }}>
                <Icon size={24} className="mb-3" style={{ color: theme?.primary || "#f97316" }} />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#f97316" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
