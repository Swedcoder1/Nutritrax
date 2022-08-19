import React from "react";
import { IoAddCircle } from "react-icons/io5";

const SearchedFoodItem = (props) => {
  const { foodItem, isTrue, addItem } = props;
  return (
    <div className="flex justify-between md:mt-6 w-11/12 md:w-7/12 m-auto lg:w-full bg-gray-100 shadow-lg rounded-sm px-4 py-2">
      <div>
        <div className="flex mb-2 items-center">
          <p className="font-semibold text-lg">
            {foodItem.name.charAt(0).toUpperCase() + foodItem.name.slice(1)}
          </p>
          <p className="ml-2">{foodItem.serving_size_g}g</p>
        </div>
        <p>Kcal: {foodItem.calories}g</p>
        <p>Protein: {foodItem.protein_g}g</p>
        <p>Carbohydrate: {foodItem.carbohydrates_total_g}g</p>
        <p>Fat: {foodItem.fat_total_g}g</p>
        <p>Fiber: {foodItem.fiber_g}g</p>
        <p>Sugar: {foodItem.sugar_g}g</p>
      </div>
      <div>
        {isTrue && (
          <IoAddCircle
            onClick={() => addItem(foodItem)}
            className="text-4xl text-green-500 hover:text-green-400 hover:cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default SearchedFoodItem;
