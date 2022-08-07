import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const BreakfastOV = (props) => {
  const { storeFood, setStoreFood } = props;

  const getDatabaseData = () => {
    axios
      .get("http://localhost:5000/getData")
      .then((response) => {
        console.log(response.data);
        setStoreFood(response.data);

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
      <Link to="/nutrition/breakfast">
        <NutritionOverview
          title="Breakfast"
          totalKcal={totalKcal}
          totalCarbs={totalCarbs}
          totalFat={totalFat}
          totalProtein={totalProtein}
        />
      </Link>
    </div>
  );
};

export default BreakfastOV;
