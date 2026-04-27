"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  Key,
  Zap,
  Save,
  Loader2,
  Check,
  ArrowLeft,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [currentKeyMask, setCurrentKeyMask] = useState<string | null>(null);
  const [credits, setCredits] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile } = await supabase
        .from("profiles")
        .select("anthropic_api_key")
        .eq("id", user.id)
        .single();

      if (profile?.anthropic_api_key) {
        const key = profile.anthropic_api_key;
        setCurrentKeyMask(`${key.slice(0, 8)}...${key.slice(-4)}`);
      }

      const credRes = await fetch("/api/credits");
      if (credRes.ok) {
        const data = await credRes.json();
        setCredits(data.balance ?? 0);
      }

      setLoading(false);
    }
    load();
  }, []);

  const handleSaveKey = async () => {
    setSaving(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .update({ anthropic_api_key: apiKey.trim() || null })
      .eq("id", user.id);

    if (!error) {
      setSaved(true);
      if (apiKey.trim()) {
        setCurrentKeyMask(`${apiKey.slice(0, 8)}...${apiKey.slice(-4)}`);
      } else {
        setCurrentKeyMask(null);
      }
      setApiKey("");
      setTimeout(() => setSaved(false), 2000);
    }
    setSaving(false);
  };

  const handleRemoveKey = async () => {
    setSaving(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from("profiles")
      .update({ anthropic_api_key: null })
      .eq("id", user.id);

    setCurrentKeyMask(null);
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-zinc-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="mx-auto max-w-2xl px-5 py-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-300 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <h1 className="text-2xl font-bold text-zinc-100 mb-8">Settings</h1>

        {/* Credits Section */}
        <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-6 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10">
              <Zap className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-200">
                Credits
              </h2>
              <p className="text-xs text-zinc-600">
                Each AI generation uses credits
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-5">
            <span className="text-4xl font-bold text-white">
              {Math.round(credits)}
            </span>
            <span className="text-zinc-600 text-sm">credits remaining</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { credits: 50, price: "$5" },
              { credits: 200, price: "$15" },
              { credits: 400, price: "$25" },
              { credits: 1000, price: "$50" },
            ].map((pack) => (
              <button
                key={pack.credits}
                className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl border border-zinc-800 hover:border-violet-500/50 hover:bg-violet-500/5 transition-colors"
              >
                <span className="text-lg font-bold text-zinc-200">
                  {pack.credits}
                </span>
                <span className="text-xs text-zinc-600">{pack.price}</span>
              </button>
            ))}
          </div>
          <p className="text-xs text-zinc-700 mt-3">
            Stripe payments coming soon. All users get 50 free credits on
            signup.
          </p>
        </div>

        {/* BYOK Section */}
        <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Key className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-200">
                Bring Your Own Key
              </h2>
              <p className="text-xs text-zinc-600">
                Use your own API key for unlimited generations
              </p>
            </div>
          </div>

          {currentKeyMask ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-300">
                  API key connected: {currentKeyMask}
                </span>
              </div>
              <p className="text-xs text-zinc-600">
                Generations use your API key — no credits deducted.
              </p>
              <button
                onClick={handleRemoveKey}
                disabled={saving}
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                Remove key
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-zinc-500">
                Paste your Gemini or Anthropic API key. Stored securely, only
                used for your generations.
              </p>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy... or sk-ant-..."
                className="w-full h-11 rounded-xl bg-zinc-800/50 border border-zinc-700/50 px-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 outline-none transition-all"
              />
              <button
                onClick={handleSaveKey}
                disabled={saving || !apiKey.trim()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500 disabled:opacity-40 transition-colors"
              >
                {saved ? (
                  <>
                    <Check className="w-4 h-4" />
                    Saved!
                  </>
                ) : saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save API Key
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
