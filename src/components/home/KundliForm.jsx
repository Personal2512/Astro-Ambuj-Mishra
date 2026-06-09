import { motion } from "framer-motion";

export default function KundliForm() {
  return (
    <section id="kundli" className="bg-cream px-5 pt-8 pb-24 text-midnight">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="-mt-10">
          {/* <p className="font-semibold text-teal">Free Kundli</p> */}
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Start Your Personalized Astrology Journey
          </h2>
          <p className="mt-5 text-lg leading-8 text-midnight/70">
            Fill your birth details to generate your basic Kundli preview and gain valuable astrological insights.
          </p>

          <div className="mt-8 rounded-3xl bg-midnight p-6 text-cream h-80">
            <h3 className="font-display text-2xl font-bold text-gold">
              What You Get
            </h3>
            <ul className="mt-4 space-y-3 text-cream/75">
              <li>✓ Birth chart overview</li>
              <li>✓ Career and relationship guidance</li>
              <li>✓ Personalized remedies</li>
              <li>✓ Consultation recommendation</li>
            </ul>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-white p-8 shadow-2xl"
        >
          <div className="grid gap-5">
            {[
              "Full Name",
              "Date of Birth",
              "Time of Birth",
              "Birth Place",
              "Phone Number",
            ].map((label) => (
              <label key={label} className="block">
                <span className="mb-2 block text-sm font-bold">{label}</span>
                <input
                  type={label.includes("Date") ? "date" : "text"}
                  className="w-full rounded-2xl border border-midnight/10 bg-white px-4 py-3 outline-none focus:border-gold"
                  placeholder={label}
                />
              </label>
            ))}

            <button
              type="button"
              className="mt-3 rounded-full bg-gold px-7 py-4 font-bold text-midnight shadow-xl shadow-teal/20"
            >
              Generate Kundli
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}