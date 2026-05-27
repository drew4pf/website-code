export default function Home() {
  const amazonTag = "drewdeals0b2-20";

  const products = [
    {
      name: "Callaway Golf Rangefinder",
      tag: "Golf",
      price: "Featured Pick",
      image: "https://images.unsplash.com/photo-1535132011086-b8818f016104?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=callaway+golf+rangefinder&tag=${amazonTag}`,
    },
    {
      name: "Premium Putting Mat Pro",
      tag: "Golf",
      price: "Under $50",
      image: "https://images.unsplash.com/photo-1617083934555-ac6f2c6c2b6f?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=putting+mat+golf&tag=${amazonTag}`,
    },
    {
      name: "Tour Golf Swing Trainer",
      tag: "Golf",
      price: "Training",
      image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+swing+trainer&tag=${amazonTag}`,
    },
    {
      name: "Studio Wireless Earbuds",
      tag: "Tech",
      price: "Best Seller",
      image: "https://images.unsplash.com/photo-1585386959984-a41552231693?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=wireless+earbuds&tag=${amazonTag}`,
    },
    {
      name: "Minimal Desk Setup Lighting Kit",
      tag: "Setup",
      price: "Creator Pick",
      image: "https://images.unsplash.com/photo-1529336953121-a0ce66a4aa3f?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=led+desk+lights&tag=${amazonTag}`,
    },
    {
      name: "Clean Desk Productivity Bundle",
      tag: "Setup",
      price: "Trending",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=minimalist+desk+setup&tag=${amazonTag}`,
    }
  ];

  const categories = ["Featured", "Golf", "Tech", "Setup", "Trending", "Under $50"];

  const tagStyles = {
    Golf: "text-emerald-400",
    Tech: "text-cyan-400",
    Setup: "text-violet-400"
  };

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">

      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-center py-2 text-sm font-semibold">
        Curated Amazon Finds — Premium Picks + Viral Products
      </div>

      {/* HEADER */}
      <header className="border-b border-white/10 px-6 py-5 backdrop-blur">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">DrewDeals</h1>
          <p className="text-white/60 text-sm hidden md:block">
            Premium Finds • Viral Picks • Real Utility
          </p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-3">
            Curated Amazon Products Worth Your Money
          </h2>
          <p className="text-white/60 text-lg mb-6">
            A hybrid mix of premium essentials and viral Amazon finds — hand selected for quality, value, and trend potential.
          </p>

          <a
            href="#products"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-bold px-6 py-3 rounded-xl"
          >
            Explore Picks
          </a>

          <p className="text-xs text-white/40 mt-4">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex gap-3 flex-wrap">
          {categories.map((c, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-white/80">Featured Picks</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {products.slice(0, 2).map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <img src={p.image} className="h-60 w-full object-cover" />
              <div className="p-5">
                <div className={tagStyles[p.tag] + " text-xs font-semibold mb-2"}>{p.tag}</div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-white/50 text-sm mt-1">{p.price}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-4 bg-amber-400 hover:bg-amber-300 text-black font-bold px-4 py-2 rounded-xl w-full text-center">
                  View Deal
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section id="products" className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-xl font-semibold mb-4 text-white/80">All Picks</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <img src={p.image} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className={(tagStyles[p.tag] || "text-amber-300") + " text-xs font-semibold mb-2"}>
                  {p.tag}
                </div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-white/50 text-sm mt-1">{p.price}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-4 bg-amber-400 hover:bg-amber-300 text-black font-bold px-4 py-2 rounded-xl w-full text-center">
                  Check Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/40 text-sm">
        <p>© 2026 DrewDeals — Curated Amazon Picks</p>
        <p className="mt-2">As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>

    </main>
  );
}