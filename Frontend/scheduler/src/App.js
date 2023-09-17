import { CalendarBelow } from "./components/CalendarBelow"
import { CalendarTop } from "./components/CalendarTop"
import { Header } from "./components/Header"
import React from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function App() {
  React.useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('scrolling has started');
    });

    Events.scrollEvent.register('end', function () {
      console.log('scrolling has ended');
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <main className="flex w-full h-screen bg-backgroundWork"> 
        <div className="flex flex-col gap-y-6">
          <nav className="flex flex-row-reverse space-x-8 space-x-reverse w-screen">
              <ul>
                <li>
                  <Link activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
                    Section 1
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="section2" spy={true} smooth={true} duration={500}>
                    Section 2
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="section3" spy={true} smooth={true} duration={500}>
                    Section 3
                  </Link>
                </li>
              </ul>
          </nav>
        
          <div className="flex flex-col mx-32 my-1">
            <Element name="section1" className="element">
              <CalendarTop/>
            </Element>
            <br/>
            <div style={{height: "600px"}}></div>
            <Element name="section2" className="element">
              <CalendarBelow />
            </Element>

            <div style={{height: "600px"}}></div>

          </div>
        </div>
    </main>
  )
}