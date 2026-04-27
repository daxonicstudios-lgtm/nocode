"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Key, Zap, Save, Loader2, Check, ArrowLeft, Shield } from "lucide-react";
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

      // Load profile for BYOK key
      const { data: profile } = await supabase
        .from("profiles")
        .select("anthropic_api_key")
        .eq("id", user.id)
        .single();

      if (profile?.anthropic_api_key) {
        const key = profile.anthropic_api_key;
        setCurrentKeyMask(`${key.slice(0, 8)}...${key.slice(-4)}`);
      }

      // Load credits
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
        setCurrentKeyMask(
          `${apiKey.slice(0, 8)}...${apiKey.slice(-4)}`
        );
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
      <div className="min-h-screen bg-[#FAF7F4] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F4]">
      <div className="mx-auto max-w-2xl px-5 py-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-8">Settings</h1>

        {/* Credits Section */}
        <div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50">
              <Zap className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1A1A1A]">Credits</h2>
              <p className="text-sm text-gray-400">
                Each AI generation uses credits
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl font-bold text-[#1A1A1A]">
              {Math.round(credits)}
            </span>
            <span className="text-gray-400">credits remaining</span>
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
                className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl border border-gray-200 hover:border-[#E8553D] hover:bg-[#E8553D]/5 transition-colors"
              >
                <span className="text-lg font-bold text-[#1A1A1A]">
                  {pack.credits}
                </span>
                <span className="text-xs text-gray-500">{pack.price}</span>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Stripe payment coming soon. For now, all users get 50 free credits.
          </p>
        </div>

        {/* BYOK Section */}
        <div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
              <Key className="h-5 w-5 text-violet-500" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1A1A1A]">
                Bring Your Own Key
              </h2>
              <p className="text-sm text-gray-400">
                Use your own API key for unlimited generations
              </p>
            </div>
          </div>

          {currentKeyMask ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-emerald-700">
                  API key connected: {currentKeyMask}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Generations use your API key — no credits deducted.
              </p>
              <button
                onClick={handleRemoveKey}
                disabled={saving}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Remove key
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Paste your Gemini API key below. Your key is stored securely and
                only used for your generations.
              </p>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAF9] text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
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
