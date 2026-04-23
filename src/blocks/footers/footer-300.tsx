"use client";

import { Mail, MessageCircle, Briefcase, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer300(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Join 50,000+ readers getting our weekly newsletter.",
    buttonText = "Subscribe",
    bodyText = "Compass",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              <Mail className="h-3.5 w-3.5" /> Newsletter
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{heading}</h2>
            <p className="mt-3 max-w-lg text-gray-600">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-lg items-center rounded-xl border border-gray-300 bg-white p-1.5 shadow-sm focus-within:border-gray-900">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none" required />
              <button type="submit" className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
            </form>
            <p className="mt-3 text-xs text-gray-500">One email per week. Unsubscribe anytime.</p>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-12">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">{bodyText}</h3>
            <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Support</a></li>
              </ul>
            </div>
            <div className="mt-8 flex gap-3 text-gray-500">
              <a href="#" aria-label="Twitter" className="hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-900"><Camera className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
