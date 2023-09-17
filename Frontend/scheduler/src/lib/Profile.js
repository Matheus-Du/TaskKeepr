import React from "react";
import UAlberta from "./shared/icon-ualberta.svg";
import { ProgressBar } from "../components/ProgressBar";
import moment from "moment";
import { useState } from "react";

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
  fillArray = moment.weekdays().map((day) => day === start);
};

export const Profile = ({
  eventId,
  type,
  name,
  description,
  startDate,
  endDate,
}) => {
  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);
  const fillArray = getFillArray(start, end);

  //Idea: Hover over profile logo and show name
  return (
    <div className="flex flex-wrap h-32 border rounded-md ">
      <div className="absolute flex flex-row">
        <div className="py-6 px-6 relative overflow-visible">
          <div className="relative right-32 px-5 py-4 circle1 rounded-full border-2 h-20 w-20">
            <img src={UAlberta} alt="UAlberta Logo"></img>
          </div>
        </div>
      </div>
      <div className="flex grow">
        <div className="w-1/8 flex items-center">
          <p className="text-gray-100 px-6 py-12 ">{type}</p>
          <p className="">{description}</p>
        </div>
        <div
          className={`flex-1/7 grow ${
            fillArray[0]
              ? "relative bg-blue-500 border-blue-500"
              : "bg-gray-100"
          }`}
        >
          {fillArray[0] ? (
            <>
              <div className="flex relative grow bg-blue-500">
                <p className="relative "></p>
                <p className="text-blue-500">continue</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex grow bg-gray-100">
                <p className="text-gray-100">continue</p>
              </div>
            </>
          )}
        </div>
        <div
          className={`flex-1/7 border grow ${
            fillArray[1] ? "bg-blue-500 border-blue-500" : "bg-gray-100"
          }`}
        >
          {fillArray[1] ? (
            <>
              <div className="flex grow bg-blue-500 ">
                <p className="text-blue-500">continue</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex grow bg-gray-100">
                <p className="text-gray-100">continue</p>
              </div>
            </>
          )}
        </div>
        <div
          className={`flex-1/7 border grow ${
            fillArray[2] ? "bg-blue-500 border-blue-500" : "bg-gray-100"
          }`}
        >
          {fillArray[2] ? (
            <>
              <div className="flex grow bg-blue-500">
                <p className="text-blue-500">continue</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex grow bg-gray-100">
                <p className="text-gray-100">continue</p>
              </div>
            </>
          )}
        </div>
        <div
          className={`flex-1/7 border grow ${
            fillArray[3] ? "bg-blue-500 border-blue-500" : "bg-gray-100"
          }`}
        >
          {fillArray[3] ? (
            <>
              <div className="flex grow bg-blue-500">
                <p className="text-blue-500">continue</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex grow bg-gray-100">
                <p className="text-gray-100">continue</p>
              </div>
            </>
          )}
        </div>
        <div
          className={`flex-1/7 border grow ${
            fillArray[4] ? "bg-blue-500 border-blue-500" : "bg-gray-100"
          }`}
        >
          {fillArray[4] ? (
            <>
              <div className="flex grow bg-blue-500">
                <p className="text-blue-500">continue</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex grow bg-gray-100">
                <p className="text-gray-100">continue</p>
              </div>
            </>
          )}
        </div>
        <div
          className={`flex-1/7 border grow ${
            fillArray[5] ? "bg-blue-500 border-blue-500" : "bg-gray-100"
          }`}
        >
          {fillArray[5] ? (
            <>
              <div className="flex grow bg-blue-500">
                <p className="text-blue-500">continue</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex grow bg-gray-100">
                <p className="text-gray-100">continue</p>
              </div>
            </>
          )}
        </div>
        <div
          className={`flex-1/7 border grow ${
            fillArray[6] ? "bg-blue-500 border-blue-500" : "bg-gray-100"
          }`}
        >
          {fillArray[6] ? (
            <>
              <div className="flex grow bg-blue-500">
                <p className="text-blue-500">continue</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex grow bg-gray-100">
                <p className="text-gray-100">continue</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
