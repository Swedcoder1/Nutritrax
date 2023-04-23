import React, { useEffect } from "react";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const LunchOV = (props) => {
  const { storeFoodLunch, setStoreFoodLunch } = props;

  //Get database item when page load.
  useEffect(() => {
    axios
      .get("https://nutritrax.vercel.app/getDataLunch")
      .then((response) => {
        console.log(response.data);
        setStoreFoodLunch(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStoreFoodLunch]);

  //Check if it is an array, if it is, use reduce else display 0
  const totalKcal = Array.isArray(storeFoodLunch)
    ? storeFoodLunch.reduce(
        (prevValue, currentValue) => prevValue + currentValue.calories,
        0
      )
    : 0;

  const totalProtein = Array.isArray(storeFoodLunch)
    ? storeFoodLunch.reduce(
        (prevValue, currentValue) => prevValue + currentValue.protein_g,
        0
      )
    : 0;

  const totalCarbs = Array.isArray(storeFoodLunch)
    ? storeFoodLunch.reduce(
        (prevValue, currentValue) =>
          prevValue + currentValue.carbohydrates_total_g,
        0
      )
    : 0;

  const totalFat = Array.isArray(storeFoodLunch)
    ? storeFoodLunch.reduce(
        (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
        0
      )
    : 0;

  return (
    <NutritionOverview
      link="nutrition/lunch"
      title="Lunch"
      totalKcal={totalKcal}
      totalCarbs={totalCarbs}
      totalFat={totalFat}
      totalProtein={totalProtein}
    />
  );
};

export default LunchOV;
