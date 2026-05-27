export default function Home() {
  const amazonTag = "drewdeals0b2-20";

  const products = [
    {
      name: "Callaway Golf Rangefinder",
      price: "Best Seller",
      tag: "Golf",
      image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=callaway+golf+rangefinder&tag=${amazonTag}`,
    },
    {
      name: "Putting Practice Mat",
      price: "Under $50",
      tag: "Golf",
      image: "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=putting+mat+golf&tag=${amazonTag}`,
    },
    {
      name: "Golf Swing Trainer Aid",
      price: "Training Tool",
      tag: "Golf",
      image: "https://images.unsplash.com/photo-1622163642998-1ea32b0b3f1d?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=golf+swing+trainer&tag=${amazonTag}`,
    },
    {
      name: "Wireless Earbuds",
      price: "Tech Favorite",
      tag: "Tech",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=wireless+earbuds&tag=${amazonTag}`,
    },
    {
      name: "LED Desk Setup Kit",
      price: "Setup Upgrade",
      tag: "Setup",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=led+desk+setup&tag=${amazonTag}`,
    },
    {
      name: "Minimal Desk Setup Bundle",
      price: "Viral Pick",
      tag: "Setup",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
      link: `https://www.amazon.com/s?k=minimalist+desk+setup&tag=${amazonTag}`,
    },
  ];

  const categories = ["All", "Golf", "Tech", "Setup", "Under $50", "Best Sellers"];

  const tagColor = (tag) => {
    switch (tag) {
      case "Golf": return "text-green-400";
      case "Tech": return "text-blue-400";
      case "Setup": return "text-purple-400";
      default: return "text-orange-400";
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">

      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black text-center py-2 text-sm font-semibold">
        🔥 Trending Amazon Deals — Updated Weekly | Hand Picked Products That Actually Sell
      </div>

      {/* HEADER */}
      <header className="border-b border-zinc-800 px-6 py-5 bg-[#0B0B0F]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">DrewDeals</h1>
          <p className="text-zinc-400 text-sm hidden md:block">
            Golf • Tech • Setup Gear That’s Worth It
          </p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-br from-orange-500/10 to-zinc-900 border border-zinc-800 rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-3">
            Find Viral Amazon Products Before They Blow Up
          </h2>
          <p className="text-zinc-400 text-lg mb-6">
            We filter thousands of Amazon products and only show what’s actually worth buying — no junk, no fluff.
          </p>

          <a
            href="#products"
            className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold px-6 py-3 rounded-xl"
          >
            Explore Trending Deals
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
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transform transition"