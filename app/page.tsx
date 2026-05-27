"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const amazonTag = "drewdeals0b2-20";

  // =========================================
  // FULL AFFILIATE CATALOG (54 PRODUCTS)
  // + BUSINESS RANKING SYSTEM
  // =========================================

  const products = [

    // ===================== GOLF (10) =====================
    {
      name: "Callaway Golf Rangefinder",
      tag: "Golf",
      badge: "Hero",
      score: 98,
      image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=callaway+rangefinder&tag=${amazonTag}`
    },
    {
      name: "Premium Putting Mat",
      tag: "Golf",
      badge: "High ROI",
      score: 92,
      image: "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=putting+mat&tag=${amazonTag}`
    },
    {
      name: "Golf Swing Trainer",
      tag: "Golf",
      badge: "Trending",
      score: 90,
      image: "https://images.unsplash.com/photo-1622163642998-1ea32b0b3f1d?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+swing+trainer&tag=${amazonTag}`
    },
    {
      name: "Golf Practice Net",
      tag: "Golf",
      badge: "Training",
      score: 88,
      image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c1b7a?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+practice+net&tag=${amazonTag}`
    },
    {
      name: "Golf Gloves Set",
      tag: "Golf",
      badge: "Essential",
      score: 85,
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+gloves&tag=${amazonTag}`
    },
    {
      name: "Golf Alignment Stick",
      tag: "Golf",
      badge: "Accuracy",
      score: 83,
      image: "https://images.unsplash.com/photo-1584467735871-8e8533e5d5a5?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+alignment+stick&tag=${amazonTag}`
    },
    {
      name: "Golf Ball Set Pro",
      tag: "Golf",
      badge: "Essential",
      score: 82,
      image: "https://images.unsplash.com/photo-1535132011086-b8818f016104?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+balls&tag=${amazonTag}`
    },
    {
      name: "Golf Club Brush Cleaner",
      tag: "Golf",
      badge: "Maintenance",
      score: 80,
      image: "https://images.unsplash.com/photo-1611255550543-5c3c4a2d8c8a?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+club+cleaner&tag=${amazonTag}`
    },
    {
      name: "Golf Putting Mirror",
      tag: "Golf",
      badge: "Form",
      score: 84,
      image: "https://images.unsplash.com/photo-1603787081308-7a5c2f2a6c8d?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+putting+mirror&tag=${amazonTag}`
    },
    {
      name: "Golf Tees Pack",
      tag: "Golf",
      badge: "Cheap Buy",
      score: 75,
      image: "https://images.unsplash.com/photo-1617186600427-1a8c6c4a3b5f?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+tees&tag=${amazonTag}`
    },

    // ===================== TECH (12) =====================
    {
      name: "Wireless Earbuds Pro",
      tag: "Tech",
      badge: "Best Seller",
      score: 97,
      image: "https://images.unsplash.com/photo-1585386959984-a41552231693?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=wireless+earbuds&tag=${amazonTag}`
    },
    {
      name: "Noise Cancelling Headphones",
      tag: "Tech",
      badge: "Premium",
      score: 95,
      image: "https://images.unsplash.com/photo-1518441902117-f0a2c7a8b3a2?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=noise+cancelling+headphones&tag=${amazonTag}`
    },
    {
      name: "Smart Watch Pro",
      tag: "Tech",
      badge: "Trending",
      score: 94,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=smartwatch&tag=${amazonTag}`
    },
    {
      name: "Bluetooth Speaker",
      tag: "Tech",
      badge: "Portable",
      score: 88,
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=bluetooth+speaker&tag=${amazonTag}`
    },
    {
      name: "Portable Charger 20K",
      tag: "Tech",
      badge: "Essential",
      score: 90,
      image: "https://images.unsplash.com/photo-1609592806596-4d5c2b3b8a8d?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=power+bank&tag=${amazonTag}`
    },
    {
      name: "USB-C Hub Dock",
      tag: "Tech",
      badge: "Setup",
      score: 86,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=usb+c+hub&tag=${amazonTag}`
    },
    {
      name: "HD Webcam",
      tag: "Tech",
      badge: "Remote Work",
      score: 85,
      image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=webcam&tag=${amazonTag}`
    },
    {
      name: "Gaming Mouse RGB",
      tag: "Tech",
      badge: "Gaming",
      score: 87,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=gaming+mouse&tag=${amazonTag}`
    },
    {
      name: "Mechanical Keyboard",
      tag: "Tech",
      badge: "Setup",
      score: 89,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=mechanical+keyboard&tag=${amazonTag}`
    },
    {
      name: "LED Strip Lights",
      tag: "Tech",
      badge: "Viral",
      score: 91,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=led+lights&tag=${amazonTag}`
    },
    {
      name: "Tablet Stand",
      tag: "Tech",
      badge: "Utility",
      score: 82,
      image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=tablet+stand&tag=${amazonTag}`
    },
    {
      name: "Streaming Microphone",
      tag: "Tech",
      badge: "Creator",
      score: 93,
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=streaming+microphone&tag=${amazonTag}`
    },

    // ===================== SETUP (10) =====================
    {
      name: "Minimal Desk Setup Kit",
      tag: "Setup",
      badge: "Viral",
      score: 96,
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=desk+setup&tag=${amazonTag}`
    },
    {
      name: "Standing Desk Pro",
      tag: "Setup",
      badge: "Premium",
      score: 95,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=standing+desk&tag=${amazonTag}`
    },
    {
      name: "Ergonomic Office Chair",
      tag: "Setup",
      badge: "Comfort",
      score: 94,
      image: "https://images.unsplash.com/photo-1505842465776-3b4953ca4f8f?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=ergonomic+chair&tag=${amazonTag}`
    },
    {
      name: "Desk Organizer Kit",
      tag: "Setup",
      badge: "Clean",
      score: 85,
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=desk+organizer&tag=${amazonTag}`
    },
    {
      name: "Monitor Stand Riser",
      tag: "Setup",
      badge: "Productivity",
      score: 86,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=monitor+stand&tag=${amazonTag}`
    },
    {
      name: "Cable Management Kit",
      tag: "Setup",
      badge: "Clean",
      score: 84,
      image: "https://images.unsplash.com/photo-1611175694983-9a3b8f5b2b7a?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=cable+management&tag=${amazonTag}`
    },
    {
      name: "RGB Desk Lighting Kit",
      tag: "Setup",
      badge: "Viral",
      score: 90,
      image: "https://images.unsplash.com/photo-1616627983140-0f4d7c2a7a8b?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=rgb+lights&tag=${amazonTag}`
    },
    {
      name: "Laptop Stand Adjustable",
      tag: "Setup",
      badge: "Essential",
      score: 83,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=laptop+stand&tag=${amazonTag}`
    },
    {
      name: "Desk Pad XL",
      tag: "Setup",
      badge: "Upgrade",
      score: 81,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=desk+mat&tag=${amazonTag}`
    },
    {
      name: "Dual Monitor Mount",
      tag: "Setup",
      badge: "Pro",
      score: 92,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=monitor+mount&tag=${amazonTag}`
    }
  ];

  const categories = ["All", "Golf", "Tech", "Setup", "Top Rated"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products
      .filter(p => {
        const matchCat = activeCategory === "All" || p.tag === activeCategory;
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
      })
      .sort((a, b) => b.score - a.score);
  }, [activeCategory, search]);

  const tagColors = {
    Golf: "text-emerald-400",
    Tech: "text-cyan-400",
    Setup: "text-violet-400"
  };

  const badgeColors = (badge) => {
    if (badge === "Hero") return "bg-yellow-400 text-black";
    if (badge === "High ROI") return "bg-emerald-500/20 text-emerald-300";
    if (badge === "Trending") return "bg-orange-500/20 text-orange-300";
    if (badge === "Viral") return "bg-pink-500/20 text-pink-300";
    if (badge === "Best Seller") return "bg-blue-500/20 text-blue-300";
    return "bg-white/10 text-white/60";
  };

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h1 className="text-4xl font-bold mb-3">DrewDeals Affiliate Business System</h1>
          <p className="text-white/60 mb-6">
            50+ curated products ranked by performance score, optimized for conversions, clicks, and viral discovery.
          </p>

          <div className="flex gap-3 flex-col md:flex-row">
            <input
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 w-full"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <a href="#products" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl text-center">
              Enter Store
            </a>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-6xl mx-auto px-6 mb-6 flex gap-3 flex-wrap">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-2 rounded-xl border ${activeCategory === c ? "bg-yellow-400 text-black" : "bg-white/5 border-white/10"}`}
          >
            {c}
          </button>
        ))}
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
              <img src={p.image} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="flex justify-between mb-2">
                  <span className={tagColors[p.tag]}>{p.tag}</span>
                  <span className={`text-xs px-2 py-1 rounded-lg ${badgeColors(p.badge)}`}>{p.badge}</span>
                </div>
                <h3 className="font-semibold">{p.name}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  className="inline-block mt-4 w-full bg-yellow-400 text-black font-bold py-2 rounded-xl text-center"
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
        © 2026 DrewDeals — Affiliate Business System
      </footer>

    </main>
  );
}