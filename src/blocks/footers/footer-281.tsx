"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer281(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Weekly insights in under 5 minutes.",
    buttonText = "Sign up",
    bodyText = "Tangent",
  } = props;
  return (
    <footer className="w-full bg-violet-600 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-md text-violet-100">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-lg bg-white px-5 py-3.5 text-sm text-gray-900 outline-none" required />
            <button type="submit" className="rounded-lg bg-violet-950 px-6 py-3.5 text-sm font-bold text-white hover:bg-black">{buttonText}</button>
          </form>
          <p className="mt-4 text-xs text-violet-100">By signing up you accept our Terms of Service.</p>
        </div>
        <div className="mt-14 border-t border-white/20 pt-6 text-center text-xs text-violet-100">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
