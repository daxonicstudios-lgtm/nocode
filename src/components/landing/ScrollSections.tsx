"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScrollReveal(selector: string, stagger = 0.15) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: i * stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [selector, stagger]);
}

export function MockupAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 60%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    // Navbar slides in from top
    tl.fromTo(
      navRef.current,
      { y: -80, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );

    // Hero section expands in
    tl.fromTo(
      heroRef.current,
      { y: 60, opacity: 0, scale: 0.85 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      "-=0.1"
    );

    // Cards stagger in from bottom
    tl.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { y: 80, opacity: 0, scale: 0.8, rotateX: 15 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "back.out(1.2)",
      },
      "-=0.1"
    );

    // Footer slides in
    tl.fromTo(
      footerRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 },
      "-=0.05"
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-3xl perspective-[1200px]">
      {/* Browser chrome */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden shadow-2xl shadow-violet-500/5">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-6 rounded-full bg-white/5 flex items-center px-3">
              <span className="text-[10px] text-white/20">mysite.nocode.app</span>
            </div>
          </div>
        </div>

        {/* Website content */}
        <div className="p-4 space-y-3 min-h-[320px] bg-gradient-to-b from-[#0c0c14] to-[#0a0a12]">
          {/* Navbar */}
          <div ref={navRef} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="w-16 h-3 rounded bg-gradient-to-r from-violet-500/40 to-cyan-500/40" />
            <div className="flex gap-3">
              <div className="w-10 h-2 rounded-full bg-white/10" />
              <div className="w-10 h-2 rounded-full bg-white/10" />
              <div className="w-14 h-6 rounded-md bg-violet-500/30" />
            </div>
          </div>

          {/* Hero area */}
          <div ref={heroRef} className="rounded-xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 border border-white/5 p-5">
            <div className="w-2/3 h-4 rounded bg-white/15 mb-2" />
            <div className="w-1/2 h-3 rounded bg-white/10 mb-4" />
            <div className="w-full h-2 rounded bg-white/5 mb-1" />
            <div className="w-4/5 h-2 rounded bg-white/5 mb-4" />
            <div className="flex gap-2">
              <div className="w-20 h-7 rounded-lg bg-gradient-to-r from-violet-500/40 to-cyan-500/40" />
              <div className="w-16 h-7 rounded-lg border border-white/10" />
            </div>
          </div>

          {/* Feature cards */}
          <div ref={cardsRef} className="grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
              <div className="w-6 h-6 rounded bg-violet-500/20 mb-2" />
              <div className="w-full h-2 rounded bg-white/10 mb-1" />
              <div className="w-3/4 h-1.5 rounded bg-white/5" />
            </div>
            <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
              <div className="w-6 h-6 rounded bg-cyan-500/20 mb-2" />
              <div className="w-full h-2 rounded bg-white/10 mb-1" />
              <div className="w-3/4 h-1.5 rounded bg-white/5" />
            </div>
            <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
              <div className="w-6 h-6 rounded bg-emerald-500/20 mb-2" />
              <div className="w-full h-2 rounded bg-white/10 mb-1" />
              <div className="w-3/4 h-1.5 rounded bg-white/5" />
            </div>
          </div>

          {/* Footer */}
          <div ref={footerRef} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.02] border-t border-white/5">
            <div className="w-12 h-2 rounded bg-white/10" />
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Reflection glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-violet-500/10 rounded-full blur-3xl" />
    </div>
  );
}
