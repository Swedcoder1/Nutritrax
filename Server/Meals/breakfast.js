const express = require("express");
const router = express();
const mongoUtil = require("../mongoUtil");
const db = mongoUtil.getDb();

//Send data from react to mongoDb.
router.post("/sendData", (req, res) => {
  let foodObj = req.body;

  db.collection("Breakfast").insertOne(foodObj, function (err, res) {
    if (err) throw err;
    console.log("Document inserted");
  });

  foodObj = "";
});

//Get breakfast data from mongoDB and send it to React.
router.get("/getData", (req, res) => {
  db.collection("Breakfast")
    .find({})
    .toArray((err, collection) => {
      if (err) throw err;
      res.json(collection);
    });
});

//Delete items from breakfast collection.
router.delete("/deleteData", (req, res) => {
  let deleteItem = { name: req.body.name };

  db.collection("Breakfast").deleteOne(deleteItem, function (err, obj) {
    if (err) throw err;
    res.json();
  });
});

module.exports = router;
