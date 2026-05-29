import React from "react";

const zodiacSigns = [
  { symbol: "♈", name: "Aries" },
  { symbol: "♉", name: "Taurus" },
  { symbol: "♊", name: "Gemini" },
  { symbol: "♋", name: "Cancer" },
  { symbol: "♏", name: "Scorpio" },
  { symbol: "♎", name: "Libra" },
  { symbol: "♍", name: "Virgo" },
  { symbol: "♐", name: "Sagittarius" },
  { symbol: "♑", name: "Capricorn" },
  { symbol: "♌", name: "Leo" },
  { symbol: "♒", name: "Aquarius" },
  { symbol: "♓", name: "Pisces" },
];

const Zodiac = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-blue-700/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-indigo-700/20 blur-3xl" />

      <section className="relative z-10  py-12 px-6 md:px-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-white text-4xl font-bold">
            Explore Zodiac Signs
          </h2>

          <button className="text-yellow-400 text-xl font-semibold hover:text-yellow-300 transition">
            View All
          </button>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
          {zodiacSigns.map((sign, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center transition duration-300 group-hover:border-yellow-400">
                <span className="text-5xl text-yellow-400">
                  {sign.symbol}
                </span>
              </div>

              <h3 className="mt-4 text-white text-2xl font-serif">
                {sign.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Zodiac;