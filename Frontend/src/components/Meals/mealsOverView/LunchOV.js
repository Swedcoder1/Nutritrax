import React, { useEffect } from "react";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const LunchOV = (props) => {
  const { storeFoodLunch, setStoreFoodLunch } = props;

  //Get database item when page load.
  useEffect(() => {
    axios
      .get("http://localhost:5000/getDataLunch")
      .then((response) => {
        console.log(response.data);
        setStoreFoodLunch(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStoreFoodLunch]);

  const totalKcal = storeFoodLunch.reduce(
    (prevValue, currentValue) => prevValue + currentValue.calories,
    0
  );

  const totalProtein = storeFoodLunch.reduce(
    (prevValue, currentValue) => prevValue + currentValue.protein_g,
    0
  );

  const totalCarbs = storeFoodLunch.reduce(
    (prevValue, currentValue) => prevValue + currentValue.carbohydrates_total_g,
    0
  );

  const totalFat = storeFoodLunch.reduce(
    (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
    0
  );

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
