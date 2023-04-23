import React, { useEffect } from "react";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const DinnerOV = (props) => {
  const { storeFoodDinner, setStoreFoodDinner } = props;

  //Get database item when page load.
  useEffect(() => {
    axios
      .get("https://nutritrax.vercel.app/getDataDinner")
      .then((response) => {
        console.log(response.data);
        setStoreFoodDinner(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStoreFoodDinner]);

  //Check if it is an array, if it is, use reduce else display 0
  const totalKcal = Array.isArray(storeFoodDinner)
    ? storeFoodDinner.reduce(
        (prevValue, currentValue) => prevValue + currentValue.calories,
        0
      )
    : 0;

  const totalProtein = Array.isArray(storeFoodDinner)
    ? storeFoodDinner.reduce(
        (prevValue, currentValue) => prevValue + currentValue.protein_g,
        0
      )
    : 0;

  const totalCarbs = Array.isArray(storeFoodDinner)
    ? storeFoodDinner.reduce(
        (prevValue, currentValue) =>
          prevValue + currentValue.carbohydrates_total_g,
        0
      )
    : 0;

  const totalFat = Array.isArray(storeFoodDinner)
    ? storeFoodDinner.reduce(
        (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
        0
      )
    : 0;

  return (
    <NutritionOverview
      link="nutrition/dinner"
      title="Dinner"
      totalKcal={totalKcal}
      totalCarbs={totalCarbs}
      totalFat={totalFat}
      totalProtein={totalProtein}
    />
  );
};

export default DinnerOV;
