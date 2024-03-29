import React from "react";
import { ImCross } from "react-icons/im";

const FoodItem = (props) => {
  const { handleDelete, food } = props;
  return (
    <>
      <div className="mt-5 py-3 px-4 rounded-md shadow-md bg-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="font-semibold text-lg">
              {food.name.charAt(0).toUpperCase() + food.name.slice(1)}
            </p>
            <p className="ml-2">{food.serving_size_g}g</p>
            <p className="ml-2 font-semibold">{food.calories} Kcal</p>
          </div>
          <div>
            <button
              className="text-red-500 hover:text-red-600 hover:cursor-pointer"
              onClick={() => handleDelete(food.name)}
            >
              <ImCross className="text-lg" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mt-2">
          <p>Protein: {food.protein_g}g</p>
          <p className="ml-3">Carbohydrates: {food.carbohydrates_total_g}g</p>
          <p className="ml-3">Fat: {food.fat_total_g}g</p>
          <p className="ml-3">Fiber: {food.fiber_g}g</p>
          <p className="ml-3">Suger: {food.sugar_g}g</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
