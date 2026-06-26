import { motion } from "framer-motion";

/* ── Animation variants ──────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

/* ── Data ─────────────────────────────────── */
const NAVGRAHAS = [
  { graha: "Ketu",           samidha: "Kusha Grass",          botanical: "Desmostachya bipinnata",  icon: "✨", day: "" },
  { graha: "Shukra (Venus)", samidha: "Gular Wood",           botanical: "Cluster Fig Tree",        icon: "🌸", day: "Friday" },
  { graha: "Surya (Sun)",    samidha: "Aak Wood",             botanical: "Calotropis gigantea",     icon: "☀️", day: "Sunday" },
  { graha: "Chandra (Moon)", samidha: "Palash Wood",          botanical: "Butea monosperma",        icon: "🌙", day: "Monday" },
  { graha: "Mangal (Mars)",  samidha: "Khair Wood",           botanical: "Acacia catechu",          icon: "🔴", day: "Tuesday" },
  { graha: "Rahu",           samidha: "Durva Grass",          botanical: "Bermuda Grass",           icon: "🌀", day: "" },
  { graha: "Guru (Jupiter)", samidha: "Peepal Wood",          botanical: "Ficus religiosa",         icon: "🌿", day: "Thursday" },
  { graha: "Shani (Saturn)", samidha: "Shami Wood",           botanical: "Prosopis cineraria",      icon: "🪐", day: "Saturday" },
  { graha: "Budh (Mercury)", samidha: "Apamarg & Chirchita",  botanical: "Achyranthes aspera",      icon: "💚", day: "Wednesday" },
];

const ADDITIONAL_INGREDIENTS = [
  { icon: "🔥", label: "Traditional Havan Samagri" },
  { icon: "🐄", label: "Natural Gau-Kasth (Cow-Dung Logs)" },
  { icon: "🌿", label: "Sacred Herbal Components" },
  { icon: "🌸", label: "Natural Aromatic Elements" },
  { icon: "📿", label: "Vedic Ritual Ingredients" },
];

const FEATURES = [
  { icon: "🪐", text: "Based on Navgrah and Day-wise Vedic Practices" },
  { icon: "📦", text: "Seven Individual Packs for Monday to Sunday" },
  { icon: "🔢", text: "Four Portions in Each Daily Pack (One Month Usage)" },
  { icon: "🙏", text: "Suitable for Daily Puja, Havan, Meditation & Spiritual Rituals" },
  { icon: "🌿", text: "Made from Natural and Traditionally Revered Ingredients" },
  { icon: "✨", text: "Helps Create a Pure, Positive & Sacred Atmosphere" },
  { icon: "📅", text: "Easy-to-Use Weekly Ritual Format" },
];

const USAGE_STEPS = [
  { step: 1, text: "Select the pack corresponding to the day of the week." },
  { step: 2, text: "Take one portion from the pack." },
  { step: 3, text: "Offer it into the sacred fire." },
  { step: 4, text: "Allow the natural fragrance to spread throughout the surroundings." },
  { step: 5, text: "Repeat weekly for continuous monthly use." },
];

const DAY_PACKS = [
  { day: "Monday",    planet: "Chandra (Moon)",   icon: "🌙", color: "from-blue-900/40 to-blue-800/20",   border: "border-blue-500/30" },
  { day: "Tuesday",   planet: "Mangal (Mars)",     icon: "🔴", color: "from-red-900/40 to-red-800/20",     border: "border-red-500/30" },
  { day: "Wednesday", planet: "Budh (Mercury)",    icon: "💚", color: "from-green-900/40 to-green-800/20", border: "border-green-500/30" },
  { day: "Thursday",  planet: "Guru (Jupiter)",    icon: "🌿", color: "from-yellow-900/40 to-yellow-800/20", border: "border-yellow-500/30" },
  { day: "Friday",    planet: "Shukra (Venus)",    icon: "🌸", color: "from-pink-900/40 to-pink-800/20",   border: "border-pink-500/30" },
  { day: "Saturday",  planet: "Shani (Saturn)",    icon: "🪐", color: "from-purple-900/40 to-purple-800/20", border: "border-purple-500/30" },
  { day: "Sunday",    planet: "Surya (Sun)",       icon: "☀️", color: "from-orange-900/40 to-orange-800/20", border: "border-orange-500/30" },
];

/* ── Component ────────────────────────────── */
export default function Products() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-midnight)", color: "#FAF7F0" }}>

      {/* ── Hero ────────────────────────────── */}
      <section className="relative flex min-h-[52vh] items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-red-700/10 blur-[100px]" />

        <motion.div
          className="relative z-10 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
            ✦ Sacred Vedic Offering ✦
          </span>
          <h1 className="mt-4 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl">
            Navgrah Samidha Dhoop
          </h1>
          <p className="mt-3 text-lg font-medium text-amber-300/80 italic">
            Purify Your Space with Sacred Navgrah Energies
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            A thoughtfully crafted spiritual offering inspired by ancient Vedic traditions —
            combining sacred woods, traditional Havan Samagri, Gau-Kasth, and natural ingredients
            associated with the nine planetary energies.
          </p>

          {/* Quick badges */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {["🌿 100% Natural", "🔥 Havan Ready", "📅 Day-Wise Format", "🙏 Vedic Tradition"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1.5 text-sm font-medium text-amber-300"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Product Introduction ─────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <motion.div
          className="rounded-3xl border border-amber-400/15 bg-cream p-8 backdrop-blur-sm md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-midnight" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-midnight">Product Introduction</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-midnight" />
          </div>
          <h2 className="mb-6 text-center text-3xl font-bold text-teal">About This Product</h2>
          <div className="space-y-4 text-base leading-relaxed text-midnight">
            <p>
              <strong className="text-teal">Navgrah Samidha Dhoop</strong> is a thoughtfully crafted spiritual offering
              inspired by ancient Vedic traditions. Designed to purify the atmosphere and create a positive spiritual environment,
              it combines sacred woods, traditional Havan Samagri, Gau-Kasth (cow-dung logs), and carefully selected natural
              ingredients associated with the energies of the Navgrahas.
            </p>
            <p>
              Its soothing fragrance helps create a peaceful setting for prayer, meditation, and daily spiritual practices,
              bringing a sense of purity, devotion, and positivity into your home.
            </p>
            <p>
              The product is organized according to the <strong className="text-teal">seven days of the week</strong>,
              with a dedicated pack for each day. Every day's box contains <strong className="text-teal">four portions</strong>,
              allowing convenient use throughout the month. Simply offer one portion into the sacred fire on the corresponding
              day and experience a spiritually uplifting atmosphere inspired by traditional Vedic wisdom.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Day-Wise Weekly Packs ─────────────── */}
      <section className="px-5 py-12">
        <motion.div
          className="mx-auto mb-10 max-w-xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-white">7-Day Weekly Packs</h2>
          <p className="mt-2 text-sm text-white/50">Each day's pack is dedicated to its governing planet</p>
        </motion.div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {DAY_PACKS.map((d, i) => (
            <motion.div
              key={d.day}
              className={`rounded-2xl border ${d.border} bg-gradient-to-b ${d.color} p-4 text-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="mb-2 text-3xl">{d.icon}</div>
              <div className="text-sm font-bold text-white">{d.day}</div>
              <div className="mt-1 text-[11px] font-medium leading-tight text-white/55">{d.planet}</div>
              <div className="mt-2 rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
                4 Portions
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Sacred Samidha Specifications ────── */}
      <section className="px-5 py-16">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-white">Sacred Samidha (Holy Woods) Included</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            Each Navgrah Samidha blend is prepared using sacred woods traditionally associated with the nine planets
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NAVGRAHAS.map((g, i) => (
            <motion.div
              key={g.graha}
              className="group flex items-start gap-4 rounded-2xl border border-amber-400/10 bg-cream p-5 transition-all duration-300 hover:border-amber-400/30 hover:bg-cream"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-midnight text-2xl">
                {g.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-bold text-teal">{g.graha}</h3>
                  {g.day && (
                    <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-teal">
                      {g.day}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-semibold text-midnight">{g.samidha}</p>
                <p className="mt-0.5 text-xs italic text-midnight">{g.botanical}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Additional Ingredients ───────────── */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="rounded-3xl border border-cream bg-gradient-to-br from-amber-900/10 to-amber-800/5 p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="mb-6 text-2xl font-bold text-white">Additional Ingredients</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {ADDITIONAL_INGREDIENTS.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-amber-400/10 bg-cream px-4 py-3"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-teal">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Product Features ─────────────────── */}
      <section className="px-5 py-16">
        <motion.div
          className="mx-auto mb-10 max-w-xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-white">Product Features</h2>
          <p className="mt-2 text-sm text-white/50">What makes Navgrah Samidha Dhoop special</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-amber-400/10 bg-cream p-5 transition-all duration-300 hover:border-amber-400/25 hover:bg-cream"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-amber-400/20 bg-midnight text-lg">
                {f.icon}
              </div>
              <p className="text-sm leading-relaxed text-midnight">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How to Use ───────────────────────── */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="mb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold text-white">How to Use</h2>
            <p className="mt-2 text-sm text-white/50">Simple steps for your sacred daily ritual</p>
          </motion.div>

          <div className="space-y-4">
            {USAGE_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                className="flex items-start gap-5 rounded-2xl border border-amber-400/10 bg-gold px-6 py-5 transition-all duration-300 hover:border-amber-400/25 hover:bg-gold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-midnight text-base font-extrabold text-cream">
                  {s.step}
                </div>
                <p className="pt-1.5 text-base leading-relaxed text-midnight">{s.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            className="mt-10 rounded-2xl border-l-4 border-teal bg-cream px-6 py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-base italic leading-relaxed text-teal">
              "A sacred daily ritual designed to bring purity, positivity, and spiritual harmony into everyday life."
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* ── CTA / Enquiry ────────────────────── */}
      <section className="px-5 pb-20 pt-8">
        <motion.div
          className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-950/40 via-red-950/30 to-[#07111F] p-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-2 text-4xl">🔥</div>
          <h2 className="text-3xl font-extrabold text-white">Enquire About This Product</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/55">
            For orders, availability, or any questions about Navgrah Samidha Dhoop,
            reach out to Ambuj Mishra directly via WhatsApp or Contact Us.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/?text=Hi%2C+I+am+interested+in+Navgrah+Samidha+Dhoop.+Please+share+details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-midnight shadow-lg shadow-amber-400/25 transition hover:-translate-y-0.5 hover:shadow-amber-400/40"
            >
               Enquire on WhatsApp
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-6 py-3 text-sm font-semibold text-amber-300 transition hover:border-amber-400/70 hover:text-amber-200"
            >
               Contact Us
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
