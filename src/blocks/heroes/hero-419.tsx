"use client";

import type { BlockProps } from "@/blocks/types";
import { Quote, Star, ArrowRight, Users } from "lucide-react";

export default function Hero419(props: BlockProps) {
  const {
    theme,
    heading = "It replaced three tools and cut our onboarding time from two weeks to two days. I genuinely cannot imagine going back.",
    subheading = "What Our Customers Say",
    bodyText = "Join thousands of teams who have transformed their workflow. Start your free trial and see the results for yourself.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sarah Okafor", description: "Head of Operations", value: "TechBridge Africa", imageUrl: "" },
      { title: "James Mwangi", description: "Co-Founder", value: "PayStack Labs", imageUrl: "" },
      { title: "Amina Hassan", description: "VP Engineering", value: "CloudNine Systems", imageUrl: "" },
    ],
  } = props;

  const activeTestimonial = items[0];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="mx-auto max-w-4xl w-full">
        {/* Label */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] opacity-40">
            <Users className="h-3.5 w-3.5" />
            {subheading}
          </span>
        </div>

        {/* Main quote */}
        <div className="text-center mb-10">
          <Quote
            className="h-10 w-10 sm:h-14 sm:w-14 mx-auto mb-6 rotate-180"
            style={{ color: theme?.primary ?? "#d97706", opacity: 0.3 }}
          />

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-relaxed sm:leading-relaxed lg:leading-relaxed mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            &ldquo;{heading}&rdquo;
          </blockquote>

          {/* Star rating */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-current"
                style={{ color: theme?.primary ?? "#d97706" }}
              />
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            {activeTestimonial?.imageUrl ? (
              <img src={activeTestimonial.imageUrl} alt="" className="w-14 h-14 rounded-full object-cover" />
            ) : (
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white"
                style={{ backgroundColor: theme?.primary ?? "#d97706" }}
              >
                {(activeTestimonial?.title ?? "S")[0]}
              </div>
            )}
            <div className="text-left">
              <div className="font-bold text-base">{activeTestimonial?.title}</div>
              <div className="text-sm opacity-50">{activeTestimonial?.description}</div>
              <div className="text-xs opacity-30">{activeTestimonial?.value}</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t my-10 mx-auto max-w-xs"
          style={{ borderColor: theme?.border ?? "#e7e5e4" }}
        />

        {/* Other testimonials preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {items.slice(1).map((person, i) => (
            <div
              key={i}
              className="rounded-xl p-5 border cursor-pointer hover:shadow-md transition-shadow"
              style={{ borderColor: theme?.border ?? "#e7e5e4" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: `${theme?.primary ?? "#d97706"}${i === 0 ? "cc" : "99"}` }}
                >
                  {(person.title ?? "U")[0]}
                </div>
                <div>
                  <div className="text-sm font-bold">{person.title}</div>
                  <div className="text-xs opacity-40">{person.description}, {person.value}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-current" style={{ color: theme?.primary ?? "#d97706" }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm opacity-40 mb-6">{bodyText}</p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#d97706" }}
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-xs opacity-20 mt-3">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
