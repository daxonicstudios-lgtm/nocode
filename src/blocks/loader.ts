"use client";

import { lazy, type ComponentType } from "react";
import type { BlockProps } from "./types";

/**
 * Production-ready block loader — maps each category to its own
 * dynamic import pattern so the bundler can code-split correctly.
 */

const cache = new Map<string, React.LazyExoticComponent<ComponentType<BlockProps>>>();

type Loader = (num: string) => Promise<{ default: ComponentType<BlockProps> }>;

// Each category has an explicit import pattern so the bundler knows
// which files are possible targets for code-splitting.
const categoryLoaders: Record<string, Loader> = {
  "about": (n) => import("./about/about-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-backgrounds": (n) => import("./anim-backgrounds/anim-backgrounds-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-carousel": (n) => import("./anim-carousel/anim-carousel-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-counters": (n) => import("./anim-counters/anim-counters-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-cursor": (n) => import("./anim-cursor/anim-cursor-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-hover": (n) => import("./anim-hover/anim-hover-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-loading": (n) => import("./anim-loading/anim-loading-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-marquee": (n) => import("./anim-marquee/anim-marquee-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-micro": (n) => import("./anim-micro/anim-micro-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-scroll": (n) => import("./anim-scroll/anim-scroll-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-text": (n) => import("./anim-text/anim-text-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "anim-transitions": (n) => import("./anim-transitions/anim-transitions-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "banners": (n) => import("./banners/banners-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "blog": (n) => import("./blog/blog-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "careers": (n) => import("./careers/careers-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "comparison": (n) => import("./comparison/comparison-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "contact": (n) => import("./contact/contact-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "content": (n) => import("./content/content-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "cta": (n) => import("./cta/cta-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-activity": (n) => import("./dash-activity/dash-activity-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-billing": (n) => import("./dash-billing/dash-billing-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-calendar": (n) => import("./dash-calendar/dash-calendar-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-charts": (n) => import("./dash-charts/dash-charts-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-chat": (n) => import("./dash-chat/dash-chat-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-empty": (n) => import("./dash-empty/dash-empty-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-inbox": (n) => import("./dash-inbox/dash-inbox-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-kanban": (n) => import("./dash-kanban/dash-kanban-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-layouts": (n) => import("./dash-layouts/dash-layouts-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-notifications": (n) => import("./dash-notifications/dash-notifications-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-onboarding": (n) => import("./dash-onboarding/dash-onboarding-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-profiles": (n) => import("./dash-profiles/dash-profiles-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-search": (n) => import("./dash-search/dash-search-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-settings": (n) => import("./dash-settings/dash-settings-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-sidebars": (n) => import("./dash-sidebars/dash-sidebars-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-tables": (n) => import("./dash-tables/dash-tables-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-tasks": (n) => import("./dash-tasks/dash-tasks-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-upload": (n) => import("./dash-upload/dash-upload-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dash-user-mgmt": (n) => import("./dash-user-mgmt/dash-user-mgmt-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "dividers": (n) => import("./dividers/dividers-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "download": (n) => import("./download/download-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-account": (n) => import("./ecom-account/ecom-account-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-cards": (n) => import("./ecom-cards/ecom-cards-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-cart": (n) => import("./ecom-cart/ecom-cart-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-categories": (n) => import("./ecom-categories/ecom-categories-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-checkout": (n) => import("./ecom-checkout/ecom-checkout-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-detail": (n) => import("./ecom-detail/ecom-detail-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-filters": (n) => import("./ecom-filters/ecom-filters-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-grids": (n) => import("./ecom-grids/ecom-grids-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-orders": (n) => import("./ecom-orders/ecom-orders-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-promos": (n) => import("./ecom-promos/ecom-promos-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-reviews": (n) => import("./ecom-reviews/ecom-reviews-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-stores": (n) => import("./ecom-stores/ecom-stores-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ecom-wishlist": (n) => import("./ecom-wishlist/ecom-wishlist-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "events": (n) => import("./events/events-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "faq": (n) => import("./faq/faq-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "features": (n) => import("./features/features-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "footers": (n) => import("./footers/footer-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-application": (n) => import("./form-application/form-application-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-booking": (n) => import("./form-booking/form-booking-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-contact": (n) => import("./form-contact/form-contact-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-login": (n) => import("./form-login/form-login-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-multistep": (n) => import("./form-multistep/form-multistep-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-payment": (n) => import("./form-payment/form-payment-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-registration": (n) => import("./form-registration/form-registration-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-search": (n) => import("./form-search/form-search-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-signup": (n) => import("./form-signup/form-signup-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "form-survey": (n) => import("./form-survey/form-survey-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "galleries": (n) => import("./galleries/gallery-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "heroes": (n) => import("./heroes/hero-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-agriculture": (n) => import("./ind-agriculture/ind-agriculture-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-architecture": (n) => import("./ind-architecture/ind-architecture-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-automotive": (n) => import("./ind-automotive/ind-automotive-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-beauty": (n) => import("./ind-beauty/ind-beauty-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-church": (n) => import("./ind-church/ind-church-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-coaching": (n) => import("./ind-coaching/ind-coaching-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-construction": (n) => import("./ind-construction/ind-construction-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-education": (n) => import("./ind-education/ind-education-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-fashion": (n) => import("./ind-fashion/ind-fashion-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-finance": (n) => import("./ind-finance/ind-finance-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-fitness": (n) => import("./ind-fitness/ind-fitness-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-gaming": (n) => import("./ind-gaming/ind-gaming-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-hr": (n) => import("./ind-hr/ind-hr-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-interior": (n) => import("./ind-interior/ind-interior-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-legal": (n) => import("./ind-legal/ind-legal-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-logistics": (n) => import("./ind-logistics/ind-logistics-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-medical": (n) => import("./ind-medical/ind-medical-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-music": (n) => import("./ind-music/ind-music-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-news": (n) => import("./ind-news/ind-news-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-nonprofit": (n) => import("./ind-nonprofit/ind-nonprofit-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-pets": (n) => import("./ind-pets/ind-pets-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-photography": (n) => import("./ind-photography/ind-photography-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-podcast": (n) => import("./ind-podcast/ind-podcast-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-realestate": (n) => import("./ind-realestate/ind-realestate-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-restaurant": (n) => import("./ind-restaurant/ind-restaurant-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-travel": (n) => import("./ind-travel/ind-travel-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "ind-wedding": (n) => import("./ind-wedding/ind-wedding-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "logos": (n) => import("./logos/logos-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "maps": (n) => import("./maps/maps-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "nav-backtotop": (n) => import("./nav-backtotop/nav-backtotop-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "nav-breadcrumbs": (n) => import("./nav-breadcrumbs/nav-breadcrumbs-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "nav-mega": (n) => import("./nav-mega/nav-mega-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "nav-mobile": (n) => import("./nav-mobile/nav-mobile-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "nav-pagination": (n) => import("./nav-pagination/nav-pagination-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "nav-sticky": (n) => import("./nav-sticky/nav-sticky-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "nav-tabs": (n) => import("./nav-tabs/nav-tabs-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "navbars": (n) => import("./navbars/navbar-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "newsletter": (n) => import("./newsletter/newsletter-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-404": (n) => import("./page-404/page-404-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-coming": (n) => import("./page-coming/page-coming-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-construction": (n) => import("./page-construction/page-construction-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-landing": (n) => import("./page-landing/page-landing-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-linkinbio": (n) => import("./page-linkinbio/page-linkinbio-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-maintenance": (n) => import("./page-maintenance/page-maintenance-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-offline": (n) => import("./page-offline/page-offline-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-password": (n) => import("./page-password/page-password-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-splash": (n) => import("./page-splash/page-splash-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "page-thankyou": (n) => import("./page-thankyou/page-thankyou-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "portfolio": (n) => import("./portfolio/portfolio-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "pricing": (n) => import("./pricing/pricing-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "services": (n) => import("./services/services-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "stats": (n) => import("./stats/stats-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "steps": (n) => import("./steps/steps-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "teams": (n) => import("./teams/teams-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "testimonials": (n) => import("./testimonials/testimonials-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "timeline": (n) => import("./timeline/timeline-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "trust": (n) => import("./trust/trust-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
  "video": (n) => import("./video/video-" + n + ".tsx") as Promise<{ default: ComponentType<BlockProps> }>,
};

export function loadBlockBySlug(
  slug: string
): React.LazyExoticComponent<ComponentType<BlockProps>> | undefined {
  if (cache.has(slug)) return cache.get(slug)!;

  // Parse: "heroes-001" → category "heroes", num "001"
  const match = slug.match(/^(.+)-(\d{3})$/);
  if (!match) return undefined;

  let categorySlug = match[1];
  const num = match[2];

  // Handle slug→directory mismatches (DB slugs use singular file prefix,
  // but directories use plural names)
  const aliasMap: Record<string, string> = {
    "navbar": "navbars",
    "hero": "heroes",
    "footer": "footers",
    "gallery": "galleries",
    "galleries": "galleries",
    "team": "teams",
    "teams": "teams",
  };
  if (aliasMap[categorySlug]) {
    categorySlug = aliasMap[categorySlug];
  }

  const loader = categoryLoaders[categorySlug];
  if (!loader) return undefined;

  const component = lazy(() =>
    loader(num).catch(() => ({
      default: (() => null) as unknown as ComponentType<BlockProps>,
    }))
  );

  cache.set(slug, component);
  return component;
}
