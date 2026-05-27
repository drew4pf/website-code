export default function Home() {
  const amazonTag = "drewdeals0b2-20";

  const products = [
    {
      name: "Callaway Golf Rangefinder",
      price: "Best Seller",
      tag: "Golf",
      image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1200&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=callaway+golf+rangefinder&tag=${amazonTag}`,
    },
    {
      name: "Putting Practice Mat",
      price: "Under $50",
      tag: "Golf",
      image: "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=1200&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=putting+mat+golf&tag=${amazonTag}`,
    },
    {
      name: "Swing Trainer Aid",
      price: "Training",
      tag: "Golf",
      image: "https://images.unsplash.com/photo-1622163642998-1ea32b0b3f1d?q=80&w=1200&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+swing+trainer&tag=${amazonTag}`,
    },
    {
      name: "Wireless Earbuds",
      price: "Tech Favorite",
      tag: "Tech",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1200&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=wireless+earbuds&tag=${amazonTag}`,
    },
    {
      name: "LED Desk Setup Lights",
      price: "Setup Upgrade",
      tag: "Setup",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=led+desk+lights&tag=${amazonTag}`,
    },
    {
      name: "Minimal Desk Setup Kit",
      price: "Viral Pick",
      tag: "Setup",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=minimalist+desk+setup&tag=${amazonTag}`,
    },
  ];

  const categories = ["All", "Golf", "Tech", "Setup", "Under $50", "Best Sellers"];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* TOP BAR */}
      <div className="bg-orange-500 text-black text-center py-2 text-sm font-medium">
        ⚡ Trending Amazon Finds Updated Weekly — Hand Picked Products That Actually Sell
      </div>

      {/* HEADER */}
      <header className="border-b border-zinc-800 px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DrewDeals</h1>
          <p className="text-zinc-400 text-sm hidden md:block">
            Best Amazon Deals in Golf, Tech & Setup Gear
          </p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-r from-orange-500/10 to-zinc-900 border border-zinc-800 rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-3">
            Find the Best Amazon Products Before They Blow Up
          </h2>
          <p className="text-zinc-400 text-lg mb-6">
            We track trending Amazon products and only show what’s actually worth buying — no junk, no hype.
          </p>

          <a
            href="#products"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-black font-semibold px-6 py-3 rounded-xl"
          >
            Browse Trending Deals
          </a>

          <p className="text-xs text-zinc-500 mt-4">
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
              className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition"
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />

              <div className="p-5">
                <div className="text-xs text-orange-400 mb-2">{p.tag}</div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-zinc-400 mt-1">{p.price}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-orange-500 hover:bg-orange-400 text-black font-semibold px-4 py-2 rounded-xl w-full text-center"
                >
                  Check Price on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500 text-sm">
        <p>© 2026 DrewDeals — Amazon Affiliate Store</p>
        <p className="mt-2">As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </main>
  );
}