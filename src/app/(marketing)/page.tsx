"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Image,
  Mic,
  Rocket,
  Database,
  Globe,
  Shield,
  Code2,
  Monitor,
  CreditCard,
  Check,
  ChevronRight,
  Play,
} from "lucide-react";

// Animated typing effect for the hero
function TypeWriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(word.slice(0, text.length + 1));
          if (text === word) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(word.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
      {text}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  );
}

// Feature card
function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
}: {
  icon: typeof Sparkles;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:-translate-y-1">
      <div
        className={`inline-flex p-3 rounded-xl ${gradient} mb-4`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-100 mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
}

// Pricing card
function PricingCard({
  name,
  price,
  credits,
  features,
  popular,
}: {
  name: string;
  price: string;
  credits: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl border ${
        popular
          ? "bg-gradient-to-b from-violet-600/10 to-zinc-900 border-violet-500/30 shadow-lg shadow-violet-500/5"
          : "bg-zinc-900/50 border-zinc-800/50"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-xs font-semibold text-white">
          Most Popular
        </div>
      )}
      <h3 className="text-lg font-semibold text-zinc-100">{name}</h3>
      <div className="mt-4 mb-1">
        <span className="text-4xl font-bold text-white">{price}</span>
        {price !== "Free" && (
          <span className="text-zinc-500 text-sm">/month</span>
        )}
      </div>
      <p className="text-sm text-zinc-500 mb-6">{credits}</p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
            <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/signup"
        className={`inline-flex items-center justify-center h-11 rounded-xl text-sm font-semibold transition-all ${
          popular
            ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 shadow-lg shadow-violet-500/20"
            : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-600/8 via-blue-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* ═══ NAVBAR ═══ */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
            XXEL
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
            How It Works
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-violet-500/20"
          >
            Start Building
          </Link>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 sm:pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          AI-Powered App Builder
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Build apps by
          <br />
          <TypeWriter
            words={[
              "talking to AI",
              "describing ideas",
              "sending a prompt",
              "uploading a design",
            ]}
          />
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Describe what you want. Watch it build in real-time. Deploy with one
          click. No coding required — the AI writes production-quality React
          code for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 h-13 px-8 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-base font-semibold hover:from-violet-500 hover:to-blue-500 transition-all shadow-xl shadow-violet-500/20"
          >
            Start Building — It&apos;s Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <button className="inline-flex items-center gap-2 h-13 px-6 rounded-xl border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700 transition-all">
            <Play className="w-4 h-4" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-16 mt-16 text-center">
          {[
            { value: "50+", label: "Free credits" },
            { value: "3", label: "AI models" },
            { value: "1-click", label: "Deploy" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ LIVE PREVIEW MOCKUP ═══ */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-zinc-800/50 rounded-md px-3 py-1 text-xs text-zinc-500 text-center max-w-md mx-auto">
                xxel.app/builder/my-project
              </div>
            </div>
          </div>
          {/* Mock builder */}
          <div className="flex h-[400px] sm:h-[500px]">
            {/* Chat panel mock */}
            <div className="w-1/3 border-r border-zinc-800/50 p-4 flex flex-col">
              <div className="text-xs font-medium text-zinc-500 mb-3">
                Chat
              </div>
              <div className="space-y-3 flex-1">
                <div className="ml-auto max-w-[80%] rounded-xl bg-violet-600/80 px-3 py-2 text-xs text-white">
                  Build me a crypto dashboard with charts
                </div>
                <div className="max-w-[80%] rounded-xl bg-zinc-800 px-3 py-2 text-xs text-zinc-300">
                  I&apos;ll create a professional crypto dashboard with real-time
                  charts, portfolio tracking, and market data...
                </div>
                <div className="flex gap-1">
                  <div className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-500">
                    App.tsx
                  </div>
                  <div className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-500">
                    Dashboard.tsx
                  </div>
                  <div className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-500">
                    Chart.tsx
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="bg-zinc-800/50 rounded-xl px-3 py-2.5 text-xs text-zinc-600">
                  Describe what you want to build...
                </div>
              </div>
            </div>
            {/* Preview mock */}
            <div className="flex-1 bg-zinc-950 p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-violet-400/50" />
                </div>
                <p className="text-sm text-zinc-600">
                  Live preview renders here
                </p>
                <p className="text-xs text-zinc-700 mt-1">
                  Real React app running in your browser
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to build
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            From idea to deployed app in minutes. Not mockups — real,
            production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            icon={Sparkles}
            title="Multi-Model AI"
            description="Switch between Gemini, Claude, and GPT-4o. Pick the model that works best for your project."
            gradient="bg-gradient-to-br from-violet-600 to-violet-700"
          />
          <FeatureCard
            icon={Image}
            title="Screenshot to Code"
            description="Upload any design or screenshot. The AI recreates it as working React code — pixel perfect."
            gradient="bg-gradient-to-br from-blue-600 to-blue-700"
          />
          <FeatureCard
            icon={Mic}
            title="Voice Building"
            description="Talk to build. Describe what you want with your voice — perfect for building on your phone."
            gradient="bg-gradient-to-br from-emerald-600 to-emerald-700"
          />
          <FeatureCard
            icon={Rocket}
            title="One-Click Deploy"
            description="Deploy your app to a live URL instantly. Custom domains available. SSL included."
            gradient="bg-gradient-to-br from-orange-600 to-orange-700"
          />
          <FeatureCard
            icon={Database}
            title="Real Database"
            description="Connect Supabase for auth, database, and storage. Your app works with real data, not mockups."
            gradient="bg-gradient-to-br from-teal-600 to-teal-700"
          />
          <FeatureCard
            icon={CreditCard}
            title="African Payments"
            description="M-Pesa, Flutterwave, Paystack built in. Accept payments from anywhere in Africa."
            gradient="bg-gradient-to-br from-rose-600 to-rose-700"
          />
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Three steps. That&apos;s it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Describe",
              description:
                "Tell the AI what you want to build. Type it, speak it, or upload a screenshot.",
              icon: MessageSquareIcon,
            },
            {
              step: "02",
              title: "Watch it build",
              description:
                "See your app come to life in real-time. Code streams in, preview updates instantly.",
              icon: Code2,
            },
            {
              step: "03",
              title: "Ship it",
              description:
                "Deploy with one click. Your app is live with a custom URL, SSL, and everything.",
              icon: Globe,
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-5xl font-bold text-zinc-800 mb-4">
                {item.step}
              </div>
              <item.icon className="w-8 h-8 text-violet-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple pricing
          </h2>
          <p className="text-zinc-500">
            Start free. Scale when you&apos;re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            name="Free"
            price="Free"
            credits="50 credits to start"
            features={[
              "50 AI generations",
              "Gemini Flash model",
              "Live preview",
              "Unlimited projects",
              "Community support",
            ]}
          />
          <PricingCard
            name="Pro"
            price="$25"
            credits="400 credits/month"
            popular
            features={[
              "400 AI generations",
              "All models (Claude, GPT-4o)",
              "Screenshot to code",
              "Custom domains",
              "One-click deploy",
              "Priority support",
            ]}
          />
          <PricingCard
            name="Scale"
            price="$50"
            credits="1,000 credits/month"
            features={[
              "1,000 AI generations",
              "All Pro features",
              "Supabase integration",
              "GitHub sync",
              "Team collaboration",
              "API access",
            ]}
          />
        </div>

        <p className="text-center text-sm text-zinc-600 mt-8">
          Or bring your own API key for unlimited generations — $0/month.
        </p>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="rounded-3xl bg-gradient-to-b from-violet-600/10 to-zinc-900/50 border border-violet-500/20 p-12 sm:p-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to build something?
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-8">
            Join thousands of builders creating apps with AI. No credit card
            required.
          </p>
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 h-13 px-8 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-base font-semibold hover:from-violet-500 hover:to-blue-500 transition-all shadow-xl shadow-violet-500/20"
          >
            Start Building — Free
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative z-10 border-t border-zinc-800/50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              XXEL
            </span>
            <span className="text-xs text-zinc-600">
              Built by developers in Africa, for the world.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <Link href="/login" className="hover:text-zinc-300 transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="hover:text-zinc-300 transition-colors">
              Sign up
            </Link>
            <a href="#pricing" className="hover:text-zinc-300 transition-colors">
              Pricing
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Simple message icon component
function MessageSquareIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
