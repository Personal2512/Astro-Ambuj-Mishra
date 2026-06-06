// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";

// export default function Hero() {
//   return (
//     <section id="home" className="relative h-screen overflow-hidden px-5">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/home.webp"
//           alt="background"
//           className="h- w-full object-cover "
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       <div className="relative z-10 mx-auto -mt-16 grid max-w-7xl items-center gap-16 py-16 md:grid-cols-2">
//         {/* LEFT CONTENT */}
//         <div>
//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-5 inline-flex items-center gap-2 rounded-full border border-seafoam/30 bg-seafoam/10 px-5 py-2 text-sm text-seafoam backdrop-blur-md"
//           >
//             <Sparkles size={16} />
//             Premium Vedic Astrology Platform
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.15 }}
//             className="font-display text-5xl font-bold leading-tight text-cream md:text-7xl"
//           >
//             Discover Your Destiny With{" "}
//             <span className="text-gradient">Cosmic Clarity</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="mt-7 max-w-xl text-lg leading-8 text-cream/70"
//           >
//             Get personalized kundli reports, relationship guidance, career
//             astrology and spiritual remedies from experienced astrologers.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.45 }}
//             className="mt-10 flex flex-wrap gap-5"
//           >
//             <a
//               href="#kundli"
//               className="rounded-full bg-gold px-8 py-4 font-bold text-midnight shadow-2xl shadow-gold/30 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Kundli
//             </a>

//             <a
//               href="#services"
//               className="rounded-full border border-cream/20 bg-white/5 px-8 py-4 font-bold text-cream backdrop-blur-md transition-all duration-300 hover:bg-cream/10"
//             >
//               Explore Services
//             </a>
//           </motion.div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="relative flex justify-center"
//         >
//           {/* Main Image Card */}
//           <div className="relative mt-45 mr-20">
//             <img
//               src="/home1.webp"
//               alt="Astrology"
//               className="h-[700px]  w-full object-contain"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative  overflow-hidden px-5 pt-28 md:pt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home.webp"
          alt="Astrology Background"
          className=" w-full object-cover object-center"
        />

        {/* Premium Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/75 to-midnight/30" />
        <div className="absolute inset-0 bg-black/25" /> */}
      </div>

      {/* Soft Glow */}
      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-teal/25 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[340px] w-[340px] rounded-full bg-gold/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 pt-10 md:grid-cols-2 md:items-end md:gap-16">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl text-center md:text-left mb-10">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-seafoam/30 bg-seafoam/10 px-5 py-2 text-sm font-medium text-seafoam backdrop-blur-md md:mx-0"
          >
            <Sparkles size={16} />
            Premium Vedic Astrology Guidance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Find Clarity In Your{" "}
            <span className="text-gradient">Cosmic Journey</span>
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
              href="#kundli"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-bold text-midnight shadow-2xl shadow-gold/30 transition-all duration-300 hover:scale-105"
            >
              Get Free Kundli
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 bg-white/5 px-8 py-4 font-bold text-cream backdrop-blur-md transition-all duration-300 hover:bg-cream/10"
            >
              <PhoneCall size={18} />
              Book Consultation
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex h-full items-end justify-center md:justify-end"
        >
          <div className="absolute h-[260px] w-[260px] rounded-full bg-gold/20 blur-3xl sm:h-[360px] sm:w-[360px]" />

          <img
            src="/home2.webp"
            alt="Astrology"
            className="relative z-10 h-[330px] w-full object-contain sm:h-[430px] md:h-[560px] lg:h-[620px] lg:mt-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
