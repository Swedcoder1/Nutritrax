const express = require("express");
const router = express();
const mongoUtil = require("../mongoUtil");
const db = mongoUtil.getDb();

//Send data from frontend to database.
router.post("/sendDataDinner", (req, res) => {
  let foodObj = req.body;

  db.collection("Dinner").insertOne(foodObj, function (err, res) {
    if (err) throw err;
    console.log("Document inserted");
  });

  foodObj = "";
});

//Get breakfast data from mongoDB and send it to React.
router.get("/getDataDinner", (req, res) => {
  db.collection("Dinner")
    .find({})
    .toArray((err, collection) => {
      if (err) throw err;
      console.log("Record Read successfully");
      res.send(collection);
    });
});

//Delete items from breakfast collection.
router.delete("/deleteDataDinner", (req, res) => {
  let deleteName = req.body.name;
  let deleteItem = { name: req.body.name };

  db.collection("Dinner").deleteOne(deleteItem, function (err, obj) {
    if (err) throw err;
    res.send();
  });
});

module.exports = router;
