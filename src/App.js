import React from "react";
import { Routes, Route } from "react-router-dom";
import NutritionPage from "./components/NutritionPage";
import CaloriesCalculatorPage from "./components/CaloriesCalculatorPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<NutritionPage />} />
        <Route
          path="/caloriesCalculator"
          element={<CaloriesCalculatorPage />}
        />
      </Routes>
    </>
  );
};

export default App;
