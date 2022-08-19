const express = require("express");
const router = express();
const mongoUtil = require("../mongoUtil");
const db = mongoUtil.getDb();

//Send data from frontend to database.
router.post("/sendDataLunch", (req, res) => {
  let foodObj = req.body;

  db.collection("Lunch").insertOne(foodObj, function (err, res) {
    if (err) throw err;
    console.log("Document inserted");
  });

  foodObj = "";
});

//Get breakfast data from mongoDB and send it to React.
router.get("/getDataLunch", (req, res) => {
  db.collection("Lunch")
    .find({})
    .toArray((err, collection) => {
      if (err) throw err;
      console.log("Record Read successfully");
      res.send(collection);
    });
});

//Delete items from breakfast collection.
router.delete("/deleteDataLunch", (req, res) => {
  let deleteName = req.body.name;
  let deleteItem = { name: req.body.name };

  db.collection("Lunch").deleteOne(deleteItem, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted" + obj);
    res.send();
  });
});

module.exports = router;
