import React from "react";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/ContactMe";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";
// import Testimonials from "./components/services/Services";
import Footer from "./components/footer/Footer";

import { useRef, useEffect, useState } from "react";

/* depoy script: 
    "predeploy": "npm run build",
    "deploy": "gh-pages -b master -d build",
*/

const App = () => {
  const headerRef = useRef(0);
  const aboutRef = useRef(1);
  const expRef = useRef(2);
  const portRef = useRef(3);
  const conRef = useRef(4);

  const [hH, sethH] = useState(0);
  const [aH, setaH] = useState(0);
  const [eH, seteH] = useState(0);
  const [pH, setpH] = useState(0);
  const [cH, setcH] = useState(0);

  const getCompHeight = () => {
    sethH(headerRef.current?.clientHeight);
    setaH(aboutRef.current?.clientHeight);
    seteH(expRef.current?.clientHeight);
    setpH(portRef.current?.clientHeight);
    setcH(conRef.current?.clientHeight);
  };

  useEffect(() => {
    getCompHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getCompHeight);
  }, []);

  return (
    <>
      <div ref={headerRef}>
        <Header />
      </div>
      <>
        <Navbar
          h={hH}
          a={hH + aH}
          e={hH + aH + eH}
          p={hH + aH + eH + pH}
          c={hH + aH + eH + pH + cH}
        />
      </>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={expRef}>
        <Experience />
      </div>
      <div ref={portRef}>
        <Portfolio />
      </div>
      <div ref={conRef}>
        <Contact />
      </div>
      <>
        <Footer />
      </>
      {/* <Services/> */}
      {/* <Testimonials/> */}
    </>
  );
};

export default App;
