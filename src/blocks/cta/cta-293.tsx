import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Bell, MessageSquare } from "lucide-react";

export default function Cta293(props: BlockProps) {
  const {
    theme,
    heading = "Stay Connected",
    subheading = "Push notifications, real-time chat, and instant updates.",
    buttonText = "Get the App",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.background ?? "#f0fdf4", color: theme?.foreground ?? "#14532d" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-10 flex justify-center">
          <div className="relative w-52">
            <div className="rounded-[2rem] border-4 border-gray-800 bg-white p-2">
              <div className="rounded-[1.5rem] overflow-hidden bg-gray-50 py-6 px-4 space-y-3">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white shadow-sm">
                  <Bell className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#16a34a" }} />
                  <span className="text-[10px] font-medium">New order received!</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white shadow-sm">
                  <MessageSquare className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#16a34a" }} />
                  <span className="text-[10px] font-medium">Team message from Sarah</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#16a34a" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
