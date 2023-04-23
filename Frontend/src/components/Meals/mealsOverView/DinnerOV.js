import React, { useEffect } from "react";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const DinnerOV = (props) => {
  const { storeFoodDinner, setStoreFoodDinner } = props;

  //Get database item when page load.
  useEffect(() => {
    axios
      .get("http://localhost:5000/getDataDinner")
      .then((response) => {
        console.log(response.data);
        setStoreFoodDinner(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStoreFoodDinner]);

  const totalKcal = storeFoodDinner.reduce(
    (prevValue, currentValue) => prevValue + currentValue.calories,
    0
  );

  const totalProtein = storeFoodDinner.reduce(
    (prevValue, currentValue) => prevValue + currentValue.protein_g,
    0
  );

  const totalCarbs = storeFoodDinner.reduce(
    (prevValue, currentValue) => prevValue + currentValue.carbohydrates_total_g,
    0
  );

  const totalFat = storeFoodDinner.reduce(
    (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
    0
  );

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
