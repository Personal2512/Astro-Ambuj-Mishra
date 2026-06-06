import React, { useState } from "react";
import { X, Share2, ArrowLeft } from "lucide-react";
import Navbar from "../common/Navbar";

const PanchangModal = ({ onClose, selectedDate, location }) => {
  const [activeTab, setActiveTab] = useState("panchang");

  const tabs = ["panchang", "muhurat", "choghadiya", "vrat"];

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-");
    return `${day} ${
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ][Number(month) - 1]
    } ${year}`;
  };

  return (
    <>
      <Navbar />
    <div className="fixed left-0 right-0 top-[72px] bottom-0 z-40 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1437] to-[#141b4d] p-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <div className="text-center">
              <h2 className="text-white text-3xl font-bold">
                Panchang - {formatDate(selectedDate)}
              </h2>

              <p className="text-gray-400">{location}</p>
            </div>

            <button className="flex items-center gap-2 border border-yellow-500 px-4 py-2 rounded-lg text-yellow-400">
              <Share2 size={18} />
              Share
            </button>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-4 bg-cream rounded-lg overflow-hidden border border-[#2a3672]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 capitalize font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-yellow-400 text-yellow-400"
                    : "text-midnight"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}

          {activeTab === "panchang" && (
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-cream rounded-xl p-5 border border-[#26336e]">
                <h3 className="text-midnight text-xl font-bold mb-4">
                  Panchang Details
                </h3>

                <div className="space-y-3 text-gray-300">
                  <p>Tithi : Shukla Trayodashi</p>
                  <p>Nakshatra : Swati</p>
                  <p>Yoga : Variyaan</p>
                  <p>Karana : Taitil</p>
                  <p>Paksha : Shukla Paksha</p>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-5 border border-[#26336e]">
                <h3 className="text-midnight text-xl font-bold mb-4">
                  Auspicious Timings
                </h3>

                <div className="space-y-3 text-gray-300">
                  <p>Abhijit Muhurat</p>
                  <p>Amrit Kaal</p>
                  <p>Vijay Muhurat</p>
                  <p>Godhuli Muhurat</p>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-5 border border-[#26336e]">
                <h3 className="text-midnight text-xl font-bold mb-4">
                  Inauspicious Timings
                </h3>

                <div className="space-y-3 text-gray-300">
                  <p>Rahu Kaal</p>
                  <p>Yamaganda</p>
                  <p>Gulika Kaal</p>
                  <p>Dur Muhurat</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "muhurat" && (
            <div className="mt-6 bg-cream rounded-xl p-6 border border-[#26336e]">
              <h2 className="text-yellow-400 text-3xl font-bold mb-4">
                Abhijit Muhurat
              </h2>

              <p className="text-midnight">
                Highly auspicious for starting important works.
              </p>
            </div>
          )}

          {activeTab === "choghadiya" && (
            <div className="mt-6 bg-cream rounded-xl p-6 border border-[#26336e]">
              <h2 className="text-red-400 text-3xl font-bold mb-4">
                Rahu Kaal
              </h2>

              <p className="text-midnight">
                Avoid starting important work during this period.
              </p>
            </div>
          )}

          {activeTab === "vrat" && (
            <div className="mt-6 bg-[#101747] rounded-xl p-6 border border-[#26336e]">
              <h2 className="text-yellow-400 text-3xl font-bold mb-4">
                Budh Purnima Vrat
              </h2>

              <p className="text-gray-300">
                Dedicated to Lord Vishnu and Goddess Lakshmi.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default PanchangModal;
