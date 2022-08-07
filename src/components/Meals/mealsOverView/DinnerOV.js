import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <div className="flex border-b-2 border-black w-2/5 m-auto pb-2 mt-14">
      <Link to="/nutrition/dinner" className="flex justify-around w-5/6">
        <p className="font-semibold w-12">Dinner</p>
        <div className="flex justify-around w-9/12">
          <p>Kcal: {Math.round(totalKcal * 10) / 10}</p>
          <p>C: {Math.round(totalCarbs * 10) / 10}g</p>
          <p>F: {Math.round(totalFat * 10) / 10}g</p>
          <p>P: {Math.round(totalProtein * 10) / 10}g</p>
        </div>
        {/* <NutritionCount storeFood={storeFood} /> */}
      </Link>
    </div>
  );
};

export default DinnerOV;