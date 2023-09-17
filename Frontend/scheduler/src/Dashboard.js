import { EmployeeList } from "./components/EmployeeList"
import { CalendarTop } from "./components/CalendarTop"
import { Header } from "./components/Header"
import React, {useState, useEffect} from 'react';
import { Home } from "./Home";

export default function Dashboard() {
  
  const [data, setData] = useState([{}]);

  useEffect( ()=> {
    fetch("/teams").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, [])

  return (
    <>
    <main className="flex w-full bg-backgroundWork"> 
        <div className="flex flex-col gap-y-6">

          <Header/>
          <div className="flex flex-col gap-y-4 mx-32 my-1">
              <CalendarTop/>
              <EmployeeList/>
        </div>
        </div>
    </main>

        <Home/>
    </>

  )
}