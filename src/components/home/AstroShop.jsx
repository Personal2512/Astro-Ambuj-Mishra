import { Link } from "react-router-dom";
const products = [
  {
    title: "Gemstones   ",
    price: "From ₹599",
    image: "/gemstones.webp",
    path: "/gemstones",
  },
  {
    title: "Rudraksha ",
    price: "From ₹599",
    image: "/Rudraksha.webp",
    path: "/rudraksha",
  },
  {
    title: "Bracelets",
    price: "From ₹599",
    image: "/braclets.webp",
    path: "/bracelets",
  },
  {
    title: "Crystal Trees",
    price: "From ₹599",
    image: "/crystaltree.webp",
    path: "/crystal-trees",
  },
];

export default function AstroShop() {
  return (
    <section className="bg-cream px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          {/* <p className="font-semibold tracking-wide text-teal">Astro Store</p> */}

          <h2 className="mt-3 text-4xl font-bold text-midnight md:text-5xl">
            Shop Spiritual Essentials
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden border border-midnight/80 bg-midnight shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[260px] w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-3xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 mb-8 text-xl text-white">{item.price}</p>

                <Link
                  to={item.path}
                  className="mt-auto w-full border border-gold bg-gold px-6 py-3 text-center text-lg font-medium text-midnight transition-all duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
