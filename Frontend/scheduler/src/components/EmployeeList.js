import React from "react";
import { Profile } from "../lib/Profile";

const employee = [
  {
    dateCreated: "Mon, 18 Sep 2023 12:10:00 GMT",
    description: "First request sent via API!",
    id: "05efa594-3794-4466-adff-900ff9715a79",
    name: "JSON event",
    startDate: "Tue, 19 Sep 2023 00:15:00 GMT",
    endDate: "Thurs, 21 Sep 2023 12:00:00 GMT",
    type: "Test",
  },
  {
    dateCreated: "Sat, 16 Sep 2023 00:00:00 GMT",
    description: "You already know...",
    endDate: "Tue, 19 Sep 2023 00:00:00 GMT",
    id: "5d72d22c-9876-4ca3-aeb4-4e178d3e8aac",
    name: "Another test event",
    startDate: "Sun, 17 Sep 2023 00:00:00 GMT",
    type: "Test",
  },
  {
    dateCreated: "Sun, 17 Sep 2023 00:49:45 GMT",
    description: "Checking if datetime working",
    endDate: "Thu, 21 Sep 2023 00:00:00 GMT",
    id: "c35165b4-ba7d-4718-9428-d10b9162e9b9",
    name: "Datetime test event 3",
    startDate: "Mon, 18 Sep 2023 00:00:00 GMT",
    type: "Test",
  },
  {
    dateCreated: "Sat, 16 Sep 2023 11:41:00 GMT",
    description: "testDescription this is a test description.",
    endDate: "Sun, 17 Sep 2023 01:00:00 GMT",
    id: "d381a840-a1da-4ebe-809e-a9d2136fa471",
    name: "testEvent",
    startDate: "Sun, 17 Sep 2023 00:00:00 GMT",
    type: "testType",
  },
  {
    dateCreated: "Sun, 17 Sep 2023 00:47:34 GMT",
    description: "Checking if datetime working",
    endDate: "Thu, 21 Sep 2023 00:00:00 GMT",
    id: "e4bd09b5-5b37-4291-b0f7-43900519c2e6",
    name: "Datetime test event",
    startDate: "Mon, 18 Sep 2023 00:00:00 GMT",
    type: "Test",
  },
  {
    dateCreated: "Sat, 16 Sep 2023 00:00:00 GMT",
    description: "You already know... again",
    endDate: "Tue, 19 Sep 2023 00:00:00 GMT",
    id: "e73ac88a-6315-4d00-92a0-61519547e2d0",
    name: "Another test event again",
    startDate: "Mon, 19 Sep 2023 00:00:00 GMT",
    type: "Test",
  },
];
//Hardcore Profile inserted in Calnedar
export const EmployeeList = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {employee.map((employeeData) => (
        <Profile
          key={employeeData.id}
          name={employeeData.name}
          description={employeeData.description}
          type={employeeData.type}
          startDate={employeeData.startDate}
          endDate={employeeData.endDate}
          dateCreated={employeeData.dateCreated}
        />
      ))}
    </div>
  );
};
