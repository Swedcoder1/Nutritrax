import React from "react";
import BreakfastOV from "./mealsOverView/BreakfastOV";
import LunchOV from "./mealsOverView/LunchOV";
import DinnerOV from "./mealsOverView/DinnerOV";
import TotalNutritionCount from "./TotalNutritionCount";

const Meal = (props) => {
  const { storeFood, setStoreFood } = props;
  const { storeFoodLunch, setStoreFoodLunch } = props;
  const { storeFoodDinner, setStoreFoodDinner } = props;

  return (
    <>
      <div className="flex flex-col text-center mt-16">
        <h1 className="text-2xl mb-6 font-semibold">Your daily nutrition</h1>
        <div>
          <p className="text-xl">Total</p>
          <TotalNutritionCount />
        </div>
      </div>

      <BreakfastOV storeFood={storeFood} setStoreFood={setStoreFood} />

      <LunchOV
        storeFoodLunch={storeFoodLunch}
        setStoreFoodLunch={setStoreFoodLunch}
      />

      <DinnerOV
        storeFoodDinner={storeFoodDinner}
        setStoreFoodDinner={setStoreFoodDinner}
      />
    </>
  );
};

export default Meal;
