import { motion } from "framer-motion";
import { stats } from "../data/siteData";

export default function Stats() {
  return (
    <section className="bg-midnight px-5 py-20 text-cream">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {stats.map(([number, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/20 bg-cardBg p-8 text-center shadow-xl shadow-black/30"
          >
            <h3 className="font-display text-5xl font-bold text-gold">
              {number}
            </h3>

            <p className="mt-3 font-semibold text-white">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}