import React from "react";
import { Routes, Route } from "react-router-dom";
import NutritionPage from "./components/NutritionPage";
import Breakfast from "./components/Meals/Breakfast";
import Lunch from "./components/Meals/Lunch";
import Dinner from "./components/Meals/Dinner";
import CaloriesCalculatorPage from "./components/CaloriesCalculatorPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/nutrition/breakfast" element={<Breakfast />} />
        <Route path="/nutrition/lunch" element={<Lunch />} />
        <Route path="/nutrition/dinner" element={<Dinner />} />
        <Route
          path="/caloriesCalculator"
          element={<CaloriesCalculatorPage />}
        />
      </Routes>
    </>
  );
};

export default App;
