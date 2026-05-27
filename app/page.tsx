export default function Home() {
  const products = [
    {
      name: "Golf Rangefinder",
      price: "$129",
      tag: "Golf",
      link: "https://www.amazon.com",
    },
    {
      name: "Putting Trainer Mat",
      price: "$39",
      tag: "Golf",
      link: "https://www.amazon.com",
    },
    {
      name: "Swing Speed Trainer",
      price: "$59",
      tag: "Golf",
      link: "https://www.amazon.com",
    },
    {
      name: "Golf Gloves Pack",
      price: "$19",
      tag: "Golf",
      link: "https://www.amazon.com",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      {/* HEADER */}
      <header className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold">DrewDeals</h1>
        <p className="text-zinc-400 mt-2">
          Best Amazon golf finds — hand picked deals that actually help your game
        </p>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto mb-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Upgrade your golf game without wasting money
          </h2>
          <p className="text-zinc-400">
            We review and share the best affordable golf gear on Amazon.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:scale-[1.02] transition"
          >
            <div className="text-sm text-orange-400">{p.tag}</div>

            <h3 className="text-xl font-semibold mt-1">{p.name}</h3>

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
      </section>

      {/* FOOTER */}
      <footer className="text-center text-zinc-600 mt-16 text-sm">
        © 2026 DrewDeals — Amazon Affiliate Site
      </footer>
    </main>
  );
}