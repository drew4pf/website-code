"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const amazonTag = "drewdeals0b2-20";

  // -----------------------------
  // PRODUCTS (50 curated items)
  // -----------------------------
  const products = [
    // GOLF (10)
    {
      name: "Callaway Rangefinder",
      tag: "Golf",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=callaway+rangefinder&tag=${amazonTag}`,
    },
    {
      name: "Putting Mat Pro",
      tag: "Golf",
      badge: "Under $50",
      image: "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=putting+mat&tag=${amazonTag}`,
    },
    {
      name: "Golf Swing Trainer",
      tag: "Golf",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1622163642998-1ea32b0b3f1d?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+swing+trainer&tag=${amazonTag}`,
    },
    {
      name: "Golf Gloves Pack",
      tag: "Golf",
      badge: "Value",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+gloves&tag=${amazonTag}`,
    },
    {
      name: "Golf Practice Net",
      tag: "Golf",
      badge: "Pro Training",
      image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c1b7a?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+practice+net&tag=${amazonTag}`,
    },
    {
      name: "Putting Alignment Tool",
      tag: "Golf",
      badge: "Accuracy",
      image: "https://images.unsplash.com/photo-1584467735871-8e8533e5d5a5?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+alignment+tool&tag=${amazonTag}`,
    },
    {
      name: "Golf Ball Set",
      tag: "Golf",
      badge: "Essential",
      image: "https://images.unsplash.com/photo-1535132011086-b8818f016104?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+balls&tag=${amazonTag}`,
    },
    {
      name: "Range Golf Tees",
      tag: "Golf",
      badge: "Cheap Upgrade",
      image: "https://images.unsplash.com/photo-1617186600427-1a8c6c4a3b5f?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+tees&tag=${amazonTag}`,
    },
    {
      name: "Golf Club Brush",
      tag: "Golf",
      badge: "Maintenance",
      image: "https://images.unsplash.com/photo-1611255550543-5c3c4a2d8c8a?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+club+brush&tag=${amazonTag}`,
    },
    {
      name: "Golf Training Mirror",
      tag: "Golf",
      badge: "Form Fix",
      image: "https://images.unsplash.com/photo-1603787081308-7a5c2f2a6c8d?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+training+mirror&tag=${amazonTag}`,
    },

    // TECH (10)
    {
      name: "Wireless Earbuds Pro",
      tag: "Tech",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1585386959984-a41552231693?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=wireless+earbuds&tag=${amazonTag}`,
    },
    {
      name: "Noise Cancelling Headphones",
      tag: "Tech",
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1518441902117-f0a2c7a8b3a2?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=noise+cancelling+headphones&tag=${amazonTag}`,
    },
    {
      name: "Bluetooth Speaker",
      tag: "Tech",
      badge: "Portable",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=bluetooth+speaker&tag=${amazonTag}`,
    },
    {
      name: "Smart Watch",
      tag: "Tech",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=smartwatch&tag=${amazonTag}`,
    },
    {
      name: "Portable Charger",
      tag: "Tech",
      badge: "Essential",
      image: "https://images.unsplash.com/photo-1609592806596-4d5c2b3b8a8d?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=power+bank&tag=${amazonTag}`,
    },
    {
      name: "USB-C Hub",
      tag: "Tech",
      badge: "Setup",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=usb+c+hub&tag=${amazonTag}`,
    },
    {
      name: "Webcam HD",
      tag: "Tech",
      badge: "Remote Work",
      image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=hd+webcam&tag=${amazonTag}`,
    },
    {
      name: "Gaming Mouse",
      tag: "Tech",
      badge: "Gaming",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=gaming+mouse&tag=${amazonTag}`,
    },
    {
      name: "Mechanical Keyboard",
      tag: "Tech",
      badge: "Setup",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=mechanical+keyboard&tag=${amazonTag}`,
    },
    {
      name: "LED Light Strip",
      tag: "Tech",
      badge: "Viral",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=led+light+strip&tag=${amazonTag}`,
    },

    // SETUP (10)
    {
      name: "Minimal Desk Setup Kit",
      tag: "Setup",
      badge: "Viral",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=minimalist+desk+setup&tag=${amazonTag}`,
    },
    {
      name: "LED Desk Lamp",
      tag: "Setup",
      badge: "Essential",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=led+desk+lamp&tag=${amazonTag}`,
    },
    {
      name: "Standing Desk",
      tag: "Setup",
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=standing+desk&tag=${amazonTag}`,
    },
    {
      name: "Ergonomic Chair",
      tag: "Setup",
      badge: "Comfort",
      image: "https://images.unsplash.com/photo-1505842465776-3b4953ca4f8f?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=ergonomic+chair&tag=${amazonTag}`,
    },
    {
      name: "Desk Organizer",
      tag: "Setup",
      badge: "Clean Setup",
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=desk+organizer&tag=${amazonTag}`,
    },
    {
      name: "Monitor Stand",
      tag: "Setup",
      badge: "Productivity",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=monitor+stand&tag=${amazonTag}`,
    },
    {
      name: "Cable Management Kit",
      tag: "Setup",
      badge: "Clean Look",
      image: "https://images.unsplash.com/photo-1611175694983-9a3b8f5b2b7a?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=cable+management&tag=${amazonTag}`,
    },
    {
      name: "RGB Desk Lights",
      tag: "Setup",
      badge: "Viral",
      image: "https://images.unsplash.com/photo-1616627983140-0f4d7c2a7a8b?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=rgb+desk+lights&tag=${amazonTag}`,
    },
    {
      name: "Laptop Stand",
      tag: "Setup",
      badge: "Essential",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=laptop+stand&tag=${amazonTag}`,
    },
    {
      name: "Desk Pad Mat",
      tag: "Setup",
      badge: "Upgrade",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=desk+mat&tag=${amazonTag}`,
    }
  ];

  const categories = ["All", "Golf", "Tech", "Setup"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = activeCategory === "All" || p.tag === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const tagColors = {
    Golf: "text-emerald-400",
    Tech: "text-cyan-400",
    Setup: "text-violet-400"
  };

  const badgeColors = (badge) => {
    if (badge === "Best Seller") return "bg-emerald-500/20 text-emerald-300";
    if (badge === "Trending") return "bg-orange-500/20 text-orange-300";
    if (badge === "Under $50") return "bg-cyan-500/20 text-cyan-300";
    return "bg-white/10 text-white/60";
  };

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h1 className="text-4xl font-bold mb-3">The Ultimate Amazon Deals Hub</h1>
          <p className="text-white/60 mb-6">
            50+ curated products across Golf, Tech, and Setup — optimized for value and viral trends.
          </p>

          <div className="flex gap-3 flex-col md:flex-row">
            <input
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 w-full"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <a href="#products" className="bg-amber-400 text-black font-bold px-6 py-3 rounded-xl text-center">
              Browse
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
            className={`px-4 py-2 rounded-xl border ${activeCategory === c ? "bg-amber-400 text-black" : "bg-white/5 border-white/10"}`}
          >
            {c}
          </button>
        ))}
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-6xl mx-auto px-6 pb-20">
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
                  className="inline-block mt-4 w-full bg-amber-400 text-black font-bold py-2 rounded-xl text-center"
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
        © 2026 DrewDeals — Amazon Affiliate Store
      </footer>

    </main>
  );
}