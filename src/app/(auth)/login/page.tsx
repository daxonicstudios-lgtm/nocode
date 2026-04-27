"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/projects");
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-4 py-12">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-violet-600/8 via-blue-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400"
          >
            XXEL
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm p-8">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-zinc-100">Welcome back</h1>
            <p className="text-sm text-zinc-500 mt-1">
              Log in to continue building
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-400 mb-1.5"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full h-11 rounded-xl bg-zinc-800/50 border border-zinc-700/50 pl-10 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-400"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-violet-400 hover:text-violet-300"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-11 rounded-xl bg-zinc-800/50 border border-zinc-700/50 pl-10 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full h-11 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-sm font-semibold text-white hover:from-violet-500 hover:to-blue-500 disabled:opacity-50 transition-all shadow-lg shadow-violet-500/10 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  Log in
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-xs text-zinc-600">or</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          <p className="mt-6 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-violet-400 hover:text-violet-300"
            >
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
