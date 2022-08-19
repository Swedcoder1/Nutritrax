const express = require("express");
const router = express();
const axios = require("axios");
require("dotenv").config();

//Get searchinput for fooditem
router.get("/nutrition", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/nutrition",
    params: { query: req.query.query },
    headers: {
      "X-Api-Key": process.env.API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
