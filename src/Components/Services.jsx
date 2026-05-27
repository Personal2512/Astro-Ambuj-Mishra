import { motion } from "framer-motion";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <section id="services" className="bg-midnight px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-gold">Our Services</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-cream md:text-5xl">
            Astrology Guidance For Every Life Question
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass rounded-[2rem] p-7"
              >
                <div className="gold-gradient mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-midnight">
                  <Icon />
                </div>
                <h3 className="font-display text-2xl font-bold text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-cream/65">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}