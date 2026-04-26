"use client";

/**
 * Premium CSS-only mockup of the Xxel editor.
 * Designed to look visually impressive — not just accurate.
 */
export function EditorMockup() {
  return (
    <div className="w-full max-w-[580px] mx-auto" style={{ transform: "perspective(1200px) rotateY(-4deg)", transformStyle: "preserve-3d" }}>
      {/* Browser chrome */}
      <div className="rounded-t-2xl bg-gradient-to-b from-[#F0EEEC] to-[#E8E6E3] border border-[#D5D3D0] border-b-0 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
        </div>
        <div className="flex-1 bg-white/80 rounded-lg px-3 py-1.5 text-[11px] text-gray-400 border border-gray-200/60 shadow-inner truncate text-center">
          xxel.app/editor/my-store
        </div>
      </div>

      {/* Editor body */}
      <div className="rounded-b-2xl border border-[#D5D3D0] border-t-0 bg-white overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15),0_12px_25px_-8px_rgba(0,0,0,0.08)]">
        {/* Top toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F5] border-b border-gray-200/60">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold text-[#E8553D]">Xxel</span>
            <div className="w-px h-4 bg-gray-200" />
            <span className="text-[11px] text-gray-500 font-medium">StyleHaus</span>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 rounded-md text-[10px] font-medium bg-white border border-gray-200 text-gray-500 shadow-sm">Save</div>
            <div className="px-3 py-1 rounded-md text-[10px] font-medium bg-white border border-gray-200 text-gray-500 shadow-sm">Preview</div>
            <div className="px-3 py-1 rounded-md text-[10px] font-medium bg-[#E8553D] text-white shadow-sm shadow-[#E8553D]/20">Publish</div>
          </div>
        </div>

        <div className="flex" style={{ height: 360 }}>
          {/* Sidebar */}
          <div className="w-[130px] bg-[#FAFAF9] border-r border-gray-100 p-3 shrink-0">
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-3">Theme</div>
            <div className="space-y-2 mb-5">
              {[
                { color: "#E8553D", label: "Primary" },
                { color: "#1A1A1A", label: "Text" },
                { color: "#FAF7F4", label: "Background" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-md shadow-sm border border-black/5" style={{ backgroundColor: t.color }} />
                  <span className="text-[10px] text-gray-500">{t.label}</span>
                </div>
              ))}
            </div>

            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-3">Blocks</div>
            <div className="space-y-0.5">
              {[
                { name: "Navbar", active: false },
                { name: "Hero", active: true },
                { name: "Products", active: false },
                { name: "Features", active: false },
                { name: "Reviews", active: false },
                { name: "Footer", active: false },
              ].map((b) => (
                <div
                  key={b.name}
                  className={`text-[10px] px-2 py-1.5 rounded-md transition-colors ${
                    b.active
                      ? "bg-[#E8553D]/10 text-[#E8553D] font-semibold"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {b.name}
                </div>
              ))}
            </div>
          </div>

          {/* Canvas area */}
          <div className="flex-1 bg-[#F3F1EF] p-4 overflow-hidden">
            <div className="bg-white rounded-xl border border-gray-200/60 h-full overflow-hidden shadow-sm">
              {/* Mini navbar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
                <span className="text-[11px] font-bold text-gray-900">StyleHaus</span>
                <div className="flex items-center gap-4">
                  {["Home", "Shop", "About"].map((l) => (
                    <span key={l} className="text-[9px] text-gray-400">{l}</span>
                  ))}
                  <span className="text-[9px] font-medium text-[#E8553D]">Cart (3)</span>
                </div>
              </div>

              {/* Mini hero — selected state */}
              <div className="mx-3 my-2.5 rounded-lg border-2 border-[#E8553D]/40 bg-gradient-to-br from-[#1A1A1A] via-[#252525] to-[#1A1A1A] p-5 relative overflow-hidden">
                {/* Selection indicator */}
                <div className="absolute -top-0.5 -right-0.5 flex items-center gap-1 bg-[#E8553D] rounded-bl-lg rounded-tr-lg px-2 py-0.5">
                  <span className="text-[7px] text-white font-medium">Hero</span>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-2 right-8 w-16 h-16 rounded-full bg-[#E8553D]/10" />
                <div className="absolute bottom-1 right-4 w-10 h-10 rounded-full bg-white/5" />

                <div className="relative">
                  <div className="text-[8px] text-[#E8553D] font-medium tracking-wider uppercase mb-1">New Collection</div>
                  <div className="text-[16px] font-black text-white leading-tight tracking-tight">PUSH YOUR</div>
                  <div className="text-[20px] font-black text-white leading-tight tracking-tight">LIMITS</div>
                  <div className="text-[8px] text-gray-400 mt-2 max-w-[70%]">Join the most intense training program designed to transform your body.</div>
                  <div className="mt-3 flex gap-2">
                    <div className="px-3 py-1 bg-[#E8553D] rounded-md text-[8px] text-white font-semibold shadow-sm shadow-[#E8553D]/30">START FREE TRIAL →</div>
                    <div className="px-3 py-1 border border-white/20 rounded-md text-[8px] text-white/70">Learn More</div>
                  </div>
                </div>
              </div>

              {/* Mini product grid */}
              <div className="px-3.5 mt-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[9px] font-bold text-gray-800">Featured Products</div>
                  <div className="text-[8px] text-[#E8553D]">View all →</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { name: "Running Shoe", price: "$89", tag: "New", bg: "from-emerald-200 to-emerald-100" },
                    { name: "Tank Top", price: "$29", tag: "Sale", bg: "from-blue-200 to-blue-100" },
                    { name: "Gym Bag", price: "$49", tag: "", bg: "from-orange-200 to-orange-100" },
                  ].map((p) => (
                    <div key={p.name} className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                      <div className={`h-12 bg-gradient-to-br ${p.bg} relative`}>
                        {p.tag && (
                          <span className="absolute top-1 left-1 text-[6px] font-bold bg-[#E8553D] text-white px-1.5 py-0.5 rounded-full shadow-sm">{p.tag}</span>
                        )}
                      </div>
                      <div className="p-1.5 bg-white">
                        <div className="text-[8px] text-gray-600 truncate">{p.name}</div>
                        <div className="text-[9px] font-bold text-gray-900">{p.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Store product grid mockup for feature card
 */
export function StoreMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200/60 p-3.5 shadow-sm">
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { name: "Classic Tee", price: "$29", badge: "New", bg: "from-rose-200 to-rose-100" },
          { name: "Slim Jeans", price: "$59", badge: "−30%", bg: "from-sky-200 to-sky-100" },
          { name: "Sneakers", price: "$89", badge: "", bg: "from-amber-200 to-amber-100" },
          { name: "Hoodie", price: "$49", badge: "Hot", bg: "from-emerald-200 to-emerald-100" },
        ].map((p) => (
          <div key={p.name} className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className={`h-16 bg-gradient-to-br ${p.bg} relative`}>
              {p.badge && (
                <span className="absolute top-1.5 left-1.5 text-[7px] font-bold bg-[#E8553D] text-white px-2 py-0.5 rounded-full shadow-sm">{p.badge}</span>
              )}
            </div>
            <div className="p-2">
              <div className="text-[10px] text-gray-600">{p.name}</div>
              <div className="text-[11px] font-bold text-gray-900">{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Dashboard analytics mockup for feature card
 */
export function DashboardMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200/60 p-3.5 shadow-sm">
      {/* Stats row */}
      <div className="flex gap-2 mb-3">
        {[
          { label: "Revenue", value: "$12.4K", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Orders", value: "342", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Visitors", value: "8.2K", color: "text-violet-600", bg: "bg-violet-50" },
        ].map((s) => (
          <div key={s.label} className={`flex-1 ${s.bg} rounded-lg p-2.5`}>
            <div className="text-[8px] text-gray-400 font-medium">{s.label}</div>
            <div className={`text-[13px] font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
      {/* SVG chart */}
      <div className="h-14 bg-gray-50/80 rounded-lg px-3 pt-2 pb-1 border border-gray-100/60">
        <svg viewBox="0 0 200 40" className="w-full h-full" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="10" x2="200" y2="10" stroke="#f3f4f6" strokeWidth="0.5" />
          <line x1="0" y1="20" x2="200" y2="20" stroke="#f3f4f6" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="200" y2="30" stroke="#f3f4f6" strokeWidth="0.5" />
          {/* Area fill */}
          <path d="M0,35 L20,28 L40,30 L60,18 L80,22 L100,12 L120,15 L140,8 L160,14 L180,6 L200,10 L200,40 L0,40 Z" fill="url(#chartGrad)" />
          {/* Line */}
          <path d="M0,35 L20,28 L40,30 L60,18 L80,22 L100,12 L120,15 L140,8 L160,14 L180,6 L200,10" fill="none" stroke="#E8553D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Dot at peak */}
          <circle cx="180" cy="6" r="2.5" fill="#E8553D" stroke="white" strokeWidth="1.5" />
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8553D" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#E8553D" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/**
 * Mobile phone mockup for feature card
 */
export function MobileMockup() {
  return (
    <div className="w-[150px] mx-auto">
      <div className="rounded-[24px] border-[4px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl shadow-gray-400/30">
        {/* Dynamic island */}
        <div className="h-5 bg-gray-900 flex justify-center items-end pb-0.5">
          <div className="w-16 h-2 rounded-full bg-gray-800" />
        </div>
        {/* Screen */}
        <div className="bg-white" style={{ height: 220 }}>
          <div className="p-2.5">
            {/* Mini navbar */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold text-gray-900">StyleHaus</span>
              <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-[6px]">🔍</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#E8553D]/10 flex items-center justify-center">
                  <span className="text-[6px]">🛒</span>
                </div>
              </div>
            </div>
            {/* Mini hero */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-2.5 mb-2">
              <div className="text-[7px] text-[#E8553D] font-medium mb-0.5">SUMMER SALE</div>
              <div className="text-[10px] font-black text-white leading-tight">Up to 50% off</div>
              <div className="text-[6px] text-gray-400 mt-0.5">Limited time only</div>
              <div className="mt-1.5 px-2 py-0.5 bg-[#E8553D] rounded text-[6px] text-white inline-block font-semibold">Shop Now →</div>
            </div>
            {/* Mini products */}
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { bg: "from-rose-200 to-rose-100", price: "$29" },
                { bg: "from-sky-200 to-sky-100", price: "$59" },
                { bg: "from-amber-200 to-amber-100", price: "$89" },
                { bg: "from-emerald-200 to-emerald-100", price: "$49" },
              ].map((p, i) => (
                <div key={i} className="rounded-md border border-gray-100 overflow-hidden">
                  <div className={`h-10 bg-gradient-to-br ${p.bg}`} />
                  <div className="p-1">
                    <div className="h-1 w-10 bg-gray-200 rounded mb-0.5" />
                    <div className="text-[7px] font-bold text-gray-800">{p.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Home indicator */}
        <div className="h-4 bg-gray-900 flex justify-center items-center">
          <div className="w-10 h-1 rounded-full bg-gray-600" />
        </div>
      </div>
    </div>
  );
}
