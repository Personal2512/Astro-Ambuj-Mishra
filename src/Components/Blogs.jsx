import { blogs } from "../data/siteData";

export default function Blogs() {
  return (
    <section id="blogs" className="bg-midnight px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-gold">Latest Blogs</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-cream">
            Astrology Insights
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-[2rem] bg-cream text-midnight"
            >
              <div className="h-48 bg-gradient-to-br from-teal via-seafoam to-gold" />
              <div className="p-6">
                <span className="rounded-full bg-teal/10 px-4 py-1 text-sm font-bold text-teal">
                  {blog.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {blog.title}
                </h3>
                <button className="mt-5 font-bold text-teal">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}