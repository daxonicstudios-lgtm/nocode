import Link from "next/link";
import {
  Sparkles,
  Smartphone,
  Palette,
  MessageSquare,
  Wand2,
  Rocket,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";
import { Footer } from "@/components/shared/footer";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe your idea",
    body: "Tell our AI what kind of site you want — a restaurant, a portfolio, a store. One sentence is enough.",
  },
  {
    icon: Wand2,
    title: "AI builds it instantly",
    body: "We assemble the right sections from 15,000+ pre-built components, picked to match your goal.",
  },
  {
    icon: Rocket,
    title: "Customize & publish",
    body: "Tweak colors, swap blocks, edit text — then publish to a shareable link in one tap.",
  },
];

const trust = [
  { icon: Zap, label: "Built in seconds" },
  { icon: ShieldCheck, label: "Mobile-first" },
  { icon: Users, label: "Made for Africa" },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            NoCode
          </Link>
          <nav className="flex items-center gap-3 sm:gap-4">
            <Link
              href="#how-it-works"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline"
            >
              How it works
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 text-center md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered website builder
          </span>
          <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Build Your Website
            <br />
            <span className="text-primary/70">Without Writing Code</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
            Tell our AI what you want, and watch your website come to life.
            Thousands of beautiful components, fully customizable, mobile-first.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Start Building — It&apos;s Free
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-12 items-center rounded-md border px-8 text-base font-medium hover:bg-muted"
            >
              See how it works
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="border-t bg-muted/50">
          <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">AI-Powered</h3>
              <p className="text-muted-foreground">
                Describe what you want and our AI assembles the perfect
                components for your site.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Mobile First</h3>
              <p className="text-muted-foreground">
                Build from your phone. Every component is optimized for mobile
                devices.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Fully Customizable</h3>
              <p className="text-muted-foreground">
                Change colors, swap components, edit text — make it truly yours
                with zero coding.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-t">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                From idea to live site in 3 steps
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                No templates to pick. No drag-and-drop learning curve. Just tell
                us what you need.
              </p>
            </div>
            <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <li
                  key={title}
                  className="relative flex flex-col gap-3 rounded-xl border bg-card p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold tracking-tight md:text-5xl">
                  15,780+
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pre-built components across 128 categories
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold tracking-tight md:text-5xl">
                  &lt; 60s
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Average time from prompt to published site
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold tracking-tight md:text-5xl">
                  100%
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mobile-first, works great on any phone
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {trust.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12 md:py-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Your website is one sentence away
              </h2>
              <p className="max-w-xl text-primary-foreground/80 md:text-lg">
                Sign up free. Build from your phone. Publish when you&apos;re
                ready.
              </p>
              <Link
                href="/signup"
                className="inline-flex h-12 items-center rounded-md bg-background px-8 text-base font-medium text-foreground hover:bg-background/90"
              >
                Start Building — It&apos;s Free
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
