import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NutritionOverview from "./NutritionOverview";

const DinnerOV = (props) => {
  const { storeFoodDinner, setStoreFoodDinner } = props;

  const getDatabaseData = () => {
    axios
      .get("http://localhost:5000/getDataDinner")
      .then((response) => {
        console.log(response.data);
        setStoreFoodDinner(response.data);

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
    // <div className="flex w-2/5 m-auto mt-14 bg-green-100 py-6">
    <Link
      to="/nutrition/dinner"
      // className="flex justify-around w-3/6 m-auto mt-14 bg-green-100 py-6 rounded-md items-center"
    >
      <NutritionOverview
        title="Dinner"
        totalKcal={totalKcal}
        totalCarbs={totalCarbs}
        totalFat={totalFat}
        totalProtein={totalProtein}
      />
      {/* <p className="font-semibold text-xl w-12">Dinner</p>
      <div className="flex justify-around w-8/12 ">
        <div className="flex">
          <p>Kcal:</p>
          <span className="font-semibold ml-1">{totalKcal.toFixed(1)}</span>
        </div>
        <div className="flex">
          <p>C:</p>
          <span className="font-semibold ml-1">{totalCarbs.toFixed(1)}g</span>
        </div>
        <div className="flex">
          <p>F:</p>
          <span className="font-semibold ml-1">{totalFat.toFixed(1)}g</span>
        </div>
        <div className="flex">
          <p>P:</p>
          <span className="font-semibold ml-1">{totalProtein.toFixed(1)}g</span>
        </div>
      </div> */}
      {/* <NutritionCount storeFood={storeFood} /> */}
    </Link>
    // </div>
  );
};

export default DinnerOV;
