import Advertise from "./Advertise/Advertise"
import Apply from "./Apply/Apply"
import Banner from "./Banner/Banner"
import Browser from "./Browser/Browser"
import Feature from "./Feature/Feature"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import Users from "./Users/Users"
import Visit from "./Visit/Visit"
// import  { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap-trial';
// import { useGSAP } from "@gsap/react"

// gsap.registerPlugin(useGSAP, ScrollSmoother);

// function App() {

//   const main = useRef();
//   const smoother = useRef();



//   useGSAP(
//     () => {
//       // create the smooth scroller FIRST!
//       smoother.current = ScrollSmoother.create({
//         smooth: 2, // seconds it takes to "catch up" to native scroll position
//         effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
//       });
//       ScrollTrigger.create({
//         trigger: '.box-c',
//         pin: true,
//         start: 'center center',
//         end: '+=300',
//         markers: true,
//       });
//     },
//     { scope: main }
//   );
 

//   return (
//     <>
//       <Navbar/>
//       <Banner/>
//       <Advertise/>
//       <Users/>
//       <Visit/>
//       <Apply/>
//       <Browser/>
//       <Feature/>
//       <Footer/>
//     </>
//   )
// }

// export default App


// 

import  { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const smoother = useRef();

  useLayoutEffect(() => {
    smoother.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });

    return () => {
      smoother.current.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <Banner />
        <Advertise />
        <Users />
        <Visit />
        <Apply />
        <Browser />
        <Feature />
        <Footer />
      </div>
    </div>
  );
}

export default App;
