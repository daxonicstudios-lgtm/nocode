"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  MessageSquare,
  Wand2,
  Rocket,
  ArrowRight,
  Globe,
  Layers,
  Zap,
  ShieldCheck,
  Smartphone,
  Store,
  Briefcase,
  Camera,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  BarChart3,
  Code2,
  ChevronRight,
} from "lucide-react";
import { MockupAssembly } from "@/components/landing/ScrollSections";

gsap.registerPlugin(ScrollTrigger);

// Lazy load Three.js (heavy) — only on client
const ParticleField = dynamic(() => import("@/components/landing/ParticleField"), {
  ssr: false,
  loading: () => null,
});

// ─── Typewriter ───────────────────────────────────────────────────────
const WORDS = [
  "a restaurant website",
  "an online store",
  "a portfolio site",
  "a SaaS landing page",
  "a fitness gym website",
  "a blog platform",
];

function Typewriter() {
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = WORDS[wi];
    if (!del && ci === word.length) { setTimeout(() => setDel(true), 1800); return; }
    if (del && ci === 0) { setDel(false); setWi((i) => (i + 1) % WORDS.length); return; }
    const t = setTimeout(() => setCi((c) => c + (del ? -1 : 1)), del ? 35 : 70);
    return () => clearTimeout(t);
  }, [ci, del, wi]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
      {WORDS[wi].slice(0, ci)}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        gsap.fromTo(el, { innerText: 0 }, {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate() { el.textContent = Math.floor(parseFloat(el.innerText || "0")).toLocaleString() + suffix; },
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

// ─── Categories ───────────────────────────────────────────────────────
const CATEGORIES = [
  { icon: Store, label: "E-Commerce", desc: "Online stores with cart & checkout", gradient: "from-violet-500 to-purple-600" },
  { icon: UtensilsCrossed, label: "Restaurant", desc: "Menus, reservations, delivery", gradient: "from-orange-500 to-red-600" },
  { icon: Briefcase, label: "Business", desc: "Corporate sites & landing pages", gradient: "from-blue-500 to-indigo-600" },
  { icon: Camera, label: "Portfolio", desc: "Showcase your creative work", gradient: "from-pink-500 to-rose-600" },
  { icon: GraduationCap, label: "Education", desc: "Courses, schools, tutorials", gradient: "from-emerald-500 to-teal-600" },
  { icon: Heart, label: "Non-Profit", desc: "Causes, donations, events", gradient: "from-red-500 to-pink-600" },
  { icon: BarChart3, label: "SaaS", desc: "Dashboards, pricing, features", gradient: "from-cyan-500 to-blue-600" },
  { icon: Code2, label: "Developer", desc: "Docs, APIs, developer tools", gradient: "from-green-500 to-emerald-600" },
];

// ─── Main ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  // GSAP scroll reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal .gsap-reveal elements
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });

      // Stagger .gsap-stagger children
      gsap.utils.toArray<HTMLElement>(".gsap-stagger").forEach((container) => {
        gsap.fromTo(container.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: container, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      });

      // Parallax backgrounds
      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
        gsap.to(el, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#07070b] text-white overflow-x-hidden">
      {/* ── Navbar ── */}
      <header className="fixed top-0 z-50 w-full bg-[#07070b]/60 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">NoCode</span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-5">
            <Link href="#how-it-works" className="hidden text-[13px] text-white/40 hover:text-white/80 transition-colors duration-300 sm:block">How it works</Link>
            <Link href="#templates" className="hidden text-[13px] text-white/40 hover:text-white/80 transition-colors duration-300 sm:block">Templates</Link>
            <Link href="/login" className="text-[13px] text-white/40 hover:text-white/80 transition-colors duration-300">Log in</Link>
            <Link href="/signup" className="relative inline-flex h-9 items-center rounded-full px-5 text-[13px] font-medium text-white overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 transition-all duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500 to-cyan-500 blur-xl" />
              <span className="relative">Get Started Free</span>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* ══════════════ HERO ══════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-20">
          {/* 3D Particle background */}
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>

          {/* Gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="gsap-parallax absolute top-[-15%] left-[-5%] w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[150px]" />
            <div className="gsap-parallax absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-cyan-600/12 rounded-full blur-[130px]" />
            <div className="gsap-parallax absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-fuchsia-600/8 rounded-full blur-[100px]" />
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-7 text-center max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-[13px] text-white/50 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              AI-powered website builder
              <ChevronRight className="h-3 w-3" />
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-[1.08]">
              Build <Typewriter />
              <br />
              <span className="text-white/80">in seconds, not weeks</span>
            </h1>

            {/* Sub */}
            <p className="max-w-lg text-base sm:text-lg text-white/35 leading-relaxed">
              Describe what you want. Our AI assembles it from 15,000+ pre-built
              components. Customize everything. Publish instantly.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <Link href="/signup" className="group relative inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-9 text-[15px] font-semibold text-white overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-violet-500 to-cyan-500 blur-2xl scale-150" />
                <span className="relative flex items-center gap-2">
                  Start Building — Free
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link href="#how-it-works" className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-9 text-[15px] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
                See how it works
              </Link>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap justify-center gap-6 mt-2 text-[13px] text-white/25">
              <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> Built in seconds</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> No coding required</span>
              <span className="flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5" /> Mobile-first</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15 z-10">
            <span className="text-[11px] tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center p-1.5">
              <div className="w-1 h-2.5 rounded-full bg-white/30 animate-bounce" />
            </div>
          </div>
        </section>

        {/* ══════════════ MOCKUP ASSEMBLY ══════════════ */}
        <section className="relative py-20 md:py-32">
          <div className="gsap-reveal mx-auto max-w-4xl px-5">
            <div className="text-center mb-12">
              <span className="text-[13px] font-medium text-violet-400/80 uppercase tracking-[0.2em]">Live preview</span>
              <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight">
                Watch your site <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">come together</span>
              </h2>
            </div>
            <MockupAssembly />
          </div>
        </section>

        {/* ══════════════ HOW IT WORKS ══════════════ */}
        <section id="how-it-works" className="relative py-24 md:py-36">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-5">
            <div className="gsap-reveal text-center mb-20">
              <span className="text-[13px] font-medium text-violet-400/80 uppercase tracking-[0.2em]">How it works</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
                From idea to live site in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">3 steps</span>
              </h2>
              <p className="mt-4 text-white/30 max-w-md mx-auto">
                No templates to browse. No learning curve. Just describe what you need.
              </p>
            </div>

            <div className="gsap-stagger grid md:grid-cols-3 gap-5">
              {[
                { icon: MessageSquare, title: "Describe your idea", body: "Tell our AI what kind of site you want — a restaurant, a portfolio, a store. Be as detailed or as brief as you like.", color: "violet" },
                { icon: Wand2, title: "AI builds it instantly", body: "We select the perfect components from 15,000+ blocks, assemble your pages, and apply your chosen style — in seconds.", color: "cyan" },
                { icon: Rocket, title: "Customize & publish", body: "Tweak colors, edit text, rearrange blocks, then publish to a shareable link with one click.", color: "emerald" },
              ].map(({ icon: Icon, title, body, color }, i) => (
                <div key={title} className="group relative rounded-2xl border border-white/[0.04] bg-white/[0.015] p-8 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-700">
                  <div className={`absolute -top-4 left-7 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-${color}-500 to-${color}-700 text-sm font-bold shadow-lg shadow-${color}-500/20`}>
                    {i + 1}
                  </div>
                  <Icon className={`h-7 w-7 mb-5 mt-2 text-${color}-400/70`} />
                  <h3 className="text-lg font-semibold mb-3">{title}</h3>
                  <p className="text-sm text-white/30 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ STATS ══════════════ */}
        <section className="relative py-20 md:py-28">
          <div className="gsap-reveal mx-auto max-w-5xl px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { target: 15780, suffix: "+", label: "Components" },
                { target: 128, suffix: "", label: "Categories" },
                { target: 60, suffix: "s", label: "Avg Build Time" },
                { target: 100, suffix: "%", label: "Mobile-First" },
              ].map(({ target, suffix, label }) => (
                <div key={label}>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                    <Counter target={target} suffix={suffix} />
                  </div>
                  <p className="mt-2 text-[13px] text-white/25">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CATEGORIES ══════════════ */}
        <section id="templates" className="relative py-24 md:py-36">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-5">
            <div className="gsap-reveal text-center mb-16">
              <span className="text-[13px] font-medium text-cyan-400/80 uppercase tracking-[0.2em]">Build anything</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
                Every type of website,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">covered</span>
              </h2>
            </div>

            <div className="gsap-stagger grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.map(({ icon: Icon, label, desc, gradient }) => (
                <div key={label} className="group relative rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 cursor-pointer hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-500">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} mb-4 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-white/80 group-hover:text-white transition-colors">{label}</h3>
                  <p className="text-xs text-white/25 group-hover:text-white/40 transition-colors">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ FEATURES ══════════════ */}
        <section className="py-24 border-y border-white/[0.04]">
          <div className="gsap-stagger mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: "Instant Publishing", desc: "One click to publish. Get a shareable link immediately. Connect your own domain anytime." },
              { icon: Layers, title: "15,000+ Blocks", desc: "Heroes, navbars, pricing tables, footers, e-commerce — every section you could ever need." },
              { icon: Smartphone, title: "Mobile-First", desc: "Every component is designed for phones first. Build your entire site from your mobile device." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/15 to-cyan-600/15 border border-white/[0.06]">
                  <Icon className="h-6 w-6 text-violet-400/80" />
                </div>
                <h3 className="text-lg font-semibold text-white/90">{title}</h3>
                <p className="text-sm text-white/30 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ FINAL CTA ══════════════ */}
        <section className="relative py-28 md:py-40">
          <div className="gsap-reveal relative mx-auto max-w-3xl px-5 text-center">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-12 md:p-20">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Your website is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">one sentence</span>{" "}
                away
              </h2>
              <p className="text-white/30 mb-10 max-w-md mx-auto">
                Sign up free. Describe your dream website. Watch it come to life.
                No coding. No design skills. No credit card.
              </p>
              <Link href="/signup" className="group relative inline-flex h-[56px] items-center justify-center gap-2 rounded-full px-12 text-base font-semibold text-white overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-violet-500 to-cyan-500 blur-2xl scale-150" />
                <span className="relative flex items-center gap-2">
                  Start Building — Free
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04] py-10">
        <div className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">NoCode</span>
          <div className="flex items-center gap-6 text-[13px] text-white/25">
            <Link href="#" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Contact</Link>
          </div>
          <p className="text-[11px] text-white/15">© 2026 NoCode. Built for creators.</p>
        </div>
      </footer>
    </div>
  );
}
