import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const LunchOV = (props) => {
  const { storeFoodLunch, setStoreFoodLunch } = props;

  const getDatabaseData = () => {
    axios
      .get("http://localhost:5000/getDataLunch")
      .then((response) => {
        console.log(response.data);
        setStoreFoodLunch(response.data);

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
    <Link to="/nutrition/lunch">
      <NutritionOverview
        title="Lunch"
        totalKcal={totalKcal}
        totalCarbs={totalCarbs}
        totalFat={totalFat}
        totalProtein={totalProtein}
      />
    </Link>
  );
};

export default LunchOV;
