import React, { useEffect, useState } from "react";
import { BirthdayData } from "../constants/data";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const BirthdaySection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind sm: breakpoint
    };

    handleResize(); // set initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const birthdaysToShow = showAll
    ? BirthdayData.birthdys
    : BirthdayData.birthdys.slice(0, isMobile ? 2 : 5);

  return (
    <div className="px-4 md:px-8 py-8 w-full">
      {/* Heading */}
      <div className="flex items-center gap-3 pb-4">
        <img src={BirthdayData.mainlogo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold text-black">
          {BirthdayData.heading}
        </h2>
      </div>

      {/* Cards Grid */}
      <div
        className={`flex gap-4 overflow-x-auto p-3 scroll-smooth scrollbar-hide sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`}
      >
        {birthdaysToShow.map((person, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-[230px] bg-white p-4 rounded-xl shadow-md relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover rounded-md"
            />

           

            <div className="absolute bottom-6 left-3 right-3 justify-center items-center flex flex-col bg-white bg-opacity-90 rounded-md mx-3 py-2 shadow">
              <h3 className="text-xl font-extrabold text-black">
                {person.name}
              </h3>
              <p className="text-xs text-black flex gap-1 justify-center items-center">
                <MdOutlineLocalPostOffice className="text-base" />
                {person.designation}
              </p>
            </div>
             {/* Black overlay (visible by default, removed on hover) */}
            <div className="absolute   inset-0 bg-black opacity-50 hover:opacity-0 transition duration-300 rounded-md"></div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-white w-full md:w-auto font-extrabold border border-red-600 text-red-600 px-4 py-2 rounded-md text-base hover:bg-red-600 hover:text-white transition cursor-pointer"
        >
          {showAll ? "Show Less " : "Upcoming Birthdays "}
        </button>
      </div>
    </div>
  );
};

export default BirthdaySection;
