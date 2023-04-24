import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import SearchedFoodItem from "./SearchedFoodItem";
import NutritionCount from "./NutritionCount";
import { BiArrowBack } from "react-icons/bi";
import Message from "./Message";

const Breakfast = ({ storeFood, setStoreFood }) => {
  // const { storeFood, setStoreFood } = props;
  const [food, setFood] = useState("");
  const [apiResult, setApiResult] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [error, setError] = useState(false);
  const [alreadyExist, setAlreadyExists] = useState(false);

  const getData = () => {
    const options = {
      method: "GET",
      url: "https://nutritrax-backend.vercel.app/nutrition",
      params: { query: food },
    };

    axios
      .request(options)
      .then((response) => {
        console.log("Get data repsonse:" + JSON.stringify(response.data));
        const data = response.data;
        setApiResult(data);
        setIsTrue(true);
      })
      .catch((error) => {
        setError(true);
      });

    console.log("Apiresult:" + JSON.stringify(apiResult));
  };

  const addItem = (foodItem) => {
    //Send data to backend -> backend sends the data to mongoDB
    const found = storeFood.find((elem) => elem.name === foodItem.name);
    if (found) {
      setAlreadyExists(true);
      setTimeout(() => {
        setAlreadyExists(false);
      }, 3000);
      setApiResult([]);
      setFood("");
    } else {
      axios
        .post("https://nutritrax-backend.vercel.app/sendData", foodItem)
        .then(function (response) {})
        .catch(function (error) {
          setError(true);
        });
      setApiResult([]);
      setFood("");
      setSuccess(true);
      setAlert(true);
    }
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

  //Get database item when page load.
  useEffect(() => {
    axios
      .get("https://nutritrax-backend.vercel.app/getData")
      .then((response) => {
        setStoreFood(response.data);
        console.log("storefood:" + storeFood);
      })
      .catch((error) => {
        setError(true);
      });
  }, [setStoreFood]);

  //Get data when item added and success triggers.
  useEffect(() => {
    if (!success) {
      return;
    } else {
      setTimeout(() => {
        axios
          .get("https://nutritrax-backend.vercel.app/getData")
          .then((response) => {
            setStoreFood(response.data);
          })
          .catch((error) => {
            setError(true);
          });
      }, 1500);
    }
  }, [success, setStoreFood]);

  //Delete item.
  const handleDelete = (name) => {
    axios
      .delete("https://nutritrax-backend.vercel.app/deleteData", {
        data: {
          name: name,
        },
      })
      .then((response) => {})
      .catch((error) => {
        setError(true);
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

  //Summerize nutrition value Kcal, Protein, Carbohydrates, Fat in data from mongoDb.
  const totalKcal = Array.isArray(storeFood)
    ? storeFood.reduce(
        (prevValue, currentValue) => prevValue + currentValue.calories,
        0
      )
    : 0;

  const totalProtein = Array.isArray(storeFood)
    ? storeFood.reduce(
        (prevValue, currentValue) => prevValue + currentValue.protein_g,
        0
      )
    : 0;

  const totalCarbs = Array.isArray(storeFood)
    ? storeFood.reduce(
        (prevValue, currentValue) =>
          prevValue + currentValue.carbohydrates_total_g,
        0
      )
    : 0;

  const totalFat = Array.isArray(storeFood)
    ? storeFood.reduce(
        (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
        0
      )
    : 0;
  return (
    <>
      <div className="ml-2 mt-2 text-3xl">
        <Link to="/" className="inline-block w-8">
          <BiArrowBack />
        </Link>
      </div>

      <div className="flex justify-center">
        {error && <h3>Oops.. Something went wrong!</h3>}
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-center mt-6">Breakfast</h1>
        <NutritionCount
          storeFood={storeFood}
          totalKcal={totalKcal}
          totalProtein={totalProtein}
          totalCarbs={totalCarbs}
          totalFat={totalFat}
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-around w-11/12 sm:w-8/12 lg:w-full m-auto mt-8">
        <div>
          <div>
            <p className="text-center mt-8 lg:mt-0 font-semibold">
              Added items
            </p>
            {Array.isArray(storeFood)
              ? storeFood.map((food) => {
                  return (
                    <FoodItem
                      key={food._id}
                      food={food}
                      deleteAlert={deleteAlert}
                      handleDelete={handleDelete}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex mt-5 mb-10 md:mb-0 justify-center">
              <input
                type="text"
                name="search"
                id="search"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                className="outline outline-1 outline-gray-700 md:pr-16 pl-1 py-2 rounded-sm"
              />
              <button
                onClick={getData}
                className="bg-green-500 ml-2 px-7 py-2 rounded-sm text-white hover:bg-green-400"
              >
                Search
              </button>
            </div>
          </div>
          {alreadyExist && (
            <p className="font-semibold text-lg mt-3">
              Item already exist in added items
            </p>
          )}
          {apiResult.map((foodItem, index) => {
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
      <Message alert={alert} deleteAlert={deleteAlert} />
    </>
  );
};

export default Breakfast;
