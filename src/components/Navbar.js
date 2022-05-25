import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  const [navMenu, setNavMenu] = useState(false);

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const handleResize = () => {
    setWindowsWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center bg-green-300 py-4 shadow-md">
        <div>
          <h1 className="font-medium text-2xl ml-4">Nutritrax</h1>
        </div>

        {windowsWidth < 769 ? (
          <>
            <div>
              {navMenu ? (
                <IoMdClose
                  onClick={handleNavMenu}
                  className="text-3xl cursor-pointer mr-4"
                />
              ) : (
                <IoMdMenu
                  onClick={handleNavMenu}
                  className="text-3xl cursor-pointer mr-4"
                />
              )}
            </div>
            {/* device */}
            <div
              className={
                navMenu
                  ? "flex flex-col absolute items-center top-16 right-0 w-full bg-green-300 z-50 ease-in-out duration-300 h-full"
                  : "hidden"
              }
            >
              <NavLink
                to="/nutrution"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-400 no-underline text-white w-full text-xl py-3 pl-3"
                    : "no-underline text-black w-full text-xl py-3 pl-3 ease-in-out duration-200 hover:bg-green-400 hover:text-white"
                }
                onClick={handleNavMenu}
              >
                Nutrition
              </NavLink>
              <NavLink
                to="/caloriesCalculator"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-400 no-underline text-white w-full text-xl py-3 pl-3"
                    : "no-underline text-black w-full text-xl py-3 pl-3 ease-in-out duration-200 hover:bg-green-400 hover:text-white"
                }
                onClick={handleNavMenu}
              >
                Calculator
              </NavLink>
            </div>
          </>
        ) : (
          <>
            {/* Laptop*/}
            <div className="flex justify-center mr-4">
              <NavLink
                to="/nutrition"
                // className="no-underline text-black text-lg"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white text-white text-lg mr-4"
                    : "no-underline text-black text-lg mr-4 hover:text-white hover:border-b-2 hover:border-white"
                }
              >
                Nutrition
              </NavLink>
              <NavLink
                to="/caloriesCalculator"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white text-white text-lg"
                    : "no-underline text-black text-lg hover:text-white hover:border-b-2 hover:border-white"
                }
              >
                Calculator
              </NavLink>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
