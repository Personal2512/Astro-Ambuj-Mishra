import React from "react";
import { motion } from "framer-motion";

const images = [
  "/Image1.webp",
  "/Image2.webp",
  "/Image3.webp",
  "/Image4.webp",
  "/Image5.webp",
  "/Image6.webp",
  "/Image7.webp",
];

export default function ImageAnimation() {
  // Duplicate images list for seamless looping
  const doubleImages = [...images, ...images];

  return (
    <section className="bg-midnight py-16 overflow-hidden relative border-t border-b border-gold/10">
      {/* Content Section */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-12 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4 font-display">
          Build Your <span className="text-gold">Influence</span>
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Collaborate with Astro Ambuj Mishra to create meaningful content that inspires trust, grows your community, and leaves a lasting impression.
        </p>
        <div className="w-20 h-0.5 bg-gold/40 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Marquee Row */}
      <div className="flex w-full overflow-hidden py-4 relative">
        {/* Side gradient overlays to fade images near edges for a professional look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-midnight via-midnight/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-midnight via-midnight/80 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-6 flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35, // Adjust duration for scroll speed (slower is smoother)
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {doubleImages.map((src, index) => (
            <div
              key={index}
              className="w-60 h-60 md:w-72 md:h-72 flex-shrink-0 rounded-2xl overflow-hidden border border-gold/15 shadow-xl bg-cardBg transform transition-transform duration-300 hover:scale-[1.04] hover:border-gold/30"
            >
              <img
                src={src}
                alt={`Astro Ambuj Gallery ${index % images.length + 1}`}
                className="w-full h-full object-cover pointer-events-none "
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Content Section */}
      <div className="max-w-3xl mx-auto text-center px-6 mt-20 mb-10 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4 font-display">
          Watch and <span className="text-gold">Listen</span>
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Simplifying Astrology for You
        </p>
        <div className="w-20 h-0.5 bg-gold/40 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Video Player */}
      <div className="max-w-4xl mx-auto px-6 relative z-20 flex justify-center">
        <div className="w-full rounded-3xl overflow-hidden border border-gold/15 shadow-2xl bg-cardBg">
          <video
            className="w-full h-auto object-cover aspect-video"
            autoPlay
            muted
            loop
            playsInline
            controls
            src="/Video.mp4"
          />
        </div>
      </div>
    </section>
  );
}
