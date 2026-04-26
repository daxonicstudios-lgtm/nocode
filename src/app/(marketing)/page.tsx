"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  Wand2,
  Rocket,
  ArrowRight,
  Globe,
  Layers,
  Smartphone,
  Store,
  Briefcase,
  Camera,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  BarChart3,
  Dumbbell,
  Code2,
} from "lucide-react";
import {
  EditorMockup,
  StoreMockup,
  DashboardMockup,
  MobileMockup,
} from "@/components/landing/EditorMockup";

gsap.registerPlugin(ScrollTrigger);

// ─── 3D Typewriter with character-level animation ─────────────────────
const WORDS = [
  "a restaurant website",
  "an online store",
  "a portfolio site",
  "a SaaS landing page",
  "a fitness gym site",
];

function Typewriter3D() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [wi, setWi] = useState(0);
  const [displayChars, setDisplayChars] = useState<string[]>([]);
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");
  const charIndex = useRef(0);

  const word = WORDS[wi];

  useEffect(() => {
    if (phase === "typing") {
      if (charIndex.current >= word.length) {
        const t = setTimeout(() => setPhase("waiting"), 1600);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        charIndex.current++;
        setDisplayChars(word.slice(0, charIndex.current).split(""));
      }, 55);
      return () => clearTimeout(t);
    }

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("deleting"), 100);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (charIndex.current <= 0) {
        setWi((i) => (i + 1) % WORDS.length);
        setPhase("typing");
        return;
      }
      const t = setTimeout(() => {
        charIndex.current--;
        setDisplayChars(word.slice(0, charIndex.current).split(""));
      }, 25);
      return () => clearTimeout(t);
    }
  }, [phase, displayChars, word, wi]);

  return (
    <span ref={containerRef} className="inline-block">
      {displayChars.map((char, i) => (
        <span
          key={`${wi}-${i}`}
          className="inline-block animate-[charIn_0.15s_ease-out_forwards]"
          style={{
            animationDelay: `${i * 15}ms`,
            color: "#E8553D",
            textShadow: "0 2px 4px rgba(232,85,61,0.15), 0 1px 0 rgba(232,85,61,0.08)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <span
        className="inline-block w-[3px] ml-0.5 animate-pulse"
        style={{
          height: "0.85em",
          backgroundColor: "#E8553D",
          verticalAlign: "baseline",
          borderRadius: 1,
        }}
      />
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
          innerText: target, duration: 2.2, ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate() {
            el.textContent = Math.floor(parseFloat(el.innerText || "0")).toLocaleString() + suffix;
          },
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
  { icon: Store, label: "E-Commerce", desc: "Online stores with cart & checkout", border: "border-l-orange-400" },
  { icon: UtensilsCrossed, label: "Restaurant", desc: "Menus, reservations, delivery", border: "border-l-red-400" },
  { icon: Briefcase, label: "Business", desc: "Corporate sites & landing pages", border: "border-l-blue-400" },
  { icon: Camera, label: "Portfolio", desc: "Showcase your creative work", border: "border-l-pink-400" },
  { icon: GraduationCap, label: "Education", desc: "Courses, schools, tutorials", border: "border-l-emerald-400" },
  { icon: Heart, label: "Non-Profit", desc: "Causes, donations, events", border: "border-l-rose-400" },
  { icon: BarChart3, label: "SaaS", desc: "Dashboards, pricing, features", border: "border-l-cyan-400" },
  { icon: Dumbbell, label: "Fitness", desc: "Gyms, trainers, membership", border: "border-l-violet-400" },
];

// ─── Main ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance timeline ──
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-badge", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(".hero-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .fromTo(".hero-sub", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-cta", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo(".hero-mockup",
          { opacity: 0, x: 60, scale: 0.92, rotateY: 8 },
          { opacity: 1, x: 0, scale: 1, rotateY: 0, duration: 1, ease: "power2.out" },
          "-=0.6"
        );

      // ── Floating animation on mockup ──
      gsap.to(".hero-mockup", {
        y: -8, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1,
      });

      // ── Scroll reveals ──
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });

      // ── Stagger children ──
      gsap.utils.toArray<HTMLElement>(".gsap-stagger").forEach((container) => {
        gsap.fromTo(container.children,
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: container, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      });

      // ── Slide from left ──
      gsap.utils.toArray<HTMLElement>(".gsap-slide-left").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] overflow-x-hidden">
      {/* ── Keyframes ── */}
      <style jsx global>{`
        @keyframes charIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#1A1A1A]">
            Xxel
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#how-it-works" className="hidden text-sm text-gray-500 hover:text-gray-900 transition-colors sm:block">How it works</Link>
            <Link href="#templates" className="hidden text-sm text-gray-500 hover:text-gray-900 transition-colors sm:block">Templates</Link>
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Log in</Link>
            <Link href="/signup" className="inline-flex h-9 items-center rounded-lg bg-[#E8553D] px-5 text-sm font-medium text-white hover:bg-[#D14832] transition-colors shadow-sm shadow-[#E8553D]/15">
              Get Started Free
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* ══════════════ HERO ══════════════ */}
        <section ref={heroRef} className="relative py-16 md:py-24 bg-[#FAF7F4]">
          {/* Subtle radial gradient */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(232,85,61,0.04), transparent)" }} />

          <div className="relative mx-auto max-w-6xl px-5 flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Left */}
            <div className="flex-1 max-w-xl">
              <div className="hero-badge inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] text-[#E8553D] font-medium mb-6 border border-[#E8553D]/10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8553D] animate-pulse" />
                AI-powered website builder
              </div>

              <h1 className="hero-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] mb-5">
                <span
                  style={{
                    textShadow: "0 1px 0 rgba(0,0,0,0.07), 0 2px 0 rgba(0,0,0,0.05), 0 3px 6px rgba(0,0,0,0.04)",
                  }}
                >
                  Build{" "}
                </span>
                <Typewriter3D />
                <br />
                <span
                  className="text-gray-300"
                  style={{
                    textShadow: "0 1px 0 rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.02)",
                  }}
                >
                  in seconds, not weeks
                </span>
              </h1>

              <p className="hero-sub text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
                Describe what you want. Our AI assembles it from 15,000+
                pre-built components. Customize everything. Publish instantly.
              </p>

              <div className="hero-cta flex flex-col sm:flex-row gap-3">
                <Link href="/signup" className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#E8553D] px-7 text-base font-semibold text-white hover:bg-[#D14832] transition-all shadow-md shadow-[#E8553D]/20 hover:shadow-lg hover:shadow-[#E8553D]/25">
                  Start Building — Free
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#how-it-works" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 px-7 text-base font-medium text-gray-600 hover:bg-white hover:border-gray-300 transition-all">
                  See how it works
                </Link>
              </div>
            </div>

            {/* Right — Editor mockup */}
            <div ref={mockupRef} className="hero-mockup flex-1 w-full">
              <EditorMockup />
            </div>
          </div>
        </section>

        {/* ══════════════ TRUST BAR ══════════════ */}
        <section className="py-10 border-b border-gray-100">
          <div className="mx-auto max-w-5xl px-5">
            <p className="text-center text-sm text-gray-400 mb-6">Trusted by creators and businesses across Africa</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              {["TechHub", "ShopAfrica", "EduStart", "FitNation", "DevCrew", "FoodieNG"].map((name) => (
                <span key={name} className="text-lg font-bold text-gray-200 select-none">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ FEATURE BENTO ══════════════ */}
        <section className="py-20 md:py-28 bg-[#FAF7F4]">
          <div className="mx-auto max-w-6xl px-5">
            <div className="gsap-reveal text-center mb-14">
              <p className="text-sm font-semibold text-[#E8553D] mb-2 tracking-wide">Everything you need</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">One platform, endless possibilities</h2>
            </div>

            <div className="gsap-stagger grid md:grid-cols-2 gap-5">
              {/* Store */}
              <div className="group rounded-2xl border border-gray-200/60 bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">Online Store in Minutes</h3>
                <p className="text-sm text-gray-500 mb-5">Product catalog, shopping cart, and checkout — all assembled by AI.</p>
                <StoreMockup />
              </div>

              {/* Dashboard */}
              <div className="group rounded-2xl border border-gray-200/60 bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">Track Everything</h3>
                <p className="text-sm text-gray-500 mb-5">Sales analytics, customer data, and inventory — all in one dashboard.</p>
                <DashboardMockup />
              </div>

              {/* AI */}
              <div className="group rounded-2xl border border-gray-200/60 bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">AI Does the Heavy Lifting</h3>
                <p className="text-sm text-gray-500 mb-5">Describe your website in one sentence. Our AI picks the perfect blocks.</p>
                <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[#E8553D]/10 flex items-center justify-center shrink-0">
                      <Wand2 className="w-3.5 h-3.5 text-[#E8553D]" />
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                      <p className="text-[11px] text-gray-600 italic">&ldquo;Build me a fitness gym website with class schedules, trainer profiles, and membership pricing&rdquo;</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-300 my-2">
                    <div className="h-px flex-1 bg-gray-100" />
                    <span className="text-gray-400">AI selected 8 blocks</span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Navbar", "Hero", "Classes", "Trainers", "Pricing", "Testimonials", "CTA", "Footer"].map((b) => (
                      <span key={b} className="px-2.5 py-1 rounded-full bg-white text-[9px] font-medium text-[#E8553D] border border-[#E8553D]/10 shadow-sm">{b}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="group rounded-2xl border border-gray-200/60 bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Mobile-First, Always</h3>
                  <p className="text-sm text-gray-500">Every component is designed for phones first. Build and manage your entire site from mobile.</p>
                </div>
                <MobileMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ HOW IT WORKS ══════════════ */}
        <section id="how-it-works" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="gsap-reveal text-center mb-16">
              <p className="text-sm font-semibold text-[#E8553D] mb-2 tracking-wide">How it works</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From idea to live site in 3 steps</h2>
              <p className="mt-3 text-gray-500 max-w-md mx-auto">No templates to browse. No learning curve. Just describe what you need.</p>
            </div>

            <div className="gsap-stagger grid md:grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, title: "Describe your idea", body: "Tell our AI what kind of site you want — a restaurant, a portfolio, a store. Be as detailed or brief as you like.", color: "bg-orange-50 text-orange-500" },
                { icon: Wand2, title: "AI builds it instantly", body: "We select the perfect components from 15,000+ blocks, assemble your pages, and apply your style — in seconds.", color: "bg-blue-50 text-blue-500" },
                { icon: Rocket, title: "Customize & publish", body: "Tweak colors, edit text, rearrange blocks, then publish to a shareable link with one click.", color: "bg-emerald-50 text-emerald-500" },
              ].map(({ icon: Icon, title, body, color }, i) => (
                <div key={title} className="gsap-slide-left relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#E8553D]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8553D] text-sm font-bold text-white shadow-sm shadow-[#E8553D]/20">{i + 1}</div>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ STATS — DARK SECTION ══════════════ */}
        <section className="py-20 md:py-24 bg-[#1A1A1A]">
          <div className="gsap-reveal mx-auto max-w-5xl px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { target: 15780, suffix: "+", label: "Components" },
                { target: 128, suffix: "", label: "Categories" },
                { target: 60, suffix: "s", label: "Avg Build Time" },
                { target: 100, suffix: "%", label: "Mobile-First" },
              ].map(({ target, suffix, label }) => (
                <div key={label}>
                  <div className="text-3xl sm:text-5xl font-black text-white">
                    <Counter target={target} suffix={suffix} />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CATEGORIES ══════════════ */}
        <section id="templates" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="gsap-reveal text-center mb-14">
              <p className="text-sm font-semibold text-[#E8553D] mb-2 tracking-wide">Build anything</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Every type of website, covered</h2>
            </div>

            <div className="gsap-stagger grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.map(({ icon: Icon, label, desc, border }) => (
                <div key={label} className={`group bg-white rounded-2xl border border-gray-100 border-l-4 ${border} p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7F5] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 text-[#E8553D]" />
                  </div>
                  <h3 className="font-semibold mb-1">{label}</h3>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ FEATURES ROW ══════════════ */}
        <section className="py-20 md:py-24 bg-[#FAF7F4]">
          <div className="gsap-stagger mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-10">
            {[
              { icon: Globe, title: "Instant Publishing", desc: "One click to publish. Get a shareable link immediately. Connect your own domain anytime." },
              { icon: Layers, title: "15,000+ Blocks", desc: "Heroes, navbars, pricing tables, footers, e-commerce — every section you could ever need." },
              { icon: Smartphone, title: "Built for Mobile", desc: "Every component is designed for phones first. Build your entire site from your mobile device." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-gray-200/60 shadow-sm">
                  <Icon className="h-5 w-5 text-[#E8553D]" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ FINAL CTA ══════════════ */}
        <section className="py-20 md:py-28">
          <div className="gsap-reveal mx-auto max-w-3xl px-5">
            <div className="rounded-3xl bg-[#1A1A1A] p-10 md:p-16 text-center relative overflow-hidden">
              {/* Subtle decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#E8553D]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E8553D]/5 rounded-full blur-3xl" />

              <h2 className="relative text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Your website is one sentence away
              </h2>
              <p className="relative text-gray-400 mb-8 max-w-md mx-auto">
                Sign up free. Describe your dream website. Watch it come to life.
                No coding. No design skills. No credit card.
              </p>
              <Link href="/signup" className="relative group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#E8553D] px-8 text-base font-semibold text-white hover:bg-[#D14832] transition-all shadow-md shadow-[#E8553D]/25 hover:shadow-lg hover:shadow-[#E8553D]/30">
                Start Building — Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold text-[#1A1A1A]">Xxel</span>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-gray-300">© 2026 Xxel. Built for creators.</p>
        </div>
      </footer>
    </div>
  );
}
