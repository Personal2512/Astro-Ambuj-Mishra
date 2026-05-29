import React, { useState, useRef } from "react";
import {
  MapPin,
  CalendarDays,
  Sunrise,
  Sunset,
  Moon,
  Star,
  Scale,
  Landmark,
  Flower2,
} from "lucide-react";
import PanchangModal from "./PanchangModal";

const Panchang = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [location, setLocation] = useState("Lucknow, U.P");
  const [showLocationSelector, setShowLocationSelector] = useState(false);
  const [customLocation, setCustomLocation] = useState("");
  const dateInputRef = useRef(null);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [showPanchangModal, setShowPanchangModal] = useState(false);
  const details = [
    {
      title: "Tithi",
      value: "Shukla Trayodashi",
      sub: "Till 09:12 PM",
      icon: CalendarDays,
    },
    {
      title: "Karana",
      value: "Taitil",
      sub: "Till 09:12 PM",
      icon: Scale,
    },
    {
      title: "Vikram Samvat",
      value: "2083 Raudra",
      sub: "",
      icon: Landmark,
    },
    {
      title: "Nakshatra",
      value: "Swati",
      sub: "Till 11:17 PM",
      icon: Star,
    },
    {
      title: "Paksha",
      value: "Shukla Paksha",
      sub: "",
      icon: Moon,
    },
    {
      title: "Samvat",
      value: "2083 Raudra",
      sub: "",
      icon: CalendarDays,
    },
    {
      title: "Yoga",
      value: "Variyaan",
      sub: "Till 03:24 PM",
      icon: Flower2,
    },
    {
      title: "Shaka Samvat",
      value: "1948 Prabhau",
      sub: "",
      icon: Landmark,
    },
    {
      title: "Mas",
      value: "Jyeshtha",
      sub: "",
      icon: Scale,
    },
  ];
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <section className="bg-[#020a3d] py-16 px-4">
      <div className="max-w-7xl mx-auto border border-yellow-500 rounded-3xl p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h2 className="text-white text-4xl font-bold">Aaj Ka Panchang</h2>

            {/* Location */}
            <div className="mt-3">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin
                  size={18}
                  className="text-red-500 cursor-pointer"
                  onClick={() => setShowLocationSelector(!showLocationSelector)}
                />

                <span>{location}</span>
              </div>

              {showLocationSelector && (
                <div className="mt-3 space-y-2">
                  <select
                    className="bg-[#07134d] border border-gray-600 text-white rounded-lg px-3 py-2"
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value === "Other") {
                        setIsOtherSelected(true);
                      } else {
                        setLocation(value);
                        setIsOtherSelected(false);
                        setShowLocationSelector(false);
                      }
                    }}
                  >
                    <option>Select Location</option>
                    <option>Lucknow, U.P</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option value="Other">Other</option>
                  </select>

                  {isOtherSelected && (
                    <input
                      type="text"
                      placeholder="Enter your city"
                      value={customLocation}
                      onChange={(e) => setCustomLocation(e.target.value)}
                      className="w-full bg-[#07134d] border border-gray-600 text-white rounded-lg px-3 py-2"
                    />
                  )}

                  <button
                    onClick={() => {
                      if (customLocation.trim()) {
                        setLocation(customLocation);
                        setShowLocationSelector(false);
                        setCustomLocation("");
                      }
                    }}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
                  >
                    Save Location
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setShowPanchangModal(true)}
            className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-xl"
          >
            View Detailed Panchang →
          </button>
        </div>

        {/* Date Picker */}
        <div className="flex justify-center items-center gap-3 my-8 border-t border-gray-600 pt-6">
          <CalendarDays
            className="text-sky-400 cursor-pointer"
            size={24}
            onClick={() => {
              if (dateInputRef.current?.showPicker) {
                dateInputRef.current.showPicker();
              } else {
                dateInputRef.current.focus();
              }
            }}
          />

          <span className="text-white text-lg">{formatDate(selectedDate)}</span>

          <input
            ref={dateInputRef}
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="absolute opacity-0 pointer-events-none"
          />
        </div>

        {/* Sunrise / Sunset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-gradient-to-br from-[#24012b] to-[#0a1645] rounded-2xl p-6 border border-gray-700">
            <Sunrise className="text-yellow-400 mb-4" size={48} />
            <h3 className="text-white text-xl">Surya Uday</h3>
            <p className="text-yellow-400 text-3xl font-bold mt-3">05:34 AM</p>
          </div>

          <div className="bg-gradient-to-br from-[#2a0038] to-[#131b55] rounded-2xl p-6 border border-gray-700">
            <Sunset className="text-orange-400 mb-4" size={48} />
            <h3 className="text-white text-xl">Surya Ast</h3>
            <p className="text-orange-400 text-3xl font-bold mt-3">07:12 PM</p>
          </div>

          <div className="bg-gradient-to-br from-[#04154f] to-[#131b55] rounded-2xl p-6 border border-gray-700">
            <Moon className="text-cyan-300 mb-4" size={48} />
            <h3 className="text-white text-xl">Chandra Uday</h3>
            <p className="text-gray-200 text-3xl font-bold mt-3">04:52 PM</p>
          </div>

          <div className="bg-gradient-to-br from-[#15136d] to-[#0a1645] rounded-2xl p-6 border border-gray-700">
            <Moon className="text-cyan-300 mb-4" size={48} />
            <h3 className="text-white text-xl">Chandra Ast</h3>
            <p className="text-gray-200 text-3xl font-bold mt-3">03:27 AM</p>
          </div>
        </div>

        {/* Panchang Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#07134d] border border-[#22306f] rounded-xl p-5 flex items-center gap-4 hover:border-yellow-500 transition"
              >
                <div className="w-14 h-14 rounded-full border border-yellow-500/40 flex items-center justify-center">
                  <Icon className="text-yellow-400" size={28} />
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-200">{item.value}</p>

                  {item.sub && (
                    <p className="text-gray-400 text-sm">{item.sub}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showPanchangModal && (
        <PanchangModal onClose={() => setShowPanchangModal(false)}
        selectedDate={selectedDate}
        location={location}
     />
      )}
    </section>
  );
};

export default Panchang;
