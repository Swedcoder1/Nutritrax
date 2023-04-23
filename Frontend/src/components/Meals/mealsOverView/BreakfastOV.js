import React, { useEffect } from "react";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const BreakfastOV = (props) => {
  const { storeFood, setStoreFood } = props;

  //Get database item when page load.
  useEffect(() => {
    axios
      .get("https://nutritrax.vercel.app/getData")
      .then((response) => {
        console.log(response.data);
        setStoreFood(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStoreFood]);

  //Check if it is an array, if it is, use reduce else display 0
  const totalKcal = Array.isArray(storeFood)
    ? storeFood.reduce(
        (prevValue, currentValue) => prevValue + currentValue.calories,
        0
      )
    : 0;

  const totalProtein = Array.isArray(storeFood)
    ? storeFood.reduce(
        (prevValue, currentValue) => prevValue + currentValue.protein_g,
        0
      )
    : 0;

  const totalCarbs = Array.isArray(storeFood)
    ? storeFood.reduce(
        (prevValue, currentValue) =>
          prevValue + currentValue.carbohydrates_total_g,
        0
      )
    : 0;

  const totalFat = Array.isArray(storeFood)
    ? storeFood.reduce(
        (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
        0
      )
    : 0;

  return (
    <div>
      <NutritionOverview
        link="nutrition/breakfast"
        title="Breakfast"
        totalKcal={totalKcal}
        totalCarbs={totalCarbs}
        totalFat={totalFat}
        totalProtein={totalProtein}
      />
    </div>
  );
};

export default BreakfastOV;
