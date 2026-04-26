"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/projects");
  }

  return (
    <div className="flex min-h-screen">
      {/* Left — Brand panel */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#E8553D]/10 blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#E8553D]/5 blur-[80px]" />

        <div className="relative flex flex-col justify-between p-12 w-full">
          <Link href="/" className="text-2xl font-bold text-white">Xxel</Link>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Start building<br />
              <span className="text-[#E8553D]">in seconds</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Create your free account and build your first website today. No credit card required.
            </p>
            <div className="bg-white/5 rounded-xl p-5 max-w-sm border border-white/5">
              <p className="text-sm text-gray-300 italic leading-relaxed">
                &ldquo;I built my entire online store from my phone in one afternoon. This platform is incredible.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8553D]/20" />
                <div>
                  <div className="text-xs font-medium text-white">Amara O.</div>
                  <div className="text-[10px] text-gray-500">Founder, StyleHaus</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-600">© 2026 Xxel. Built for creators.</p>
        </div>
      </div>

      {/* Right — Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-[#FAF7F4]">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="text-2xl font-bold text-[#1A1A1A]">Xxel</Link>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm p-8 md:p-10">
            <div className="space-y-2 mb-8">
              <h1 className="text-2xl font-bold text-[#1A1A1A]">Create your account</h1>
              <p className="text-sm text-gray-500">Free forever. No credit card needed.</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
              {error && (
                <div className="rounded-xl bg-red-50 border border-red-100 p-4 text-sm text-red-600 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5 text-xs">!</span>
                  {error}
                </div>
              )}

              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required className="flex h-12 w-full rounded-xl border border-gray-200 bg-[#FAFAF9] pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#E8553D] focus:ring-2 focus:ring-[#E8553D]/10 focus:outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="flex h-12 w-full rounded-xl border border-gray-200 bg-[#FAFAF9] pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#E8553D] focus:ring-2 focus:ring-[#E8553D]/10 focus:outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min. 6 characters" required minLength={6} className="flex h-12 w-full rounded-xl border border-gray-200 bg-[#FAFAF9] pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#E8553D] focus:ring-2 focus:ring-[#E8553D]/10 focus:outline-none transition-all" />
                </div>
              </div>

              <button type="submit" disabled={loading} className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E8553D] text-sm font-semibold text-white hover:bg-[#D14832] disabled:opacity-50 transition-all shadow-sm shadow-[#E8553D]/15">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </span>
                ) : (
                  <>
                    Create account
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                By signing up, you agree to our <Link href="#" className="underline">Terms</Link> and <Link href="#" className="underline">Privacy Policy</Link>
              </p>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-100" />
              <span className="text-xs text-gray-400">or</span>
              <div className="h-px flex-1 bg-gray-100" />
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#E8553D] hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
