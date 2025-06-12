import React, { useState } from "react";
import { taskData } from "../constants/data.js";

const Breadcrumb = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTasks = showAll ? taskData.tasks : taskData.tasks.slice(0, 4);

  return (
    <div className=" pt-60 md:pt-80 pb-6   max-w-full px-6">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {taskData.mainlogo && (
            <img
              src={taskData.mainlogo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          )}
          <h1 className="text-2xl font-bold text-RED">
            {taskData.heading}
          </h1>
        </div>
        <div className="bg-white rounded-md px-3 py-1 flex items-center gap-2 shadow">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-RED font-bold focus:outline-none"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>

      {/* Grid of Task Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedTasks.map((task, index) => {
          const normalizedStatus = task.herTask.status
            .toLowerCase()
            .replace(/\s/g, "");
          let statusColorClass = "";
          let shadowClass = ""; // NEW

          switch (normalizedStatus) {
            case "completed":
              statusColorClass =
                "text-black bg-green-100 border border-green-400";
              shadowClass = "shadow-[0_0_6px_2px_rgba(34,197,94,0.2)]"; // soft green

              break;
            case "due":
              statusColorClass = "text-black bg-red-100 border border-red-400";
              shadowClass = "shadow-[0_0_6px_2px_rgba(239,68,68,0.2)]"; // soft red

              break;
            case "inprogress":
              statusColorClass =
                "text-black bg-blue-100 border border-blue-400";
              shadowClass = "shadow-[0_0_6px_2px_rgba(59,130,246,0.2)]"; // soft blue

              break;
            case "todo":
              statusColorClass =
                "text-black bg-yellow-100 border border-yellow-400";
              shadowClass = "shadow-[0_0_6px_2px_rgba(234,179,8,0.2)]"; // soft yellow

              break;
            default:
              statusColorClass =
                "text-black bg-gray-100 border border-gray-300";
              shadowClass = "shadow-[0_0_6px_2px_rgba(107,114,128,0.2)]"; // soft gray
          }

          return (
            <div
              key={index}
              className="flex gap-2 items-center bg-white px-4 py-3 rounded-xl shadow-xl "
            >
              {/* Left: Icon or Days */}
              <div
                className={`w-[25%] text-sm rounded-xl text-center h-full flex justify-center items-center ${shadowClass}`}
              >
                {isNaN(task.herTask.logo) ? (
                  // Show icon or emoji if not a number
                  <span className="text-sm">{task.herTask.logo}</span>
                ) : (
                  // Show number + "days left" if it's a number
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-sm md:text-xl font-bold">
                      {task.herTask.logo}
                    </span>
                    <span className="text-xs font-semibold text-black">
                      days left
                    </span>
                  </div>
                )}
              </div>

              {/* Middle: Name + Badge */}
              <div className="w-full px-2">
                <div className="text-lg font-bold">{task.personName}</div>
                <span
                  className={`text-xs font-bold justify-center items-center w-20 rounded-xl shadow px-3 py-1 flex mt-1 capitalize ${statusColorClass}`}
                >
                  {task.herTask.status}
                </span>
              </div>

              {/* Right: 3 dots */}
              <div className="text-black text-xl flex items-start cursor-pointer px-1">
                {task.herTask.detailsIcon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
