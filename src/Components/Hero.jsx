// import { motion } from "framer-motion";
// import { Sparkles, Star, Sun } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden bg-midnight px-5 pt-32"
//     >
//       <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full bg-teal/20 blur-3xl" />

//       <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-purpleGlow/20 blur-3xl" />

//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
//         className="absolute right-20 top-36 hidden h-52 w-52 rounded-full border border-gold/30 md:block"
//       />

//       <div className="relative mx-auto grid max-w-7xl items-center gap-12 py-16 md:grid-cols-2">
//         <div>
//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-5 inline-flex items-center gap-2 rounded-full border border-seafoam/30 bg-seafoam/10 px-4 py-2 text-sm text-seafoam"
//           >
//             <Sparkles size={16} /> Premium Vedic Astrology Platform
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
//             className="mt-6 max-w-xl text-lg leading-8 text-cream/70"
//           >
//             Get personalized kundli reports, relationship guidance, career
//             astrology and spiritual remedies from experienced astrologers.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.45 }}
//             className="mt-8 flex flex-wrap gap-4"
//           >
//             <a
//               href="#kundli"
//               className="rounded-full bg-gold px-7 py-4 font-bold text-midnight shadow-xl shadow-gold/20"
//             >
//               Get Free Kundli
//             </a>
//             <a
//               href="#services"
//               className="rounded-full border border-cream/20 px-7 py-4 font-bold text-cream hover:bg-cream/10"
//             >
//               Explore Services
//             </a>
//           </motion.div>
//         </div>

//         {/* <motion.div
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3 }}
//           className="relative"
//         >
//           <div className="glass relative mx-auto flex min-h-[480px] max-w-md flex-col items-center justify-center rounded-[2.5rem] p-8 text-center shadow-2xl">
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="gold-gradient mb-8 flex h-32 w-32 items-center justify-center rounded-full text-midnight"
//             >
//               <Sun size={70} />
//             </motion.div>

//             <h3 className="font-display text-3xl font-bold text-cream">
//               Your Cosmic Blueprint
//             </h3>
//             <p className="mt-4 text-cream/70">
//               Accurate guidance for love, career, money, health and spiritual
//               growth.
//             </p>

//             <div className="mt-8 grid w-full grid-cols-2 gap-4">
//               {["Kundli", "Numerology", "Vastu", "Remedies"].map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-2xl bg-cream/10 p-4 text-sm text-cream"
//                 >
//                   <Star className="mx-auto mb-2 text-gold" size={18} />
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-midnight px-5 pt-10 "
    >
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-teal/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-purpleGlow/20 blur-3xl" />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute right-20 top-36 hidden h-52 w-52 rounded-full border border-gold/20 md:block"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 py-16 md:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-seafoam/30 bg-seafoam/10 px-5 py-2 text-sm text-seafoam backdrop-blur-md"
          >
            <Sparkles size={16} />
            Premium Vedic Astrology Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display text-5xl font-bold leading-tight text-cream md:text-7xl"
          >
            Discover Your Destiny With{" "}
            <span className="text-gradient">Cosmic Clarity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-7 max-w-xl text-lg leading-8 text-cream/70"
          >
            Get personalized kundli reports, relationship guidance,
            career astrology and spiritual remedies from experienced
            astrologers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <a
              href="#kundli"
              className="rounded-full bg-gold px-8 py-4 font-bold text-midnight shadow-2xl shadow-gold/30 transition-all duration-300 hover:scale-105"
            >
              Get Free Kundli
            </a>

            <a
              href="#services"
              className="rounded-full border border-cream/20 bg-white/5 px-8 py-4 font-bold text-cream backdrop-blur-md transition-all duration-300 hover:bg-cream/10"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Glow Behind Image */}
          <div className="absolute  h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />

          {/* Main Image Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass relative overflow-hidden rounded-[2.5rem] border border-white/10 p-3 shadow-2xl"
          >
            <img
              src="/astroHero.jpeg"
              alt="Astrology Hero"
              className="h-[550px] w-full max-w-[550px] rounded-[2rem] object-cover overflow-hidden"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl">
              <p className="text-sm text-seafoam">
                ✨ Trusted By 1.2L+ People
              </p>

              <h4 className="mt-1 text-xl font-bold text-cream">
                Premium Astrology Guidance
              </h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}