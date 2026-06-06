import { motion } from "framer-motion";
import {services} from "../../data/siteData";

export default function Services() {
  return (
    <section id="services" className="bg-midnight px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          {/* <p className="font-semibold text-gold">Our Services</p> */}
          <h2 className="mt-3 font-display text-4xl font-bold text-cream md:text-5xl leading-[70px]">
            Astrology Guidance <br /> For Every Life Question
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
  <div
    key={service.title}
    className="overflow-hidden rounded-2xl bg-midnight/80 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    {/* Image Section */}
    <div className="h-60 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Text Section */}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-cream">
        {service.title}
      </h3>

      <p className="mt-3 text-cream">
        {service.desc}
      </p>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
}