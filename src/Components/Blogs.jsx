import { blogs } from "../data/siteData";

export default function Blogs() {
  return (
    <section id="blogs" className="bg-midnight px-5 py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold text-gold">Latest Blogs</p>

          <h2 className="mt-3 font-display text-4xl font-bold text-cream">
            Astrology Insights
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-[2rem] bg-cream text-midnight shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={
                  index === 0
                    ? "/blog1.webp"
                    : index === 1
                    ? "/blog2.webp"
                    : "/blog3.webp"
                }
                alt={blog.title}
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <span className="rounded-full bg-teal/10 px-4 py-1 text-sm font-bold text-teal">
                  {blog.tag}
                </span>

                <h3 className="mt-4 font-display text-2xl font-bold">
                  {blog.title}
                </h3>

                {/* Dummy Description */}
                <p className="mt-4 leading-7 text-midnight/70">
                  {index === 0 &&
                    "Discover how planetary alignments influence your career growth and financial stability through Vedic astrology."}

                  {index === 1 &&
                    "Understand kundli matching, relationship compatibility and spiritual connection before marriage."}

                  {index === 2 &&
                    "Explore powerful remedies, gemstone guidance and rituals to attract positivity and success."}
                </p>

                <button className="mt-5 font-bold text-teal">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}