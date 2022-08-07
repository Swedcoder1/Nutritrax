import React from "react";

const FoodItem = (props) => {
  const { handleDelete, food } = props;
  return (
    <>
      <div
        // onClick={handleOpen}
        className="mt-4 py-3 px-2  rounded-md shadow-md bg-gray-100"
      >
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
              className="text-red-600 hover:cursor-pointer"
              onClick={() => handleDelete(food.name)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          <p>Protein: {food.protein_g}g</p>
          <p className="ml-2">Carbohydrates: {food.carbohydrates_total_g}g</p>
          <p className="ml-2">Fat: {food.fat_total_g}g</p>
          <p className="ml-2">Fiber: {food.fiber_g}g</p>
          <p className="ml-2">Suger: {food.sugar_g}g</p>
        </div>
      </div>
      {/* {deleteAlert && <h2>Item deleted</h2>} */}
    </>
  );
};

export default FoodItem;
