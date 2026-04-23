"use client";

import type { BlockProps } from "@/blocks/types";
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function Hero391(props: BlockProps) {
  const {
    theme,
    heading = "Scheduling Made Effortless",
    subheading = "Smart Appointment Booking",
    bodyText = "Let your clients book meetings in seconds. Automated reminders, timezone detection, and calendar sync — all in one platform.",
    buttonText = "Start Booking Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Mon", value: "3 slots" },
      { title: "Tue", value: "5 slots" },
      { title: "Wed", value: "2 slots" },
      { title: "Thu", value: "4 slots" },
      { title: "Fri", value: "6 slots" },
    ],
  } = props;

  const stats = [
    { icon: Users, label: "Active Users", value: "12,400+" },
    { icon: Clock, label: "Hours Saved", value: "58,000" },
    { icon: CheckCircle, label: "Bookings Made", value: "2.1M" },
  ];

  const hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}20`, color: theme?.primary ?? "#6366f1" }}
            >
              <Calendar className="h-4 w-4" />
              {subheading}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {heading}
            </h1>
            <p className="text-lg opacity-70 mb-8 max-w-lg">
              {bodyText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
              >
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-base font-semibold transition-opacity hover:opacity-80"
                style={{ borderColor: theme?.border ?? "#e5e7eb" }}
              >
                Watch Demo
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="h-5 w-5 mb-2" style={{ color: theme?.primary ?? "#6366f1" }} />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm opacity-60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Calendar grid */}
          <div
            className="rounded-2xl border p-6 shadow-xl"
            style={{ borderColor: theme?.border ?? "#e5e7eb", backgroundColor: theme?.muted ?? "#f9fafb" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">April 2026</h3>
              <span
                className="rounded-lg px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}15`, color: theme?.primary ?? "#6366f1" }}
              >
                This Week
              </span>
            </div>
            {/* Day headers */}
            <div className="grid grid-cols-5 gap-2 mb-3">
              {items.map((day) => (
                <div key={day.title} className="text-center">
                  <p className="text-sm font-semibold">{day.title}</p>
                  <p className="text-xs opacity-50">{day.value}</p>
                </div>
              ))}
            </div>
            {/* Time slots */}
            <div className="space-y-2">
              {hours.map((hour, i) => (
                <div key={hour} className="grid grid-cols-5 gap-2">
                  {items.map((day, j) => {
                    const isBooked = (i + j) % 3 === 0;
                    const isSelected = i === 2 && j === 1;
                    return (
                      <div
                        key={`${day.title}-${hour}`}
                        className={`rounded-lg p-2 text-center text-xs transition-all ${
                          isSelected ? "text-white shadow-md scale-105" : isBooked ? "opacity-30 line-through" : "hover:scale-105 cursor-pointer"
                        }`}
                        style={{
                          backgroundColor: isSelected
                            ? theme?.primary ?? "#6366f1"
                            : `${theme?.primary ?? "#6366f1"}08`,
                        }}
                      >
                        {hour}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            {/* Booking confirmation */}
            <div
              className="mt-6 flex items-center gap-3 rounded-xl p-4"
              style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}10` }}
            >
              <CheckCircle className="h-5 w-5 shrink-0" style={{ color: theme?.primary ?? "#6366f1" }} />
              <div>
                <p className="text-sm font-medium">Tuesday, 11 AM confirmed</p>
                <p className="text-xs opacity-60">30-min strategy call with Sarah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
