import { CalendarTop } from "./components/CalendarTop";
import { Header } from "./components/Header";
import React, { useState, useEffect } from "react";
import { Profile } from "./lib/Profile";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:5000/teams/0e90fc8a-94b3-4245-84f1-854c2046ae8c/events"
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setUsers([]);
      });
  }, []);
  console.log(users);
  return (
    <>
      <main className="flex w-full bg-backgroundWork">
        <div className="flex flex-col gap-y-6">
          <Header />
          <div className="flex flex-col gap-y-4 mx-32 my-1">
            <CalendarTop />
            <div className="flex flex-col gap-y-4 w-full">
              {users.map((employeeData) => (
                <Profile
                  key={employeeData.eventId}
                  name={employeeData.name}
                  description={employeeData.description}
                  type={employeeData.type}
                  startDate={employeeData.startDate}
                  endDate={employeeData.endDate}
                  dateCreated={employeeData.dateCreated}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
