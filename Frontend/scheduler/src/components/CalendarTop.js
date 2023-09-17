import React from "react";

// Hardcore Profile inserted in Calendar
export const CalendarTop = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/8">
        <p className="text-gray-100 text-center">Tasks</p>
      </div>
      <div className="w-7/8 flex">
        <div className="flex-1/7 grow flex items-center justify-center">
          <p className="text-gray-100">Monday</p>
        </div>
        <div className="flex-1/7 grow flex items-center justify-center">
          <p className="text-gray-100">Tuesday</p>
        </div>
        <div className="flex-1/7 grow flex items-center justify-center">
          <p className="text-gray-100">Wednesday</p>
        </div>
        <div className="flex-1/7 grow flex items-center justify-center">
          <p className="text-gray-100">Thursday</p>
        </div>
        <div className="flex-1/7 grow flex items-center justify-center">
          <p className="text-gray-100">Friday</p>
        </div>
        <div className="flex-1/7 grow flex items-center justify-center">
          <p className="text-gray-100">Saturday</p>
        </div>
        <div className="flex-1/7 grow flex items-center justify-center">
          <p className="text-gray-100">Sunday</p>
        </div>
      </div>
    </div>
  );
};
