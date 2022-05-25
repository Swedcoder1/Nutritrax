import React from "react";
import { Link } from "react-router-dom";

const Meal = () => {
  return (
    <>
      <div className="flex flex-col text-center mt-16">
        <h1 className="text-2xl mb-6">Your daily nutrition</h1>
        <div>
          <p className="text-xl">Total</p>
          <div className="flex justify-around w-1/4 m-auto mt-2">
            <p>Kcal:</p>
            <p>P:</p>
            <p>C:</p>
            <p>F:</p>
          </div>
        </div>
      </div>

      <div className="flex border-b-2 border-black w-2/5 m-auto pb-2 mt-14">
        <Link to="/nutrition/breakfast" className="flex justify-around w-5/6">
          <p className="font-semibold w-12">Breakfast</p>
          <div className="flex justify-around w-5/6">
            <p>Kcal:</p>
            <p>P:</p>
            <p>C:</p>
            <p>F:</p>
          </div>
        </Link>
      </div>

      <div className="flex border-b-2 border-black w-2/5 m-auto pb-2 mt-10">
        <Link to="/nutrition/lunch" className="flex justify-around w-5/6">
          <p className="font-semibold w-12">Lunch</p>
          <div className="flex justify-around w-5/6">
            <p>Kcal:</p>
            <p>P:</p>
            <p>C:</p>
            <p>F:</p>
          </div>
        </Link>
      </div>

      <div className="flex border-b-2 border-black w-2/5 m-auto pb-2 mt-10">
        <Link to="/nutrition/dinner" className="flex justify-around w-5/6">
          <p className="font-semibold w-12">Dinner</p>
          <div className="flex justify-around w-5/6">
            <p>Kcal:</p>
            <p>P:</p>
            <p>C:</p>
            <p>F:</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Meal;
