import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodItem from "./FoodItem";
import SearchedFoodItem from "./SearchedFoodItem";
import NutritionCountDinner from "./NutritionCountDinner";
import NutritionCount from "./NutritionCount";

const Dinner = (props) => {
  const { storeFoodDinner, setStoreFoodDinner } = props;
  const [food, setFood] = useState("");
  const [apiResult, setApiResult] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  // const [storeFood, setStoreFood] = useState([]);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const getData = () => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/nutrition",
      params: { query: food },
    };

    axios
      .request(options)
      .then((response) => {
        console.log("apiResult:" + response.data);
        setApiResult(response.data);
        setIsTrue(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addItem = (foodItem) => {
    //Skicka till backend -> backend skickar till mongoDB
    console.log(foodItem);

    axios
      .post("http://localhost:5000/sendDataDinner", foodItem)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setApiResult([]);
    setSuccess(true);
    setAlert(true);
  };

  //Update itemlist when item added or deleted.
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  }, [success]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 1000);
    }
  }, [alert]);

  // useEffect(() => {
  //   const getDatabaseData = () => {
  //     axios
  //       .get("http://localhost:5000/getData")
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  // }, []);

  //Get data from mongoDB.
  const getDatabaseData = () => {
    axios
      .get("http://localhost:5000/getDataDinner")
      .then((response) => {
        console.log(response.data);
        setStoreFoodDinner(response.data);

        // console.log("storefood:" + storeFood);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Get database item when page load.
  useEffect(() => {
    // let mounted = true;
    getDatabaseData();
    // return () => (mounted = false);
  }, []);

  //Get data when success triggers.
  useEffect(() => {
    if (!success) {
      return;
    } else {
      setTimeout(() => {
        getDatabaseData();
      }, 1500);
    }
  }, [success]);

  const handleDelete = (name) => {
    console.log(name);

    axios
      .delete("http://localhost:5000/deleteDataDinner", {
        data: {
          name: name,
        },
      })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
    setSuccess(true);
    setDeleteAlert(true);
  };

  useEffect(() => {
    if (deleteAlert) {
      setTimeout(() => {
        setDeleteAlert(false);
      }, 1000);
    }
  }, [deleteAlert]);
  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  // const searchName = () => {
  //   setIsTrue(true);
  // };

  const handleOpen = () => {
    setOpen(!open);
  };

  const totalKcal = storeFoodDinner.reduce(
    (prevValue, currentValue) => prevValue + currentValue.calories,
    0
  );

  const totalProtein = storeFoodDinner.reduce(
    (prevValue, currentValue) => prevValue + currentValue.protein_g,
    0
  );

  const totalCarbs = storeFoodDinner.reduce(
    (prevValue, currentValue) => prevValue + currentValue.carbohydrates_total_g,
    0
  );

  const totalFat = storeFoodDinner.reduce(
    (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
    0
  );

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-center mt-10">Dinner</h1>
        <NutritionCount
          totalKcal={totalKcal}
          totalProtein={totalProtein}
          totalCarbs={totalCarbs}
          totalFat={totalFat}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-around m-auto mt-8">
        <div>
          <div className="border-b-2 border-gray-400">
            <p className="text-center">Added items</p>
            {/* List of items added */}
          </div>
          <div>
            {storeFoodDinner.map((food, index) => {
              return (
                <FoodItem
                  key={food._id}
                  food={food}
                  deleteAlert={deleteAlert}
                  handleDelete={handleDelete}
                  handleOpen={handleOpen}
                  open={open}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex mt-5">
              <input
                type="text"
                name="search"
                id="search"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                className="outline outline-1 outline-gray-700 pr-6 pl-1 py-1 rounded-sm"
              />
              <button
                onClick={getData}
                className="bg-green-400 ml-2 px-7 py-2 rounded-sm text-white hover:bg-green-500"
              >
                Search
              </button>
            </div>
          </div>

          {apiResult.map((foodItem, index) => {
            console.log(foodItem);
            return (
              <SearchedFoodItem
                key={index}
                foodItem={foodItem}
                addItem={addItem}
                isTrue={isTrue}
                alert={alert}
              />
            );
          })}
        </div>
      </div>
      {/* Alert message */}
      <div className="absolute bottom-4 ml-auto mr-auto left-0 right-0 w-36">
        <div>
          {alert && (
            <p className="text-green-500 bg-gray-200 rounded-md font-semibold text-xl px-3 py-2 text-center">
              Item added
            </p>
          )}
        </div>
        <div>
          {deleteAlert && (
            <h2 className="text-red-500 bg-gray-200 rounded-md font-semibold text-xl px-3 py-2 text-center">
              Item deleted
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Dinner;
