import React from "react";

const NutritionCountDinner = (props) => {
  const { storeFoodDinner } = props;

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
    <div className="flex justify-center">
      <p>Kcal: {Math.round(totalKcal * 10) / 10}</p>
      <p className="mx-2">C: {Math.round(totalCarbs * 10) / 10}g</p>
      <p className="mr-2">F: {Math.round(totalFat * 10) / 10}g</p>
      <p>P: {Math.round(totalProtein * 10) / 10}g</p>
    </div>
  );
};

export default NutritionCountDinner;
