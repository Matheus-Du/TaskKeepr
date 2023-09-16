import { CalendarBelow } from "./components/CalendarBelow"
import { CalendarTop } from "./components/CalendarTop"

export default function App() {
  return (
    <main className="flex w-full bg-backgroundWork"> 
        <div className="flex flex-col gap-y-6">
          <CalendarTop/>
          <CalendarBelow />
        </div>
    </main>
  )
}