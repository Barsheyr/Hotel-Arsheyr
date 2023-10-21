import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiOutlineX, HiArrowLeft } from "react-icons/hi";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-3" : "bg-transparent py-6"
      }   fixed z-20 w-full transition-all duration-500 shadow-md`}
    >
      <div className="lg:max-w-5xl mx-6 lg:mx-auto flex justify-between items-center">
        <h1
          className={`${
            isActive ? "text-black" : "text-white"
          } text-2xl tracking-[10px]`}
        >
          ARSHEYR
        </h1>

        <div>
          <Navbar />
        </div>

        {/* mobile nav icons */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-black" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-black" />
          )}
        </button>

        <div
          className={` ${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all bg-black`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
