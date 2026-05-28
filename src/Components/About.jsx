import React from "react";
import { Sparkles, Award, BookOpen } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden w-full py-20 bg-midnight px-6 lg:px-10">
      
      {/* SAME HERO GLOW */}
      <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-teal/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-purpleGlow/20 blur-3xl" />

      {/* MAIN CONTAINER */}
      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3">
            About us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-tight">
            About{" "}
            <span className="text-orange-400">
              Acharya Vatsal Mishra
            </span>
          </h2>

          <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Image */}
          <div className="relative flex justify-center">
  
  <div className="inline-block overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-midnight">
    <img
      src="/about.webp"
      alt="Acharya Vatsal Mishra"
      className="h-auto w-auto max-h-[520px] rounded-3xl object-contain"
    />
  </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-5 flex items-center gap-4 shadow-xl">
              
              <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                <Award size={28} />
              </div>

              <div>
                <h4 className="font-bold text-lg text-cream">
                  11+ Years
                </h4>

                <p className="text-sm text-cream/70">
                  Experience in Astrology
                </p>
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

            <p className="text-cream/70 leading-8 text-lg mb-6">
              Acharya Vatsal Mishra ‘Bhairav’ has been practicing astrology for
              over 11 years through the Guru-Shishya Parampara. A certified
              astrologer from the Uttar Pradesh Sanskrit Sansthan, he is
              currently pursuing a Master’s in Jyotish Vigyan.
            </p>

            <p className="text-cream/70 leading-8 text-lg mb-6">
              He is also a lifetime member and Jyotish Praveen of the Indian
              Council of Astrological Sciences (ICAS). Blending traditional
              wisdom with a contemporary approach, Acharya Vatsal continues to
              uphold the rich legacy of Vedic astrology.
            </p>

    
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;