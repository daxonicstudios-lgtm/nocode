import type { BlockProps } from "@/blocks/types";
import { Mail, ArrowRight } from "lucide-react";

export default function Hero011(props: BlockProps) {
  const {
    theme,
    heading = "Hi, I'm Alex Morgan",
    subheading = "Freelance Brand Designer",
    bodyText = "I help startups and small businesses craft memorable brand identities that connect with their audience. Over 8 years of experience turning ideas into visual stories.",
    buttonText = "Get in Touch",
    buttonUrl = "#contact",
    secondaryButtonText = "View My Work",
    secondaryButtonUrl = "#portfolio",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Profile"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
              style={{ boxShadow: `0 0 0 4px ${theme?.primary ?? "#6366f1"}` }}
            />
          ) : (
            <div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold"
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            >
              {heading.replace(/^Hi,?\s*I'?m\s*/i, "").charAt(0) || "A"}
            </div>
          )}
        </div>

        {/* Greeting */}
        <p
          className="text-sm sm:text-base font-medium tracking-wide uppercase mb-3"
          style={{ color: theme?.primary ?? "#6366f1" }}
        >
          Welcome to my portfolio
        </p>

        {/* Name */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          {heading}
        </h1>

        {/* Role */}
        <p
          className="text-lg sm:text-xl font-medium mb-6"
          style={{ color: theme?.accent ?? "#8b5cf6" }}
        >
          {subheading}
        </p>

        {/* Bio */}
        <p className="text-base sm:text-lg opacity-70 max-w-lg mx-auto mb-10 leading-relaxed">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
          >
            <Mail className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base border-2 transition-opacity hover:opacity-70"
            style={{
              borderColor: theme?.primary ?? "#6366f1",
              color: theme?.primary ?? "#6366f1",
            }}
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
