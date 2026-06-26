import React from "react";
import { Sparkles, Award, BookOpen } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden w-full py-20 bg-midnight px-6 lg:px-10">
      {/* SAME HERO GLOW */}
      {/* <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-teal/20 blur-3xl" /> */}

      {/* <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-purpleGlow/20 blur-3xl" /> */}

      {/* MAIN CONTAINER */}
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          {/* <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3">
            About us
          </p> */}

          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-tight">
            About <span className="text-orange-400">Astro Ambuj Mishra</span>
          </h2>

          <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative flex justify-center">
            <div className="inline-block overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-midnight">
              <img
                src="/home4.webp"
                alt="Ambuj Mishra"
                className="h-auto w-auto max-h-[520px] rounded-3xl object-contain"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-2 -right-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl py-2 px-2 flex items-center gap-4 shadow-xl">
              <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                <Award size={28} />
              </div>

              <div>
                <h4 className="font-bold text-lg text-white">20 Years</h4>

                <p className="text-sm text-white">Experience in Astrology</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="flex items-center gap-3 mb-5 text-orange-400">
              <Sparkles size={22} />

              <span className="font-semibold tracking-wide uppercase">
                Vedic Astrology
              </span>
            </div>

            <p className="text-white leading-8 text-lg mb-6">
              Ambuj Mishra is a trusted astrologer, numerologist, and spiritual guide based in Kanpur, Uttar Pradesh. Since 2006, she has helped more than 18,000 individuals make informed life decisions through detailed Kundli consultations, offering practical solutions and spiritual insights tailored to each unique journey.
            </p>

            <p className="text-white leading-8 text-lg mb-6">
               Her expertise extends beyond Vedic Astrology to Numerology, Palmistry, Face Reading, Planetary Analysis, and NLP (Neuro-Linguistic Programming), allowing her to provide a holistic approach to personal growth and life guidance.
            </p>

            <p className="text-white leading-8 text-lg mb-6">
               Whether it's career planning, business growth, financial concerns, marriage, relationships, family matters, or important life decisions  she helps individuals gain clarity, confidence, and direction. Ambuj Mishra focuses not only on identifying challenges but also on providing meaningful remedies and actionable guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
