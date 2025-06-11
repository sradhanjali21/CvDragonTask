import React, { useState } from "react";
import { eventData } from "../constants/data";
import { HiLocationMarker } from "react-icons/hi";
import save from "../assets/images/save.png";

const EventSection = () => {
  const [showAll, setShowAll] = useState(false);

  const eventsToShow = showAll
    ? eventData.events
    : eventData.events.slice(0, 2);

  const getFormattedDateParts = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // June
    const year = date.getFullYear();
    return { day, month, year };
  };

  return (
    <div className="px-4 md:px-6 pb-2 max-w-screen">
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3 ">
          {eventData.mainlogo && (
            <img
              src={eventData.mainlogo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          )}
          <h1 className="text-2xl font-bold text-black">{eventData.heading}</h1>
        </div>
        <div className="bg-RED rounded-md px-3 py-2 flex items-center gap-2 shadow">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className=" text-white rounded-md text-sm "
          >
            {showAll ? "View Less " : "View All "}
          </button>
        </div>
      </div>

      {/* Event Grid */}
      {/* <div
        className={`grid gap-6 transition-all duration-300 ${
          showAll ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-3"
        }`}
      > */}
      <div
        className={`flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide md:grid md:grid-cols-3 transition-all duration-300`}
      >
        {eventsToShow.map((event, idx) => (
          <div
            key={idx}
            className="relative min-w-[250px] md:min-w-full overflow-hidden transition"
          >
            {/* Image with button overlay */}
            <div className="relative">
              <img
                src={event.image}
                alt="Event"
                className="w-full h-40 rounded-xl object-cover"
              />

              <div className="absolute -top-4 -right-6 w-28 h-28 ">
                {/* Save Icon as background */}
                <img
                  src={save} // your save icon path
                  alt="Save"
                  className="w-full h-full object-contain"
                />

                {/* Date text over the icon */}
                <div className="absolute inset-0 -top-3 flex flex-col items-center justify-center text-[10px] text-black font-medium leading-tight text-start">
                  <div className="text-xs font-bold">
                    {getFormattedDateParts(event.date).day}
                  </div>
                  <div>{getFormattedDateParts(event.date).month}</div>
                  <div>{getFormattedDateParts(event.date).year}</div>
                </div>
              </div>

              <button className="absolute bottom-2 right-2 bg-red-600 text-white px-3 py-1 rounded-md text-xs hover:bg-red-700 transition">
                Register <br /> Now
              </button>
            </div>

            {/* Text info */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {event.eventHeading}
              </h3>

              <div className="flex items-center gap-2">
                <HiLocationMarker className="text-red-500 text-lg" />
                <span className="text-sm text-gray-600 capitalize">
                  {event.eventCityName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
