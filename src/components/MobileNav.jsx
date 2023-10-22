import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="bg-black w-full h-full">
      <nav className="h-full text-white font-tertiary tracking-[3px] text-[25px] flex flex-col justify-center items-center gap-y-8">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/roompage" className="nav-link">
          Rooms
        </NavLink>
        <NavLink to="/contact" className="nav-link"></NavLink>
      </nav>
    </div>
  );
};

export default MobileNav;
