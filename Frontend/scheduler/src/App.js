import { CalendarBelow } from "./components/CalendarBelow"
import { CalendarTop } from "./components/CalendarTop"
import { Header } from "./components/Header"

export default function App() {
  return (
    <main className="flex w-full h-screen bg-backgroundWork"> 
        <div className="flex flex-col gap-y-6">
          <Header/>
          <div className="flex flex-col mx-32 my-1">
              <CalendarTop/>
              <CalendarBelow />
          </div>
        </div>
    </main>
  )
}