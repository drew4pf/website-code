"use client";

import { useMemo, useState } from "react";

// ==============================================
// DREWDEALS — AMAZON-STYLE AFFILIATE STORE
// ==============================================

type Category = "Golf" | "Tech" | "Setup";

interface Product {
  name: string;
  tag: Category;
  badge: string;
  score: number;
  image: string;
  link: string;
}

const AMAZON_TAG = "drewdeals0b2-20";

const PRODUCTS: Product[] = [
  // ---------- GOLF ----------
  { name: "Callaway Golf Rangefinder", tag: "Golf", badge: "Best Pick", score: 98, image: "https://m.media-amazon.com/images/I/71chTGM1PVL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=callaway+rangefinder&tag=${AMAZON_TAG}` },
  { name: "Premium Putting Mat", tag: "Golf", badge: "Highly Rated", score: 92, image: "https://m.media-amazon.com/images/I/71yqUV9No3L._AC_UL320_.jpg", link: `https://www.amazon.com/s?k=putting+mat&tag=${AMAZON_TAG}` },
  { name: "Golf Swing Trainer", tag: "Golf", badge: "Trending", score: 90, image: "https://m.media-amazon.com/images/I/6191NJWoS4L._AC_UL320_.jpg", link: `https://www.amazon.com/s?k=golf+swing+trainer&tag=${AMAZON_TAG}` },
  { name: "Golf Practice Net", tag: "Golf", badge: "Popular", score: 88, image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c1b7a?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+practice+net&tag=${AMAZON_TAG}` },
  { name: "Golf Gloves Set", tag: "Golf", badge: "Essential", score: 85, image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+gloves&tag=${AMAZON_TAG}` },
  { name: "Alignment Training Stick", tag: "Golf", badge: "Pro Tool", score: 83, image: "https://images.unsplash.com/photo-1584467735871-8e8533e5d5a5?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+alignment+stick&tag=${AMAZON_TAG}` },
  { name: "Pro Golf Ball Set", tag: "Golf", badge: "Essential", score: 82, image: "https://images.unsplash.com/photo-1535132011086-b8818f016104?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+balls&tag=${AMAZON_TAG}` },
  { name: "Club Cleaning Brush", tag: "Golf", badge: "Utility", score: 80, image: "https://images.unsplash.com/photo-1611255550543-5c3c4a2d8c8a?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+club+cleaner&tag=${AMAZON_TAG}` },

  // ---------- TECH ----------
  { name: "Wireless Earbuds Pro", tag: "Tech", badge: "Best Seller", score: 97, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=wireless+earbuds&tag=${AMAZON_TAG}` },
  { name: "Noise Cancelling Headphones", tag: "Tech", badge: "Premium", score: 95, image: "https://m.media-amazon.com/images/I/71ew5pFViAL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=noise+cancelling+headphones&tag=${AMAZON_TAG}` },
  { name: "Smart Watch Pro", tag: "Tech", badge: "Trending", score: 94, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=smartwatch&tag=${AMAZON_TAG}` },
  { name: "Bluetooth Speaker", tag: "Tech", badge: "Popular", score: 88, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=bluetooth+speaker&tag=${AMAZON_TAG}` },
  { name: "Portable Charger", tag: "Tech", badge: "Essential", score: 90, image: "https://m.media-amazon.com/images/I/61eUSCwA0QL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=power+bank&tag=${AMAZON_TAG}` },
  { name: "USB-C Hub Dock", tag: "Tech", badge: "Setup Tool", score: 86, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=usb+c+hub&tag=${AMAZON_TAG}` },
  { name: "HD Webcam", tag: "Tech", badge: "Remote Work", score: 85, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=webcam&tag=${AMAZON_TAG}` },
  { name: "Gaming Mouse", tag: "Tech", badge: "Gaming", score: 87, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=gaming+mouse&tag=${AMAZON_TAG}` },
  { name: "Mechanical Keyboard", tag: "Tech", badge: "Setup Tool", score: 89, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=mechanical+keyboard&tag=${AMAZON_TAG}` },

  // ---------- SETUP ----------
  { name: "Minimal Desk Setup Kit", tag: "Setup", badge: "Trending", score: 96, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=desk+setup&tag=${AMAZON_TAG}` },
  { name: "Standing Desk Pro", tag: "Setup", badge: "Premium", score: 95, image: "https://m.media-amazon.com/images/I/718KkXOCktL._AC_UL320_.jpg", link: `https://www.amazon.com/s?k=standing+desk&tag=${AMAZON_TAG}` },
  { name: "Ergonomic Office Chair", tag: "Setup", badge: "Comfort", score: 94, image: "https://m.media-amazon.com/images/I/71AcTAu8-9L._AC_UL320_.jpg", link: `https://www.amazon.com/s?k=ergonomic+chair&tag=${AMAZON_TAG}` },
  { name: "Desk Organizer Set", tag: "Setup", badge: "Clean", score: 85, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=desk+organizer&tag=${AMAZON_TAG}` },
  { name: "Monitor Stand Riser", tag: "Setup", badge: "Productivity", score: 86, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=monitor+stand&tag=${AMAZON_TAG}` },
  { name: "Cable Management Kit", tag: "Setup", badge: "Essential", score: 84, image: "https://images.unsplash.com/photo-1611175694983-9a3b8f5b2b7a?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=cable+management&tag=${AMAZON_TAG}` },
  { name: "RGB Desk Lights", tag: "Setup", badge: "Viral", score: 90, image: "https://images.unsplash.com/photo-1616627983140-0f4d7c2a7a8b?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=rgb+lights&tag=${AMAZON_TAG}` },
  { name: "Laptop Stand Adjustable", tag: "Setup", badge: "Essential", score: 83, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=laptop+stand&tag=${AMAZON_TAG}` },
];

const CATEGORIES = ["All", "Golf", "Tech", "Setup"] as const;

const tagColor: Record<Category, string> = {
  Golf: "text-emerald-400",
  Tech: "text-cyan-400",
  Setup: "text-violet-400",
};

const badgeStyle = (b: string) => {
  if (b === "Best Pick" || b === "Best Seller") return "bg-yellow-400 text-black";
  if (b === "Highly Rated") return "bg-emerald-500/20 text-emerald-300";
  if (b === "Trending" || b === "Viral") return "bg-orange-500/20 text-orange-300";
  if (b === "Premium") return "bg-blue-500/20 text-blue-300";
  return "bg-white/10 text-white/70";
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS
      .filter((p) => activeCategory === "All" || p.tag === activeCategory)
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => b.score - a.score);
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#0A0F1C] text-white">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">DrewDeals</h1>
          <p className="text-white/50 text-sm hidden sm:block">Amazon-Style Deals Marketplace</p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Find the Best Amazon Deals</h2>
        <p className="text-white/60 mt-3 text-lg">Curated products across Golf, Tech, and Setup essentials.</p>

        <div className="relative mt-8 max-w-md mx-auto">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.65 10.65a7.5 7.5 0 016 5.95z" />
          </svg>
          <input
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* CATEGORY TABS — CENTERED & STICKY */}
      <section className="sticky top-0 z-30 bg-[#0A0F1C]/90 backdrop-blur border-y border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeCategory === c
                    ? "bg-yellow-400 text-black shadow"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">
              No products match &quot;<span className="font-semibold text-white">{search}</span>&quot;.
            </p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="mt-4 rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-black/30">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold backdrop-blur">
                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.538 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.783.57-1.838-.196-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.381-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                    {p.score}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-semibold ${tagColor[p.tag]}`}>{p.tag}</span>
                    <span className={`text-xs px-2 py-1 rounded-lg font-semibold ${badgeStyle(p.badge)}`}>{p.badge}</span>
                  </div>
                  <h3 className="mt-2 font-semibold leading-snug">{p.name}</h3>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-4 inline-block w-full bg-yellow-400 text-black font-bold py-2 rounded-xl text-center hover:bg-yellow-300 transition"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FTC DISCLOSURE */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
          <p className="text-xs text-white/50 leading-relaxed">
            DrewDeals is an Amazon Affiliate. We earn a small commission from qualifying purchases — at no extra cost to you. Prices and availability are subject to change.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-white/40 py-10 border-t border-white/10">
        © 2026 DrewDeals — Affiliate Storefront
      </footer>
    </main>
  );
}
