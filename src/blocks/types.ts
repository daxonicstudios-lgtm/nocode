// ============================================
// BlockProps — The universal contract for ALL block components
// ============================================

import type { EditorTheme } from "@/types";

export interface BlockItem {
  title?: string;
  description?: string;
  icon?: string;
  imageUrl?: string;
  url?: string;
  label?: string;
  value?: string;
  [key: string]: unknown;
}

export interface BlockProps {
  /** Theme colors from the editor */
  theme?: Partial<EditorTheme>;

  /** Primary heading text */
  heading?: string;

  /** Secondary heading / subtitle */
  subheading?: string;

  /** Body / paragraph text */
  bodyText?: string;

  /** Primary CTA button text */
  buttonText?: string;

  /** Primary CTA button URL */
  buttonUrl?: string;

  /** Secondary CTA button text */
  secondaryButtonText?: string;

  /** Secondary CTA button URL */
  secondaryButtonUrl?: string;

  /** Main image URL */
  imageUrl?: string;

  /** Background image URL */
  backgroundImageUrl?: string;

  /** Logo image URL */
  logoUrl?: string;

  /** Repeatable list items (features, testimonials, team members, etc.) */
  items?: BlockItem[];

  /** Navigation links */
  navLinks?: { label: string; url: string }[];

  /** Allow any additional custom props */
  [key: string]: unknown;
}
