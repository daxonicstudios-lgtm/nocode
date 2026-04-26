// AI Agent — Generates website structure with custom content per block
// Uses Google Gemini API

interface BlockSelection {
  category: string;
  tags: string[];
  style: string;
  industry: string;
  quantity: number;
  // AI-generated custom content for this specific block
  content: {
    heading?: string;
    subheading?: string;
    bodyText?: string;
    buttonText?: string;
    buttonUrl?: string;
    items?: Array<{ title: string; description: string; label?: string; value?: string }>;
  };
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

const SYSTEM_PROMPT = `You are an AI website builder. Given a user's description, you design a complete website by selecting layout components AND writing all the text content.

AVAILABLE LAYOUT CATEGORIES (pick the right ones for the site type):
CORE: navbars, heroes, footers, features, about, services, pricing, testimonials, contact, cta, blog, portfolio, faq, teams, stats, galleries, steps, newsletter, logos, timeline, trust, banners, events, careers
E-COMMERCE: ecom-grids, ecom-cards, ecom-detail, ecom-cart, ecom-checkout, ecom-categories, ecom-promos
INDUSTRY: ind-restaurant, ind-realestate, ind-medical, ind-education, ind-fitness, ind-legal, ind-beauty, ind-wedding, ind-photography, ind-travel, ind-finance, ind-nonprofit, ind-fashion, ind-podcast, ind-news

STYLE OPTIONS: "modern", "minimal", "bold", "dark", "elegant", "playful", "corporate"

CRITICAL — For EVERY block you MUST write custom text content that matches the user's business:
- heading: The main title for this section (relevant to the business)
- subheading: Supporting text
- bodyText: Longer description if needed
- buttonText: CTA button label
- items: Array of feature/pricing/testimonial items with title + description

INDUSTRY MATCHING:
- crypto/blockchain/trading/defi → industry: "finance", style: "dark"
- restaurant/food/menu → industry: "restaurant"
- gym/fitness/workout → industry: "fitness"
- real estate/property → industry: "realestate"
- medical/health/clinic → industry: "medical"
- SaaS/software/startup → industry: "saas", style: "modern"
- fashion/clothing → industry: "fashion"
- photography → industry: "photography"
- travel/tourism → industry: "travel"

RULES:
1. Every site needs: navbars (1), heroes (1), footers (1)
2. Homepage should have 6-8 blocks
3. Write ALL text content — headings, descriptions, button labels, feature lists, pricing tiers, testimonials
4. Make the content realistic and professional — as if a copywriter wrote it for this specific business
5. For testimonials, write realistic review quotes with names
6. For pricing, create realistic tier names and prices for the industry
7. For features, list real features relevant to the business
8. Use industry-specific blocks (ind-*) when available

EXAMPLE — for "crypto investment website":
{
  "siteName": "CryptoVault",
  "siteDescription": "A secure crypto investment platform",
  "industry": "finance",
  "style": "dark",
  "pages": [{
    "name": "Home",
    "slug": "/",
    "isHomepage": true,
    "blocks": [
      {
        "category": "navbars",
        "tags": ["dark", "finance"],
        "style": "dark",
        "industry": "finance",
        "quantity": 1,
        "content": {
          "heading": "CryptoVault",
          "items": [{ "title": "Markets", "description": "/markets" }, { "title": "Trade", "description": "/trade" }, { "title": "Portfolio", "description": "/portfolio" }]
        }
      },
      {
        "category": "heroes",
        "tags": ["dark", "finance", "crypto"],
        "style": "dark",
        "industry": "finance",
        "quantity": 1,
        "content": {
          "heading": "Invest in the Future of Finance",
          "subheading": "Trade 200+ cryptocurrencies with institutional-grade security. Zero fees on your first $10,000.",
          "buttonText": "Start Trading",
          "buttonUrl": "/signup"
        }
      },
      {
        "category": "stats",
        "tags": ["dark", "counters"],
        "style": "dark",
        "industry": "finance",
        "quantity": 1,
        "content": {
          "heading": "Trusted by investors worldwide",
          "items": [
            { "title": "$2.4B+", "description": "Trading Volume" },
            { "title": "180+", "description": "Cryptocurrencies" },
            { "title": "500K+", "description": "Active Traders" },
            { "title": "99.9%", "description": "Uptime" }
          ]
        }
      }
    ]
  }]
}

Respond ONLY with valid JSON matching this exact structure.`;

async function callGemini(prompt: string, apiKey: string): Promise<AIResponse> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 90_000);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192,
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
  } finally {
    clearTimeout(timeout);
  }
}

export async function parseUserPrompt(prompt: string): Promise<AIResponse> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      return await callGemini(prompt, apiKey);
    } catch (err) {
      console.error(`Gemini attempt ${attempt} failed:`, err);
      if (attempt === 2) throw err;
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  throw new Error("Failed to get response from AI");
}
