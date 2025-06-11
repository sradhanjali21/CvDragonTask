import React from "react";
import redlotus from "../../src/assets/images/redlotus.svg";
import { FaPoll, FaBook, FaDownload, FaEllipsisH } from "react-icons/fa";

export const Quicklinks = () => {
  const options = [
    { label: "Poll", icon: <FaPoll /> },
    { label: "Knowledge", icon: <FaBook /> },
    { label: "Download", icon: <FaDownload /> },
    { label: "More", icon: <FaEllipsisH /> },
  ];

  return (
    <div className="px-4 md:px-8 py-8 w-full md:mb-10 mb-24">
      {/* Heading */}
      <div className="flex items-center gap-3 pb-4">
        <img src={redlotus} alt="Logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold text-black">Quick Links</h2>
      </div>

      {/* Options Box */}
      <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-4 sm:grid-cols-4 gap-6 text-center">
        {options.map((opt, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-2 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-red-600 flex items-center justify-center text-gray-700 group-hover:text-red-600 text-lg transition">
              {opt.icon}
            </div>
            <span className="text-sm font-bold text-gray-700 group-hover:text-red-600 transition">
              {opt.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
