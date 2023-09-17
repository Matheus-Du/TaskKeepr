import React from "react";
import moment from "moment";
import Guy from "./shared/alex.jpg";

const typeToColor = {
  Food: "bg-green-500 border-green-500 border-4",
  Meeting: "bg-blue-500 border-blue-500 border-4",
  Task: "bg-yellow-500 border-yellow-500 border-4",
  Away: "bg-red-500 border-red-500 border-4",
  Default: "bg-gray-400 border-gray-400 border-4",
};

const typeToEmoji = {
  Food: "🍔",
  Meeting: "📅",
  Task: "📋",
  Away: "🏖️",
  Default: "",
};

const getFillArray = (startDate, endDate) => {
  const start = moment(startDate).format("dddd");
  let fillArray = [];
  // start and end valid
  if (startDate !== endDate) {
    const end = moment(endDate).format("dddd");
    fillArray = moment.weekdays().map((day) => day === start || day === end);
    const firstTrueIndex = fillArray.findIndex((val) => val === true);
    const lastTrueIndex = fillArray.lastIndexOf(true);
    if (firstTrueIndex !== -1 && lastTrueIndex !== -1) {
      fillArray.fill(true, firstTrueIndex + 1, lastTrueIndex);
    }

    return fillArray;
  }
  // or start or created valid
  return moment.weekdays().map((day) => day === start);
};

export const Profile = ({
  eventId,
  type,
  name,
  description,
  startDate,
  endDate,
}) => {
  const fillArray = getFillArray(startDate, endDate);
  console.log(typeToColor[type]);
  return (
    <>
      <div className="relative">
        <div className="absolute flex flex-row">
          <div className="py-12 px-6 relative overflow-visible ">
            <div className="relative right-28 top-10 px-5 py-4 circle1 rounded-full border-2 h-20 w-20">
              <img
                className="object-cover rounded-xl h-10 w-28 "
                src={Guy}
                alt="UAlberta Logo"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex flex-grow w-full">
          <div className="w-1/8 flex items-center">
            <p className="text-gray-100 px-6 py-12 ">{name}</p>
          </div>

          {fillArray.map((day, idx) => (
            <div
              className={`flex-1/7 max-w-[155px] p-4 grow ${
                fillArray[idx]
                  ? typeToColor[type]
                  : "bg-gray-100 border-gray-800 border-2"
              }`}
            >
              {fillArray[idx] && <p>{typeToEmoji[type]}</p>}
              {fillArray[idx] && <p className="text-sm">{description}</p>}
              {fillArray[idx] ? (
                <>
                  <div
                    className={`flex relative grow ${typeToColor[type]}`}
                  ></div>
                </>
              ) : (
                <>
                  <div className="flex grow bg-gray-100"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
