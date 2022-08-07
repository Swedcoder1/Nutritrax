import React from "react";
import Meal from "./Meals/Meal";

const NutritionPage = (props) => {
  const { storeFood, setStoreFood } = props;
  const { storeFoodLunch, setStoreFoodLunch } = props;
  const { storeFoodDinner, setStoreFoodDinner } = props;

  return (
    <>
      <Meal
        storeFood={storeFood}
        setStoreFood={setStoreFood}
        storeFoodLunch={storeFoodLunch}
        setStoreFoodLunch={setStoreFoodLunch}
        storeFoodDinner={storeFoodDinner}
        setStoreFoodDinner={setStoreFoodDinner}
      />
    </>
  );
};

export default NutritionPage;
