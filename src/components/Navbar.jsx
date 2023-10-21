import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { nav } from "../data";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <nav>
      <div className="">
        <nav
          className={`${isActive ? "text-black" : "text-white"}
        hidden lg:flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>{" "}
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/roompage" className="nav-link">
            Rooms
          </NavLink>
          <NavLink to="/contact" className="nav-link"></NavLink>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
