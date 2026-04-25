/**
 * Static block catalog — lightweight metadata for the BlockPicker.
 * Does NOT import any components or the registry.
 * Just category names and slug patterns for the UI.
 */

export interface CatalogEntry {
  slug: string;
  name: string;
  category: string;
}

export interface CategoryInfo {
  slug: string;
  label: string;
  count: number;
}

const CATEGORIES: CategoryInfo[] = [
  { slug: "heroes", label: "Heroes", count: 500 },
  { slug: "navbars", label: "Navbars", count: 500 },
  { slug: "footers", label: "Footers", count: 500 },
  { slug: "features", label: "Features", count: 400 },
  { slug: "about", label: "About", count: 300 },
  { slug: "services", label: "Services", count: 300 },
  { slug: "pricing", label: "Pricing", count: 300 },
  { slug: "testimonials", label: "Testimonials", count: 300 },
  { slug: "contact", label: "Contact", count: 300 },
  { slug: "cta", label: "Call to Action", count: 300 },
  { slug: "blog", label: "Blog", count: 300 },
  { slug: "portfolio", label: "Portfolio", count: 300 },
  { slug: "faq", label: "FAQ", count: 200 },
  { slug: "teams", label: "Team", count: 200 },
  { slug: "stats", label: "Stats", count: 200 },
  { slug: "galleries", label: "Gallery", count: 300 },
  { slug: "steps", label: "Steps", count: 200 },
  { slug: "comparison", label: "Comparison", count: 150 },
  { slug: "video", label: "Video", count: 150 },
  { slug: "download", label: "Download", count: 150 },
  { slug: "content", label: "Content", count: 200 },
  { slug: "newsletter", label: "Newsletter", count: 150 },
  { slug: "logos", label: "Logos", count: 150 },
  { slug: "timeline", label: "Timeline", count: 150 },
  { slug: "maps", label: "Maps", count: 100 },
  { slug: "trust", label: "Trust", count: 150 },
  { slug: "banners", label: "Banners", count: 150 },
  { slug: "dividers", label: "Dividers", count: 100 },
  { slug: "events", label: "Events", count: 150 },
  { slug: "careers", label: "Careers", count: 150 },
  { slug: "ecom-grids", label: "Product Grids", count: 200 },
  { slug: "ecom-cards", label: "Product Cards", count: 300 },
  { slug: "ecom-detail", label: "Product Detail", count: 200 },
  { slug: "ecom-cart", label: "Cart", count: 100 },
  { slug: "ecom-checkout", label: "Checkout", count: 150 },
  { slug: "ecom-categories", label: "Categories", count: 150 },
  { slug: "ecom-promos", label: "Promos", count: 150 },
  { slug: "ind-restaurant", label: "Restaurant", count: 100 },
  { slug: "ind-realestate", label: "Real Estate", count: 100 },
  { slug: "ind-medical", label: "Medical", count: 100 },
  { slug: "ind-education", label: "Education", count: 100 },
  { slug: "ind-fitness", label: "Fitness", count: 80 },
  { slug: "ind-legal", label: "Legal", count: 80 },
  { slug: "ind-beauty", label: "Beauty", count: 80 },
  { slug: "ind-travel", label: "Travel", count: 100 },
  { slug: "ind-finance", label: "Finance", count: 100 },
  { slug: "ind-fashion", label: "Fashion", count: 80 },
];

/** Get all categories for the block picker UI */
export function getCatalogCategories(): CategoryInfo[] {
  return CATEGORIES;
}

/** Generate catalog entries for a category (slug + name pairs) */
export function getCatalogEntries(categorySlug: string): CatalogEntry[] {
  const cat = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!cat) return [];

  const entries: CatalogEntry[] = [];
  for (let i = 1; i <= cat.count; i++) {
    const n = String(i).padStart(3, "0");
    entries.push({
      slug: `${categorySlug}-${n}`,
      name: `${cat.label} ${n}`,
      category: categorySlug,
    });
  }
  return entries;
}
