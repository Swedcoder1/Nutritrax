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

  //Flatten out array with objects from breakfast , lunch and dinner.
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
      <div className="flex justify-around w-9/12">
        <p>Kcal: {Math.round(totalKcal * 10) / 10}</p>
        <p>C: {Math.round(totalCarbs * 10) / 10}g</p>
        <p>F: {Math.round(totalFat * 10) / 10}g</p>
        <p>P: {Math.round(totalProtein * 10) / 10}g</p>
      </div>
    </div>
  );
};

export default TotalNutritionCount;
