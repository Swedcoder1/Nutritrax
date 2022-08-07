import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NutritionPage from "./components/NutritionPage";
import Breakfast from "./components/Meals/Breakfast";
import Lunch from "./components/Meals/Lunch";
import Dinner from "./components/Meals/Dinner";
import CaloriesCalculatorPage from "./components/CaloriesCalculatorPage";
import Navbar from "./components/Navbar";

const App = () => {
  const [storeFood, setStoreFood] = useState([]);
  const [storeFoodLunch, setStoreFoodLunch] = useState([]);
  const [storeFoodDinner, setStoreFoodDinner] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <NutritionPage
              storeFood={storeFood}
              setStoreFood={setStoreFood}
              storeFoodLunch={storeFoodLunch}
              setStoreFoodLunch={setStoreFoodLunch}
              storeFoodDinner={storeFoodDinner}
              setStoreFoodDinner={setStoreFoodDinner}
            />
          }
        />
        <Route
          path="/nutrition/breakfast"
          element={
            <Breakfast storeFood={storeFood} setStoreFood={setStoreFood} />
          }
        />
        <Route
          path="/nutrition/lunch"
          element={
            <Lunch
              storeFoodLunch={storeFoodLunch}
              setStoreFoodLunch={setStoreFoodLunch}
            />
          }
        />
        <Route
          path="/nutrition/dinner"
          element={
            <Dinner
              storeFoodDinner={storeFoodDinner}
              setStoreFoodDinner={setStoreFoodDinner}
            />
          }
        />
        <Route
          path="/caloriesCalculator"
          element={<CaloriesCalculatorPage />}
        />
      </Routes>
    </>
  );
};

export default App;
