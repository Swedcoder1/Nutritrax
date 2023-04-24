import React from "react";
import { Link } from "react-router-dom";

const NutritionOverview = ({
  title,
  totalKcal,
  totalFat,
  totalCarbs,
  totalProtein,
  link,
}) => {
  // const { title, totalKcal, totalFat, totalCarbs, totalProtein, link } = props;

  return (
    <Link
      to={"/" + link}
      className="flex justify-around md:w-3/6 w-11/12 m-auto mt-6 mb-4 bg-green-200 py-7 rounded-md items-center shadow-md"
    >
      <p className="font-semibold md:text-xl text-base w-12">{title}</p>
      <div className="flex justify-around w-8/12 md:text-lg text-base">
        <div className="flex">
          <p>Kcal:</p>
          <span className="font-semibold ml-1">{totalKcal.toFixed(1)}</span>
        </div>
        <div className="flex">
          <p>C:</p>
          <span className="font-semibold ml-1">{totalCarbs.toFixed(1)}g</span>
        </div>
        <div className="flex">
          <p>F:</p>
          <span className="font-semibold ml-1">{totalFat.toFixed(1)}g</span>
        </div>
        <div className="flex">
          <p>P:</p>
          <span className="font-semibold ml-1">{totalProtein.toFixed(1)}g</span>
        </div>
      </div>
    </Link>
    // </div>
  );
};

export default NutritionOverview;
