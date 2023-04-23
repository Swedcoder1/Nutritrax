const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });
let db;

//Connects to mongodb server.
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, client) {
      console.log("Database connected");

      if (err) throw err;

      return callback(err);
    });
  },

  //Set the database.
  getDb: function () {
    db = client.db("Meals");

    return db;
  },
};
