import React from "react";
import "./navbar.css";
import {
  HiHome,
  HiUserCircle,
  HiBookOpen,
  HiDatabase,
  HiChat,
} from "react-icons/hi";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  const handleScroll = () => {
    const pos = window.scrollY;
    if (pos >= 0 && pos < props.h) setActive("#top");
    else if (pos >= props.h && pos < props.a) setActive("#About Me");
    else if (pos >= props.a && pos < props.e) setActive("#experience");
    else if (pos >= props.e && pos < props.p) setActive("#portfolio");
    else if (pos >= props.p && pos < props.c) setActive("#Contact Me");
  };

  return (
    <nav>
      <a
        href="#top"
        onClick={() => setActive("#top")}
        className={active === "#top" ? "active" : ""}
      >
        <HiHome />
      </a>
      <a
        href="#About Me"
        onClick={() => setActive("#About Me")}
        className={active === "#About Me" ? "active" : ""}
      >
        <HiUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <HiBookOpen />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <HiDatabase />
      </a>
      <a
        href="#Contact Me"
        onClick={() => setActive("#Contact Me")}
        className={active === "#Contact Me" ? "active" : ""}
      >
        <HiChat />
      </a>
    </nav>
  );
};

export default Navbar;
