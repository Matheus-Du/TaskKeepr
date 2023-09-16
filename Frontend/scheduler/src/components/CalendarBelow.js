import React from "react";
import { Profile } from "../lib/Profile";

//Hardcore Profile inserted in Calnedar
const jsonData = {
    "fillCells": 3
}
export const CalendarBelow = () => {
    return (
        <div className="flex flex-col gap-y-4 w-full"> 
             <Profile onFill={JSON.stringify(jsonData)}/>
        </div>
    )
}