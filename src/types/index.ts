// ============================================
// Core Types for the No-Code Platform
// ============================================

export type UserPlan = "free" | "pro";
export type ProjectStatus = "draft" | "pending" | "published";
export type PublishRequestStatus = "pending" | "approved" | "deployed" | "rejected";
export type DomainStatus = "pending" | "active" | "expired";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url: string | null;
  plan: UserPlan;
  created_at: string;
}

export interface Project {
  id: string;
  user_id: string;
  name: string;
  slug: string;
  description: string | null;
  status: ProjectStatus;
  preview_url: string | null;
  custom_domain: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectPage {
  id: string;
  project_id: string;
  name: string;
  slug: string;
  sort_order: number;
  is_homepage: boolean;
}

export interface Block {
  id: string;
  category: string;
  name: string;
  slug: string;
  description: string | null;
  thumbnail_url: string | null;
  is_pro: boolean;
  tags: string[];
  html_preview: string | null;
  component_path: string;
  created_at: string;
}

export interface PageBlock {
  id: string;
  page_id: string;
  block_id: string;
  sort_order: number;
  custom_props: Record<string, unknown>;
}

export interface PublishRequest {
  id: string;
  project_id: string;
  user_id: string;
  status: PublishRequestStatus;
  notes: string | null;
  created_at: string;
}

export interface Domain {
  id: string;
  project_id: string;
  domain_name: string;
  status: DomainStatus;
  purchased_at: string | null;
}

// Editor-specific types
export interface EditorTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  border: string;
  card: string;
  cardForeground: string;
  muted: string;
}

export interface BlockCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const BLOCK_CATEGORIES: BlockCategory[] = [
  // Core Sections
  { slug: "heroes", name: "Heroes", description: "Hero/banner sections", icon: "layout" },
  { slug: "navbars", name: "Navigation", description: "Navigation bars", icon: "menu" },
  { slug: "footers", name: "Footers", description: "Footer sections", icon: "arrow-down" },
  { slug: "features", name: "Features", description: "Feature showcases", icon: "star" },
  { slug: "about", name: "About", description: "About us sections", icon: "info" },
  { slug: "services", name: "Services", description: "Services sections", icon: "briefcase" },
  { slug: "pricing", name: "Pricing", description: "Pricing tables", icon: "credit-card" },
  { slug: "testimonials", name: "Testimonials", description: "Customer reviews", icon: "message-circle" },
  { slug: "contact", name: "Contact", description: "Contact sections", icon: "mail" },
  { slug: "cta", name: "Call to Action", description: "CTA sections", icon: "megaphone" },
  { slug: "blog", name: "Blog", description: "Blog/news layouts", icon: "file-text" },
  { slug: "portfolio", name: "Portfolio", description: "Portfolio galleries", icon: "image" },
  { slug: "faq", name: "FAQ", description: "FAQ sections", icon: "help-circle" },
  { slug: "teams", name: "Teams", description: "Team member sections", icon: "users" },
  { slug: "stats", name: "Statistics", description: "Stats & counters", icon: "bar-chart" },
  { slug: "galleries", name: "Galleries", description: "Image galleries", icon: "image" },
  { slug: "steps", name: "Steps", description: "How-it-works/process", icon: "list-ordered" },
  { slug: "comparison", name: "Comparison", description: "Comparison tables", icon: "columns" },
  { slug: "video", name: "Video", description: "Video sections", icon: "play" },
  { slug: "download", name: "Download", description: "App download/promo", icon: "download" },
  { slug: "content", name: "Content", description: "Content blocks", icon: "type" },
  { slug: "newsletter", name: "Newsletter", description: "Email signup", icon: "mail" },
  { slug: "logos", name: "Logos", description: "Partner/client logos", icon: "award" },
  { slug: "timeline", name: "Timeline", description: "Timeline/roadmap", icon: "clock" },
  { slug: "maps", name: "Maps", description: "Maps/location", icon: "map-pin" },
  { slug: "trust", name: "Trust", description: "Trust badges/social proof", icon: "shield" },
  { slug: "banners", name: "Banners", description: "Announcement banners", icon: "flag" },
  { slug: "dividers", name: "Dividers", description: "Section dividers", icon: "minus" },
  { slug: "events", name: "Events", description: "Event listings", icon: "calendar" },
  { slug: "careers", name: "Careers", description: "Job listings", icon: "briefcase" },
];
