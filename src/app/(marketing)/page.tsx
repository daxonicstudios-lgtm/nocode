"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

// ─── Intersection Observer hook ───────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Animated counter ─────────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─── Typewriter effect ────────────────────────────────────────────────
const TYPEWRITER_WORDS = [
  "a restaurant website",
  "an online store",
  "a portfolio site",
  "a SaaS landing page",
  "a fitness gym website",
  "a blog platform",
];

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIndex];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIndex === word.length) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPEWRITER_WORDS.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((c) => c + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
      {TYPEWRITER_WORDS[wordIndex].slice(0, charIndex)}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  );
}

// ─── Floating mock UI blocks ──────────────────────────────────────────
function FloatingBlocks() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-[340px] md:h-[420px]">
      {/* Navbar mock */}
      <div className="absolute top-0 left-[5%] right-[5%] h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm animate-float-slow flex items-center px-4 gap-3">
        <div className="w-6 h-6 rounded bg-violet-500/30" />
        <div className="flex-1" />
        <div className="w-12 h-2 rounded-full bg-white/20" />
        <div className="w-12 h-2 rounded-full bg-white/20 hidden sm:block" />
        <div className="w-16 h-7 rounded-md bg-violet-500/40" />
      </div>
      {/* Hero mock */}
      <div className="absolute top-16 left-[8%] right-[8%] h-36 md:h-44 rounded-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm animate-float-medium p-5">
        <div className="w-3/4 h-3 rounded-full bg-white/20 mb-3" />
        <div className="w-1/2 h-3 rounded-full bg-white/15 mb-5" />
        <div className="w-2/3 h-2 rounded-full bg-white/10 mb-2" />
        <div className="w-1/2 h-2 rounded-full bg-white/10 mb-4" />
        <div className="w-24 h-8 rounded-lg bg-violet-500/30" />
      </div>
      {/* Cards mock */}
      <div className="absolute bottom-12 left-[5%] w-[28%] h-28 md:h-36 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm animate-float-fast p-3">
        <div className="w-full h-1/2 rounded bg-cyan-500/10 mb-2" />
        <div className="w-3/4 h-2 rounded-full bg-white/15 mb-1" />
        <div className="w-1/2 h-2 rounded-full bg-white/10" />
      </div>
      <div className="absolute bottom-8 left-[36%] w-[28%] h-28 md:h-36 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm animate-float-medium p-3" style={{ animationDelay: "0.5s" }}>
        <div className="w-full h-1/2 rounded bg-violet-500/10 mb-2" />
        <div className="w-3/4 h-2 rounded-full bg-white/15 mb-1" />
        <div className="w-1/2 h-2 rounded-full bg-white/10" />
      </div>
      <div className="absolute bottom-4 right-[5%] w-[28%] h-28 md:h-36 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm animate-float-slow p-3" style={{ animationDelay: "1s" }}>
        <div className="w-full h-1/2 rounded bg-emerald-500/10 mb-2" />
        <div className="w-3/4 h-2 rounded-full bg-white/15 mb-1" />
        <div className="w-1/2 h-2 rounded-full bg-white/10" />
      </div>
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />
    </div>
  );
}

// ─── Category cards ───────────────────────────────────────────────────
const CATEGORIES = [
  { icon: Store, label: "E-Commerce", desc: "Online stores with cart & checkout" },
  { icon: UtensilsCrossed, label: "Restaurant", desc: "Menus, reservations, delivery" },
  { icon: Briefcase, label: "Business", desc: "Corporate sites & landing pages" },
  { icon: Camera, label: "Portfolio", desc: "Showcase your creative work" },
  { icon: GraduationCap, label: "Education", desc: "Courses, schools, tutorials" },
  { icon: Heart, label: "Non-Profit", desc: "Causes, donations, events" },
  { icon: BarChart3, label: "SaaS", desc: "Dashboards, pricing, features" },
  { icon: Code2, label: "Developer", desc: "Docs, APIs, developer tools" },
];

// ─── Main page ────────────────────────────────────────────────────────
export default function LandingPage() {
  const howItWorks = useInView(0.1);
  const statsSection = useInView(0.2);
  const categoriesSection = useInView(0.1);
  const ctaSection = useInView(0.2);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* ── Navbar ── */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">NoCode</span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link href="#how-it-works" className="hidden text-sm text-white/50 hover:text-white transition-colors sm:block">
              How it works
            </Link>
            <Link href="#categories" className="hidden text-sm text-white/50 hover:text-white transition-colors sm:block">
              Templates
            </Link>
            <Link href="/login" className="text-sm text-white/60 hover:text-white transition-colors">
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-9 items-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-5 text-sm font-medium text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
            >
              Get Started Free
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16">
          {/* Background gradient mesh */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px] animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
            <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              AI-powered website builder
              <ChevronRight className="h-3 w-3" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Build{" "}
              <Typewriter />
              <br />
              <span className="text-white/90">in seconds, not weeks</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-xl text-lg text-white/40 leading-relaxed">
              Describe what you want. Our AI assembles it from 15,000+ pre-built
              components. Customize everything. Publish instantly.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/signup"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-8 text-base font-medium text-white hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-500 hover:scale-105"
              >
                Start Building — Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                See how it works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-white/30">
              <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> Built in seconds</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> No coding required</span>
              <span className="flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5" /> Mobile-first</span>
            </div>
          </div>

          {/* Floating UI mockup */}
          <div className="relative z-10 mt-12 w-full max-w-4xl px-4">
            <FloatingBlocks />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
            <span className="text-xs">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
          <div ref={howItWorks.ref} className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className={`text-center mb-16 transition-all duration-1000 ${howItWorks.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <span className="text-sm font-medium text-violet-400 uppercase tracking-widest">How it works</span>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
                From idea to live site in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">3 steps</span>
              </h2>
              <p className="mt-4 text-white/40 max-w-lg mx-auto">
                No templates to browse. No drag-and-drop learning curve. Just describe what you need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, title: "Describe your idea", body: "Tell our AI what kind of site you want — a restaurant, a portfolio, a store. Be as detailed or as brief as you like.", color: "violet" },
                { icon: Wand2, title: "AI builds it instantly", body: "We select the perfect components from 15,000+ blocks, assemble your pages, and apply your chosen style — in seconds.", color: "cyan" },
                { icon: Rocket, title: "Customize & publish", body: "Tweak colors, edit text, rearrange blocks, then publish to a shareable link with one click.", color: "emerald" },
              ].map(({ icon: Icon, title, body, color }, i) => (
                <div
                  key={title}
                  className={`group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-700 hover:border-white/10 hover:bg-white/[0.04] ${
                    howItWorks.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 text-sm font-bold">
                    {i + 1}
                  </div>
                  <Icon className={`h-8 w-8 mb-5 mt-2 text-${color}-400`} />
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="relative py-20 md:py-28">
          <div ref={statsSection.ref} className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${statsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              {[
                { target: 15780, suffix: "+", label: "Components" },
                { target: 128, suffix: "", label: "Categories" },
                { target: 60, suffix: "s", label: "Avg Build Time" },
                { target: 100, suffix: "%", label: "Mobile-First" },
              ].map(({ target, suffix, label }) => (
                <div key={label}>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                    <Counter target={target} suffix={suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/30">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Categories ── */}
        <section id="categories" className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
          <div ref={categoriesSection.ref} className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className={`text-center mb-16 transition-all duration-1000 ${categoriesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">Build anything</span>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
                Every type of website,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">covered</span>
              </h2>
              <p className="mt-4 text-white/40 max-w-lg mx-auto">
                Industry-specific templates with blocks designed for your exact use case.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className={`group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-700 hover:border-violet-500/30 hover:bg-violet-500/5 cursor-pointer ${
                    categoriesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Icon className="h-8 w-8 mb-4 text-white/30 group-hover:text-violet-400 transition-colors" />
                  <h3 className="font-semibold mb-1">{label}</h3>
                  <p className="text-xs text-white/30">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features Strip ── */}
        <section className="py-20 border-y border-white/5">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Globe, title: "Instant Publishing", desc: "One click to publish. Get a shareable link immediately. Connect your own domain anytime." },
                { icon: Layers, title: "15,000+ Blocks", desc: "Heroes, navbars, pricing tables, footers, e-commerce — every section you could ever need." },
                { icon: Smartphone, title: "Mobile-First", desc: "Every component is designed for phones first. Build your entire site from your mobile device." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-white/5">
                    <Icon className="h-6 w-6 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative py-24 md:py-32">
          <div ref={ctaSection.ref} className={`relative mx-auto max-w-3xl px-4 sm:px-6 text-center transition-all duration-1000 ${ctaSection.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-10 md:p-16">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
                Your website is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">one sentence</span>{" "}
                away
              </h2>
              <p className="text-white/40 mb-8 max-w-md mx-auto">
                Sign up free. Describe your dream website. Watch it come to life.
                No coding. No design skills. No credit card.
              </p>
              <Link
                href="/signup"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-10 text-base font-medium text-white hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-500 hover:scale-105"
              >
                Start Building — Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">NoCode</span>
              <span className="text-xs text-white/20">© 2026</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/30">
              <Link href="#" className="hover:text-white/60 transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Contact</Link>
            </div>
            <p className="text-xs text-white/20">Built for creators on the move.</p>
          </div>
        </div>
      </footer>

      {/* ── Custom animation styles ── */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .h-13 { height: 3.25rem; }
      `}</style>
    </div>
  );
}
