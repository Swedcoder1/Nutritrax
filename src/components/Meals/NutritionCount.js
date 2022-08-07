import React from "react";

const NutritionCount = (props) => {
  const { totalKcal, totalProtein, totalCarbs, totalFat } = props;

  return (
    <div className="flex justify-center text-lg">
      <div className="flex">
        <p>Kcal:</p>
        <span className="font-semibold ml-1 mr-3 ">{totalKcal.toFixed(1)}</span>
      </div>
      <div className="flex">
        <p>C:</p>
        <span className="font-semibold mx-1 mr-3 ">
          {totalCarbs.toFixed(1)}g
        </span>
      </div>
      <div className="flex">
        <p>F:</p>
        <span className="font-semibold mx-1 mr-3 ">{totalFat.toFixed(1)}g</span>
      </div>
      <div className="flex">
        <p>P:</p>
        <span className="font-semibold mx-1 mr-3 ">
          {totalProtein.toFixed(1)}g
        </span>
      </div>
    </div>
  );
};

export default NutritionCount;
