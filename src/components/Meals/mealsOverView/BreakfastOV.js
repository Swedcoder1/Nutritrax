import React, { useEffect } from "react";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const BreakfastOV = (props) => {
  const { storeFood, setStoreFood } = props;

  //Get database item when page load.
  useEffect(() => {
    axios
      .get("http://localhost:5000/getData")
      .then((response) => {
        console.log(response.data);
        setStoreFood(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStoreFood]);

  const totalKcal = storeFood.reduce(
    (prevValue, currentValue) => prevValue + currentValue.calories,
    0
  );

  const totalProtein = storeFood.reduce(
    (prevValue, currentValue) => prevValue + currentValue.protein_g,
    0
  );

  const totalCarbs = storeFood.reduce(
    (prevValue, currentValue) => prevValue + currentValue.carbohydrates_total_g,
    0
  );

  const totalFat = storeFood.reduce(
    (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
    0
  );

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
