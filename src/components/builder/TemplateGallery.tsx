"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Layout, Loader2, X, ShoppingBag, BarChart3, Camera, Utensils, Dumbbell, Code2 } from "lucide-react";

interface Template {
  id: string;
  name: string;
  description: string;
  icon: typeof Layout;
  prompt: string;
  color: string;
}

const TEMPLATES: Template[] = [
  {
    id: "saas-landing",
    name: "SaaS Landing Page",
    description: "Modern landing page with hero, features, pricing, testimonials, and CTA",
    icon: Layout,
    color: "text-violet-400",
    prompt:
      "Build a modern SaaS landing page with a bold hero section, 3 feature cards with icons, a pricing table with 3 tiers (Free, Pro, Enterprise), a testimonials section with 3 customer quotes, and a final CTA section. Use a professional dark theme with violet accents.",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Store",
    description: "Product grid, cart, filters, and checkout flow",
    icon: ShoppingBag,
    color: "text-emerald-400",
    prompt:
      "Build an e-commerce store for sneakers. Include a header with logo, search bar, and cart icon. Show a product grid with 8 sneaker cards (image, name, price, add to cart button). Add a sidebar with filters (brand, price range, size). Include a shopping cart drawer that slides in from the right. Use a clean white theme with emerald accents.",
  },
  {
    id: "dashboard",
    name: "Analytics Dashboard",
    description: "Charts, stats cards, tables, and sidebar navigation",
    icon: BarChart3,
    color: "text-blue-400",
    prompt:
      "Build an analytics dashboard with a dark sidebar navigation (Dashboard, Analytics, Users, Settings links), 4 stat cards at the top (Revenue, Users, Orders, Growth with sparkline trends), a main area chart showing revenue over 12 months, a data table of recent orders, and a pie chart of traffic sources. Use a dark theme with blue accents.",
  },
  {
    id: "portfolio",
    name: "Portfolio Website",
    description: "Personal portfolio with projects, skills, and contact form",
    icon: Camera,
    color: "text-amber-400",
    prompt:
      "Build a photographer portfolio website. Include a fullscreen hero with a background image and name overlay, a masonry grid gallery with 12 photo thumbnails, an about section with bio and skills, a services section with pricing, and a contact form. Use an elegant dark theme with warm amber accents and smooth transitions.",
  },
  {
    id: "restaurant",
    name: "Restaurant Website",
    description: "Menu, reservations, about, and gallery",
    icon: Utensils,
    color: "text-red-400",
    prompt:
      "Build a restaurant website for an Italian restaurant called 'La Bella'. Include a hero with a food image and reservation button, a menu section with categories (Antipasti, Primi, Secondi, Dolci) and items with prices, a photo gallery, an about section with chef bio, and a reservation form. Use warm colors with a cream background and deep red accents.",
  },
  {
    id: "fitness",
    name: "Fitness App",
    description: "Workout tracker, progress charts, and exercise library",
    icon: Dumbbell,
    color: "text-orange-400",
    prompt:
      "Build a fitness tracking app. Include a dashboard showing today's workout plan, a weekly progress chart, calorie tracker, a workout log with exercises (sets, reps, weight), a timer component, and a library of exercises organized by muscle group. Use a dark theme with orange/neon accents for an energetic feel.",
  },
];

export default function TemplateGallery({
  onClose,
}: {
  onClose: () => void;
}) {
  const router = useRouter();
  const [creating, setCreating] = useState<string | null>(null);

  const handleSelectTemplate = async (template: Template) => {
    setCreating(template.id);

    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const slug =
        template.id + "-" + Math.random().toString(36).slice(2, 8);

      const { data: newProject, error } = await supabase
        .from("projects")
        .insert({
          user_id: user.id,
          name: template.name,
          slug,
          description: template.description,
          status: "draft",
          project_type: "app",
        })
        .select("id")
        .single();

      if (error || !newProject) throw new Error("Failed to create project");

      router.push(
        `/builder/${newProject.id}?prompt=${encodeURIComponent(template.prompt)}`
      );
    } catch {
      setCreating(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-violet-400" />
            <span className="text-base font-semibold text-zinc-200">
              Start from a Template
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Templates grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEMPLATES.map((template) => {
              const Icon = template.icon;
              const isCreating = creating === template.id;
              return (
                <button
                  key={template.id}
                  onClick={() => handleSelectTemplate(template)}
                  disabled={!!creating}
                  className="flex flex-col gap-3 p-5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 hover:bg-zinc-800 disabled:opacity-50 transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700/50">
                      {isCreating ? (
                        <Loader2 className="w-5 h-5 animate-spin text-violet-400" />
                      ) : (
                        <Icon className={`w-5 h-5 ${template.color}`} />
                      )}
                    </div>
                    <span className="text-sm font-semibold text-zinc-200">
                      {template.name}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {template.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
