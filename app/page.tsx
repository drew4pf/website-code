export default function Home() {
  const products = [
    {
      name: "Golf Rangefinder",
      price: "$129",
      tag: "Golf",
      link: "https://www.amazon.com/",
    },
    {
      name: "Putting Practice Mat",
      price: "$39",
      tag: "Golf",
      link: "https://www.amazon.com/",
    },
    {
      name: "Swing Trainer Aid",
      price: "$59",
      tag: "Golf",
      link: "https://www.amazon.com/",
    },
    {
      name: "Golf Glove Pack",
      price: "$19",
      tag: "Golf",
      link: "https://www.amazon.com/",
    },
    {
      name: "Wireless Earbuds",
      price: "$79",
      tag: "Tech",
      link: "https://www.amazon.com/",
    },
    {
      name: "LED Desk Lights",
      price: "$29",
      tag: "Setup",
      link: "https://www.amazon.com/",
    },
  ];

  const categories = ["All", "Golf", "Tech", "Setup"];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="border-b border-zinc-800 px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DrewDeals</h1>
          <p className="text-zinc-400 text-sm">Amazon Finds That Actually Hit</p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-2">
            The Best Amazon Products, Hand Picked
          </h2>
          <p className="text-zinc-400">
            Simple, clean deals across golf, tech, and setup gear. No fluff.
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
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:scale-[1.02] transition"
            >
              <div className="text-xs text-orange-400 mb-2">{p.tag}</div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-zinc-400 mt-1">{p.price}</p>

              <a
                href={p.link}
                target="_blank"
                className="inline-block mt-4 bg-orange-500 hover:bg-orange-400 text-black font-semibold px-4 py-2 rounded-xl"
              >
                View on Amazon
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        © 2026 DrewDeals — Built with Amazon Affiliate Links
      </footer>
    </main>
  );
}