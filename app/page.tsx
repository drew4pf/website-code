"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const amazonTag = "drewdeals0b2-20";

  const products = [
    {
      name: "Callaway Golf Rangefinder",
      tag: "Golf",
      badge: "Best Seller",
      price: "Premium Pick",
      image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=callaway+golf+rangefinder&tag=${amazonTag}`,
    },
    {
      name: "Putting Practice Mat Pro",
      tag: "Golf",
      badge: "Under $50",
      price: "High Value",
      image: "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=putting+mat+golf&tag=${amazonTag}`,
    },
    {
      name: "Golf Swing Trainer Aid",
      tag: "Golf",
      badge: "Trending",
      price: "Training Tool",
      image: "https://images.unsplash.com/photo-1622163642998-1ea32b0b3f1d?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+swing+trainer&tag=${amazonTag}`,
    },
    {
      name: "Wireless Earbuds Pro",
      tag: "Tech",
      badge: "Best Seller",
      price: "Daily Use",
      image: "https://images.unsplash.com/photo-1585386959984-a41552231693?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=wireless+earbuds&tag=${amazonTag}`,
    },
    {
      name: "LED Desk Setup Kit",
      tag: "Setup",
      badge: "Trending",
      price: "Creator Pick",
      image: "https://images.unsplash.com/photo-1529336953121-a0ce66a4aa3f?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=led+desk+lights&tag=${amazonTag}`,
    },
    {
      name: "Minimal Desk Productivity Kit",
      tag: "Setup",
      badge: "Under $50",
      price: "Viral Pick",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=minimalist+desk+setup&tag=${amazonTag}`,
    }
  ];

  const categories = ["All", "Golf", "Tech", "Setup", "Trending", "Under $50", "Best Sellers"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = activeCategory === "All" || p.tag === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
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

      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-center py-2 text-sm font-semibold">
        🔥 Curated Amazon Deals — Trending Products Updated Weekly
      </div>

      {/* HEADER */}
      <header className="border-b border-white/10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DrewDeals</h1>
          <p className="text-white/60 text-sm hidden md:block">
            Viral Picks • Premium Gear • Real Value
          </p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-3">
            The Smartest Amazon Deals in One Place
          </h2>
          <p className="text-white/60 text-lg mb-6">
            Filtered, tested, and curated products designed to save you time and money — and surface viral winners early.
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
            />
            <a
              href="#products"
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-6 py-3 rounded-xl text-center"
            >
              Explore Deals
            </a>
          </div>

          <p className="text-xs text-white/40 mt-4">
            As an Amazon Associate I earn from qualifying purchases via entity["software","Amazon Associates","Amazon affiliate program"]
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex gap-3 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-xl border transition ${activeCategory === c ? "bg-amber-400 text-black border-amber-300" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <img src={p.image} className="h-52 w-full object-cover" />

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className={tagColors[p.tag]}>{p.tag}</span>
                  <span className={`text-xs px-2 py-1 rounded-lg ${badgeColors(p.badge)}`}>{p.badge}</span>
                </div>

                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-white/50 text-sm mt-1">{p.price}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 w-full text-center bg-amber-400 hover:bg-amber-300 text-black font-bold px-4 py-2 rounded-xl"
                >
                  View Deal on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/40 text-sm">
        <p>© 2026 DrewDeals — Curated Affiliate Store</p>
        <p className="mt-2">As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>

    </main>
  );
}