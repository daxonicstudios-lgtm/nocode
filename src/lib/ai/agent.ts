// AI Agent — Parses user prompts and selects blocks from the registry
// Uses Google Gemini API for prompt analysis

interface BlockSelection {
  category: string;
  tags: string[];
  style: string;
  industry: string;
  quantity: number;
  notes: string;
}

interface AIResponse {
  siteName: string;
  siteDescription: string;
  industry: string;
  style: string;
  pages: {
    name: string;
    slug: string;
    isHomepage: boolean;
    blocks: BlockSelection[];
  }[];
}

// Full list of available categories with descriptions for the AI prompt
const CATEGORIES_PROMPT = `
CORE SECTIONS:
- heroes: Hero/banner sections (500 variants)
- navbars: Navigation bars (500 variants)
- footers: Footer sections (500 variants)
- features: Feature showcases (400 variants)
- about: About us sections (300 variants)
- services: Services sections (300 variants)
- pricing: Pricing tables (300 variants)
- testimonials: Customer reviews (300 variants)
- contact: Contact sections (300 variants)
- cta: Call-to-action sections (300 variants)
- blog: Blog/news layouts (300 variants)
- portfolio: Portfolio galleries (300 variants)
- faq: FAQ sections (200 variants)
- teams: Team member sections (200 variants)
- stats: Statistics/counters (200 variants)
- galleries: Image galleries (300 variants)
- steps: How-it-works/process (200 variants)
- comparison: Comparison tables (150 variants)
- video: Video sections (150 variants)
- download: App download/promo (150 variants)
- content: Content blocks (200 variants)
- newsletter: Email signup (150 variants)
- logos: Partner/client logos (150 variants)
- timeline: Timeline/roadmap (150 variants)
- maps: Maps/location (100 variants)
- trust: Trust badges/social proof (150 variants)
- banners: Announcement banners (150 variants)
- dividers: Section dividers (100 variants)
- events: Event listings (150 variants)
- careers: Job listings (150 variants)

E-COMMERCE:
- ecom-grids: Product grids (200 variants)
- ecom-cards: Product cards (300 variants)
- ecom-detail: Product detail pages (200 variants)
- ecom-cart: Shopping cart (100 variants)
- ecom-checkout: Checkout forms (150 variants)
- ecom-categories: Category browsing (150 variants)
- ecom-promos: Promotional banners (150 variants)
- ecom-wishlist: Wishlist/saved items (80 variants)
- ecom-orders: Order history (80 variants)
- ecom-reviews: Product reviews (100 variants)
- ecom-filters: Product filters (100 variants)
- ecom-stores: Store locator (80 variants)
- ecom-account: Customer account (100 variants)

FORMS:
- form-login: Login forms (200 variants)
- form-signup: Signup forms (200 variants)
- form-contact: Contact forms (150 variants)
- form-multistep: Multi-step wizards (100 variants)
- form-booking: Booking/appointment (150 variants)
- form-survey: Survey/quiz forms (100 variants)
- form-payment: Payment forms (100 variants)
- form-search: Search bars (80 variants)
- form-registration: Event registration (100 variants)
- form-application: Application forms (100 variants)

DASHBOARD:
- dash-layouts: Dashboard layouts (150 variants)
- dash-sidebars: Sidebar navigation (100 variants)
- dash-tables: Data tables (150 variants)
- dash-charts: Charts/graphs (200 variants)
- dash-profiles: User profiles (100 variants)
- dash-settings: Settings panels (100 variants)
- dash-notifications: Notification center (80 variants)
- dash-upload: File upload (80 variants)
- dash-kanban: Kanban boards (80 variants)
- dash-calendar: Calendar views (80 variants)
- dash-search: Dashboard search (60 variants)
- dash-empty: Empty states (60 variants)
- dash-onboarding: Onboarding wizards (80 variants)
- dash-chat: Chat/messaging (100 variants)
- dash-activity: Activity feeds (60 variants)
- dash-tasks: Task lists (80 variants)
- dash-inbox: Inbox/messages (80 variants)
- dash-user-mgmt: User management (60 variants)
- dash-billing: Billing/invoices (60 variants)

INDUSTRY-SPECIFIC:
- ind-restaurant: Restaurant (100 variants)
- ind-realestate: Real Estate (100 variants)
- ind-medical: Medical/Healthcare (100 variants)
- ind-education: Education (100 variants)
- ind-fitness: Fitness/Gym (80 variants)
- ind-legal: Legal (80 variants)
- ind-automotive: Automotive (80 variants)
- ind-beauty: Beauty/Salon (80 variants)
- ind-construction: Construction (60 variants)
- ind-church: Church/Religious (60 variants)
- ind-wedding: Wedding (80 variants)
- ind-photography: Photography (80 variants)
- ind-music: Music (80 variants)
- ind-pets: Pets/Veterinary (60 variants)
- ind-travel: Travel/Tourism (100 variants)
- ind-finance: Finance/Banking (100 variants)
- ind-nonprofit: Non-Profit (80 variants)
- ind-coaching: Coaching (60 variants)
- ind-fashion: Fashion (80 variants)
- ind-agriculture: Agriculture (40 variants)
- ind-interior: Interior Design (60 variants)
- ind-architecture: Architecture (60 variants)
- ind-gaming: Gaming (60 variants)
- ind-podcast: Podcast (60 variants)
- ind-news: News/Media (80 variants)
- ind-logistics: Logistics (40 variants)
- ind-hr: HR/Recruitment (60 variants)

PAGES:
- page-landing: Landing pages (150 variants)
- page-404: 404 error pages (80 variants)
- page-coming: Coming soon pages (80 variants)
- page-thankyou: Thank you pages (60 variants)
- page-linkinbio: Link in bio (80 variants)
- page-splash: Splash pages (40 variants)
- page-maintenance: Maintenance pages (40 variants)
- page-construction: Under construction (40 variants)
- page-password: Password protected (30 variants)
- page-offline: Offline pages (30 variants)

NAVIGATION:
- nav-breadcrumbs: Breadcrumb trails (40 variants)
- nav-pagination: Pagination (50 variants)
- nav-tabs: Tab navigation (60 variants)
- nav-mega: Mega menus (60 variants)
- nav-mobile: Mobile menus (80 variants)
- nav-sticky: Sticky headers (40 variants)
- nav-backtotop: Back to top buttons (30 variants)

ANIMATIONS:
- anim-scroll: Scroll animations (100 variants)
- anim-carousel: Carousels/sliders (100 variants)
- anim-backgrounds: Animated backgrounds (60 variants)
- anim-text: Text animations (60 variants)
- anim-cursor: Cursor effects (30 variants)
- anim-hover: Hover effects (100 variants)
- anim-loading: Loading animations (60 variants)
- anim-marquee: Marquee/ticker (50 variants)
- anim-counters: Animated counters (50 variants)
- anim-transitions: Page transitions (50 variants)
- anim-micro: Micro-interactions (80 variants)
`;

const SYSTEM_PROMPT = `You are an AI agent for a no-code website builder. Analyze the user's description and select the best pre-built components (blocks) to assemble their website.

${CATEGORIES_PROMPT}

STYLE OPTIONS: "modern", "minimal", "bold", "dark", "elegant", "playful", "corporate"

For each block, specify:
- category: exact category slug from above
- tags: relevant tags to help find the best variant (e.g., ["accordion", "dark", "with-cta"])
- style: preferred visual style
- industry: if industry-specific (e.g., "restaurant", "saas", "fitness")
- quantity: how many blocks from this category (usually 1)
- notes: specific content/style guidance

RULES:
1. Every site needs at least: navbar, hero, footer
2. Match the industry — if user says "gym website", use ind-fitness blocks + fitness-tagged blocks
3. E-commerce sites need: ecom-grids, ecom-cards, ecom-cart, ecom-checkout at minimum
4. Dashboard apps need: dash-layouts, dash-sidebars, dash-tables at minimum
5. Keep pages focused — 4-8 blocks per page is ideal
6. Use industry-specific blocks when available (ind-*) alongside generic ones

Respond ONLY with valid JSON:
{
  "siteName": "string",
  "siteDescription": "string",
  "industry": "string (e.g. restaurant, saas, generic)",
  "style": "string (modern, minimal, bold, dark, elegant, playful, corporate)",
  "pages": [
    {
      "name": "string",
      "slug": "string",
      "isHomepage": boolean,
      "blocks": [
        {
          "category": "string",
          "tags": ["string"],
          "style": "string",
          "industry": "string",
          "quantity": number,
          "notes": "string"
        }
      ]
    }
  ]
}`;

export async function parseUserPrompt(prompt: string): Promise<AIResponse> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4096,
          responseMimeType: "application/json",
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} — ${error}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No response from Gemini");
  }

  return JSON.parse(text) as AIResponse;
}
