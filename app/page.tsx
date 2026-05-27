"use client";

import { useMemo, useState } from "react";

// ==============================================
// DREWDEALS — AMAZON-STYLE AFFILIATE STORE
// (Clean production storefront UI version)
// ==============================================

export default function Home() {
  const amazonTag = "drewdeals0b2-20";

  // =============================
  // PRODUCT CATALOG (FULL)
  // =============================
  const products = [
    // ---------- GOLF ----------
    { name: "Callaway Golf Rangefinder", tag: "Golf", badge: "Best Pick", score: 98, image: "https://m.media-amazon.com/images/I/71chTGM1PVL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=callaway+rangefinder&tag=${amazonTag}` },
    { name: "Premium Putting Mat", tag: "Golf", badge: "Highly Rated", score: 92, image: "https://m.media-amazon.com/images/I/71yqUV9No3L._AC_UL320_.jpg", link: `https://www.amazon.com/s?k=putting+mat&tag=${amazonTag}` },
    { name: "Golf Swing Trainer", tag: "Golf", badge: "Trending", score: 90, image: "https://m.media-amazon.com/images/I/6191NJWoS4L._AC_UL320_.jpg", link: `https://www.amazon.com/s?k=golf+swing+trainer&tag=${amazonTag}` },
    { name: "Golf Practice Net", tag: "Golf", badge: "Popular", score: 88, image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c1b7a?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+practice+net&tag=${amazonTag}` },
    { name: "Golf Gloves Set", tag: "Golf", badge: "Essential", score: 85, image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+gloves&tag=${amazonTag}` },
    { name: "Alignment Training Stick", tag: "Golf", badge: "Pro Tool", score: 83, image: "https://images.unsplash.com/photo-1584467735871-8e8533e5d5a5?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+alignment+stick&tag=${amazonTag}` },
    { name: "Pro Golf Ball Set", tag: "Golf", badge: "Essential", score: 82, image: "https://images.unsplash.com/photo-1535132011086-b8818f016104?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+balls&tag=${amazonTag}` },
    { name: "Club Cleaning Brush", tag: "Golf", badge: "Utility", score: 80, image: "https://images.unsplash.com/photo-1611255550543-5c3c4a2d8c8a?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=golf+club+cleaner&tag=${amazonTag}` },

    // ---------- TECH ----------
    { name: "Wireless Earbuds Pro", tag: "Tech", badge: "Best Seller", score: 97, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=wireless+earbuds&tag=${amazonTag}` },
    { name: "Noise Cancelling Headphones", tag: "Tech", badge: "Premium", score: 95, image: "https://m.media-amazon.com/images/I/71ew5pFViAL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=noise+cancelling+headphones&tag=${amazonTag}` },
    { name: "Smart Watch Pro", tag: "Tech", badge: "Trending", score: 94, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=smartwatch&tag=${amazonTag}` },
    { name: "Bluetooth Speaker", tag: "Tech", badge: "Popular", score: 88, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=bluetooth+speaker&tag=${amazonTag}` },
    { name: "Portable Charger", tag: "Tech", badge: "Essential", score: 90, image: "https://m.media-amazon.com/images/I/61eUSCwA0QL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=power+bank&tag=${amazonTag}` },
    { name: "USB-C Hub Dock", tag: "Tech", badge: "Setup Tool", score: 86, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=usb+c+hub&tag=${amazonTag}` },
    { name: "HD Webcam", tag: "Tech", badge: "Remote Work", score: 85, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=webcam&tag=${amazonTag}` },
    { name: "Gaming Mouse", tag: "Tech", badge: "Gaming", score: 87, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=gaming+mouse&tag=${amazonTag}` },
    { name: "Mechanical Keyboard", tag: "Tech", badge: "Setup Tool", score: 89, image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_UY218_.jpg", link: `https://www.amazon.com/s?k=mechanical+keyboard&tag=${amazonTag}` },
    // ---------- SETUP ----------
    { name: "Minimal Desk Setup Kit", tag: "Setup", badge: "Trending", score: 96, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=desk+setup&tag=${amazonTag}` },
    { name: "Standing Desk Pro", tag: "Setup", badge: "Premium", score: 95, image: "https://m.media-amazon.com/images/I/718KkXOCktL._AC_UL320_.jpg", link: `https://www.amazon.com/s?k=standing+desk&tag=${amazonTag}` },
    { name: "Ergonomic Office Chair", tag: "Setup", badge: "Comfort", score: 94, image: "https://m.media-amazon.com/images/I/71AcTAu8-9L._AC_UL320_.jpg", link: `https://www.amazon.com/s?k=ergonomic+chair&tag=${amazonTag}` },
    { name: "Desk Organizer Set", tag: "Setup", badge: "Clean", score: 85, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=desk+organizer&tag=${amazonTag}` },
    { name: "Monitor Stand Riser", tag: "Setup", badge: "Productivity", score: 86, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=monitor+stand&tag=${amazonTag}` },
    { name: "Cable Management Kit", tag: "Setup", badge: "Essential", score: 84, image: "https://images.unsplash.com/photo-1611175694983-9a3b8f5b2b7a?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=cable+management&tag=${amazonTag}` },
    { name: "RGB Desk Lights", tag: "Setup", badge: "Viral", score: 90, image: "https://images.unsplash.com/photo-1616627983140-0f4d7c2a7a8b?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=rgb+lights&tag=${amazonTag}` },
    { name: "Laptop Stand Adjustable", tag: "Setup", badge: "Essential", score: 83, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop", link: `https://www.amazon.com/s?k=laptop+stand&tag=${amazonTag}` }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products
      .filter(p => activeCategory === "All" || p.tag === activeCategory)
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => b.score - a.score);
  }, [activeCategory, search]);

  const tagStyle = {
    Golf: "text-emerald-400",
    Tech: "text-cyan-400",
    Setup: "text-violet-400"
  };

  const badgeStyle = (b: string) => {
    if (b === "Best Pick") return "bg-yellow-400 text-black";
    if (b === "Highly Rated") return "bg-emerald-500/20 text-emerald-300";
    if (b === "Trending") return "bg-orange-500/20 text-orange-300";
    if (b === "Premium") return "bg-blue-500/20 text-blue-300";
    return "bg-white/10 text-white/70";
  };

  return (
    <main className="min-h-screen bg-[#0A0F1C] text-white">

      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">DrewDeals</h1>
          <p className="text-white/50 text-sm">Amazon-Style Deals Marketplace</p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold">Find the Best Amazon Deals</h2>
        <p className="text-white/60 mt-2">Curated products across Golf, Tech, and Setup essentials.</p>

        <input
          className="mt-6 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
              <img src={p.image} className="h-52 w-full object-cover" />

              <div className="p-5">
                <div className="flex justify-between">
                  <span className={tagStyle[p.tag as keyof typeof tagStyle]}>{p.tag}</span>
                  <span className={`text-xs px-2 py-1 rounded-lg ${badgeStyle(p.badge)}`}>{p.badge}</span>
                </div>

                <h3 className="mt-2 font-semibold">{p.name}</h3>

                <a
                  href={p.link}
                  target="_blank"
                  className="mt-4 inline-block w-full bg-yellow-400 text-black font-bold py-2 rounded-xl text-center hover:bg-yellow-300"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-white/40 py-10 border-t border-white/10">
        © 2026 DrewDeals — Affiliate Storefront
      </footer>

    </main>
  );
}
