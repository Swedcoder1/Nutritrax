const express = require("express");
const router = express();
const mongoUtil = require("../mongoUtil");
const db = mongoUtil.getDb();
let totalNutritionData = [];
let totalBreakfast;
let totalLunch;
let totalDinner;

router.get("/getTotalData", (req, res) => {
  //Data from Breakfast collection
  db.collection("Breakfast")
    .find({})
    .toArray((err, collection) => {
      if (err) throw err;
      totalBreakfast = collection;
    });

  //Data from Lunch collection
  db.collection("Lunch")
    .find({})
    .toArray((err, collection) => {
      if (err) throw err;
      totalLunch = collection;
    });

  //Data from Dinner collection
  db.collection("Dinner")
    .find({})
    .toArray((err, collection) => {
      if (err) throw err;
      totalDinner = collection;
      totalNutritionData = [totalBreakfast, totalLunch, totalDinner];
      res.send(totalNutritionData);
    });
});

module.exports = router;
