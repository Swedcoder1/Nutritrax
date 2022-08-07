import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalNutritionCount = () => {
  const [storeTotalFood, setStoreTotalFood] = useState([]);

  const getDatabaseData = () => {
    axios
      .get("http://localhost:5000/getTotalData")
      .then((response) => {
        console.log(response.data);
        setStoreTotalFood(response.data);
        console.log("storeTotalFood:" + storeTotalFood);

        // console.log("storefood:" + storeFood);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Get database item when page load.
  useEffect(() => {
    // let mounted = true;
    getDatabaseData();
    // return () => (mounted = false);
  }, []);

  //Flatten out array with objects from breakfast, lunch and dinner.
  const flattenArray = storeTotalFood.reduce(
    (previousValue, currentValue) => previousValue.concat(currentValue),
    []
  );

  const totalKcal = flattenArray.reduce(
    (prevValue, currentValue) => prevValue + currentValue.calories,
    0
  );

  const totalProtein = flattenArray.reduce(
    (prevValue, currentValue) => prevValue + currentValue.protein_g,
    0
  );

  const totalCarbs = flattenArray.reduce(
    (prevValue, currentValue) => prevValue + currentValue.carbohydrates_total_g,
    0
  );

  const totalFat = flattenArray.reduce(
    (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
    0
  );
  return (
    <div className="flex justify-center w-2/5 m-auto pb-2">
      <div className="flex justify-around w-9/12 text-lg">
        <div className="flex">
          <p>Kcal:</p>
          <span className="font-semibold ml-1 mr-3 ">
            {totalKcal.toFixed(1)}
          </span>
        </div>
        <div className="flex">
          <p>C:</p>
          <span className="font-semibold mx-1 mr-3 ">
            {totalCarbs.toFixed(1)}g
          </span>
        </div>
        <div className="flex">
          <p>F:</p>
          <span className="font-semibold mx-1 mr-3 ">
            {totalFat.toFixed(1)}g
          </span>
        </div>
        <div className="flex">
          <p>P:</p>
          <span className="font-semibold mx-1 mr-3 ">
            {totalProtein.toFixed(1)}g
          </span>
        </div>
        {/* <p>Kcal: {totalKcal.toFixed(1)}</p>
        <p>C: {totalCarbs.toFixed(1)}g</p>
        <p>F: {totalFat.toFixed(1)}g</p>
        <p>P: {totalProtein.toFixed(1)}g</p> */}
      </div>
    </div>
  );
};

export default TotalNutritionCount;
