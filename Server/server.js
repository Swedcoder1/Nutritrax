const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
require("dotenv").config();
const mongoUtil = require("./mongoUtil");
const breakfast = require("./Meals/breakfast");
const searchInput = require("./searchInput");
const lunch = require("./Meals/lunch");
const dinner = require("./Meals/dinner");
const totalNutrition = require("./Meals/totalNutritionData");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));

mongoUtil.connectToServer(function (err, client) {
  if (err) throw err;
});

// create a GET route
app.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

//Get searchinput for fooditem
app.use("/", searchInput);

//Get, Add, Delete data from breakfast, lunch and dinner collection in mongoDB.
app.use("/", breakfast);
app.use("/", lunch);
app.use("/", dinner);
app.use("/", totalNutrition);
