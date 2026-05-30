const products = [
  {
    title: "Planetary Energy Stones",
    price: "From ₹1,999",
    image: "/gemstones.webp",
  },
  {
    title: "Sacred Rudra Collection",
    price: "From ₹5999",
    image: "/rudraksha.jpg",
  },
  {
    title: "Protection & Healing Bands",
    price: "From ₹599",
    image: "/bracelets.jpg",
  },
  {
    title: "Prosperity Energy Decor",
    price: "From ₹599",
    image: "/crystal-trees.jpg",
  },
];

export default function AstroShop() {
  return (
    <section className="bg-[#F8F5EE] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-semibold tracking-wide text-teal">
            Astro Store
          </p>

          <h2 className="mt-3 text-4xl font-bold text-midnight md:text-5xl">
            Shop Spiritual Essentials
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden border border-gold/20 bg-cream shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[260px] w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-semibold text-midnight">
                  {item.title}
                </h3>

                <p className="mt-3 text-xl text-midnight/80">
                  {item.price}
                </p>

                <button className="mt-8 w-full border border-gold bg-transparent px-6 py-3 text-lg font-medium text-midnight transition-all duration-300 hover:bg-gold hover:text-midnight">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}