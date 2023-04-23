import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import SearchedFoodItem from "./SearchedFoodItem";
import NutritionCount from "./NutritionCount";
import { BiArrowBack } from "react-icons/bi";
import Message from "./Message";

const Lunch = (props) => {
  const { storeFoodLunch, setStoreFoodLunch } = props;
  const [food, setFood] = useState("");
  const [apiResult, setApiResult] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [error, setError] = useState(false);
  const [alreadyExist, setAlreadyExists] = useState(false);

  const getData = () => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/nutrition",
      params: { query: food },
    };

    axios
      .request(options)
      .then((response) => {
        setApiResult(response.data);
        setIsTrue(true);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const addItem = (foodItem) => {
    //Skicka till backend -> backend skickar till mongoDB
    const found = storeFoodLunch.find((elem) => elem.name === foodItem.name);
    if (found) {
      setAlreadyExists(true);
      setTimeout(() => {
        setAlreadyExists(false);
      }, 3000);
      setApiResult([]);
      setFood("");
    } else {
      axios
        .post("http://localhost:5000/sendDataLunch", foodItem)
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
      .get("http://localhost:5000/getDataLunch")
      .then((response) => {
        setStoreFoodLunch(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, [setStoreFoodLunch]);

  //Get data when success triggers.
  useEffect(() => {
    if (!success) {
      return;
    } else {
      setTimeout(() => {
        axios
          .get("http://localhost:5000/getDataLunch")
          .then((response) => {
            setStoreFoodLunch(response.data);
          })
          .catch((error) => {});
      }, 1500);
    }
  }, [success, setStoreFoodLunch]);

  const handleDelete = (name) => {
    axios
      .delete("http://localhost:5000/deleteDataLunch", {
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

  const handleOpen = () => {
    setOpen(!open);
  };

  const totalKcal = storeFoodLunch.reduce(
    (prevValue, currentValue) => prevValue + currentValue.calories,
    0
  );

  const totalProtein = storeFoodLunch.reduce(
    (prevValue, currentValue) => prevValue + currentValue.protein_g,
    0
  );

  const totalCarbs = storeFoodLunch.reduce(
    (prevValue, currentValue) => prevValue + currentValue.carbohydrates_total_g,
    0
  );

  const totalFat = storeFoodLunch.reduce(
    (prevValue, currentValue) => prevValue + currentValue.fat_total_g,
    0
  );

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
        <h1 className="text-2xl font-semibold text-center mt-10">Lunch</h1>
        <NutritionCount
          storeFoodLunch={storeFoodLunch}
          totalKcal={totalKcal}
          totalProtein={totalProtein}
          totalCarbs={totalCarbs}
          totalFat={totalFat}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-around m-auto mt-8">
        <div>
          <div>
            <p className="text-center mt-8 lg:mt-0 font-semibold">
              Added items
            </p>
            {storeFoodLunch.map((food, index) => {
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

export default Lunch;