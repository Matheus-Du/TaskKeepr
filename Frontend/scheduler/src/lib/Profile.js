import React, { useState } from "react";
import UAlberta from "./shared/icon-ualberta.svg";
import { ProgressBar } from "../components/ProgressBar";
import moment from "moment";

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
  id,
  type,
  name,
  description,
  startDate,
  endDate,
}) => {
  const [fillArray] = useState(() => getFillArray(startDate, endDate));
  console.log(fillArray);

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
      <ProgressBar fillArray={fillArray} title={type} description={description} />
    </div>
  );
};

