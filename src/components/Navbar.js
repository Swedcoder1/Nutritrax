import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-400 flex  justify-between items-center pt-4 pb-1">
      <h1 className="text-xl font-semibold ml-2">Nutritrax</h1>
      <ul className="flex justify-center w-2/5 text-lg">
        <li className="mr-4">
          <Link to="/">Nutrition</Link>
        </li>
        <li>
          <Link to="/caloriesCalculator">Calculator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
