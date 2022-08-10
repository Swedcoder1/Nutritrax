import React from "react";

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
          <button
            onClick={() => addItem(foodItem)}
            className="bg-green-400 ml-2 px-6 py-1 rounded-sm text-white hover:bg-green-500"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchedFoodItem;
