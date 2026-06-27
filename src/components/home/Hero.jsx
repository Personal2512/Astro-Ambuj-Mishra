import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pt-24 md:pt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background */}
        <img
          src="/home6.webp"
          alt="Astrology Background"
          className="block md:hidden w-full h-full object-cover object-center"
        />
        {/* Desktop background */}
        <img
          src="/home5.webp"
          alt="Astrology Background"
          className="hidden md:block w-full h-full object-cotain object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2B0A0A]/80 via-[#2B0A0A]/40 to-transparent" />

      </div>
      {/* Soft Glow */}
      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-teal/25 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[340px] w-[340px] rounded-full bg-gold/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-6 pt-6 md:min-h-[calc(100vh-7rem)] md:grid-cols-2 md:items-end md:gap-16 md:pt-10">
        {/* Mobile-only portrait photo placed inside background's horoscope circle */}
         {/* <div className="block md:hidden w-full flex justify-center mt-16">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-gold/30 shadow-xl bg-midnight/50">
            <img
              src="/home3.webp"
              alt="Astro Ambuj Mishra"
              className="w-25 h-25 object-cover object-[center_18%]"
            /> 
          </div>
        </div>  */}

        {/* LEFT CONTENT */}
        <div className=" max-w-2xl text-center  mt-16 md:mt-0 md:text-left lg:mb-10">
          {/* <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-seafoam/30 bg-seafoam/10 px-5 py-2 text-sm font-medium text-seafoam backdrop-blur-md md:mx-0"
          >
             <Sparkles size={16} /> 
             Premium Vedic Astrology Guidance
          </motion.p> */}

          <motion.h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Illuminate Your Future With
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FBBF24] via-[#FDE68A] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              Cosmic Insight
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-cream/75 sm:text-lg sm:leading-8 md:mx-0"
          >
            Get personalized kundli analysis, relationship guidance, career
            astrology and spiritual remedies designed to bring direction,
            balance and confidence in your life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-bold text-midnight shadow-2xl shadow-gold/30 transition-all duration-300 hover:scale-105"
            >
              Get Free Kundli
              <ArrowRight size={18} />
            </a>

            <Link
              to="/consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 bg-white/5 px-8 py-4 font-bold text-cream backdrop-blur-md transition-all duration-300 hover:bg-cream/10"
            >
              <PhoneCall size={18} />
              Book Consultation
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE - Desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex relative h-full items-end justify-center md:justify-end"
        >
          <div className="absolute h-[360px] w-[260px] rounded-full bg-gold/20 blur-3xl sm:h-[560px] sm:w-[360px]" />

          <img
            src="/home3.webp"
            alt="Astrology"
            className="relative z-10 h-full w-full object-cover translate-y-12 sm:h-[430px] md:h-[560px] lg:h-[690px] lg:translate-y-50"
          />
        </motion.div>
      </div>
    </section>
  );
}
