import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            NoCode
          </Link>
          <nav className="flex items-center gap-4">
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
              Get Started Free
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 text-center md:py-24">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Build Your Website
            <br />
            <span className="text-primary/70">Without Writing Code</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
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
          </div>
        </section>

        {/* Features */}
        <section className="border-t bg-muted/50">
          <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                AI
              </div>
              <h3 className="text-lg font-semibold">AI-Powered</h3>
              <p className="text-muted-foreground">
                Describe what you want and our AI assembles the perfect
                components for your site.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                📱
              </div>
              <h3 className="text-lg font-semibold">Mobile First</h3>
              <p className="text-muted-foreground">
                Build from your phone. Every component is optimized for mobile
                devices.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                🎨
              </div>
              <h3 className="text-lg font-semibold">Fully Customizable</h3>
              <p className="text-muted-foreground">
                Change colors, swap components, edit text — make it truly yours
                with zero coding.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <p className="text-sm text-muted-foreground">
            © 2026 NoCode. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
