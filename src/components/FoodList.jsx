import React, { useState } from "react";
import { ItemsListShow } from "./ItemsListShow";
import { useFetch } from "../hooks/useFetch";
// Styles
import "./FoodList.css";
import { Home } from "./Home";
import { Errorpage } from "./Errorpage";

export const FoodList = () => {
  // States
  const [url, setUrl] = useState("http://localhost:8080/foods");
  const [show, setShow] = useState(true);
  const { data: showFoods, isPending, error } = useFetch(url);
  //Helper Functions
  const randomFood = () => {
    const no = Math.floor(Math.random() * 4) + 1;
    console.log(no);
    setUrl(`http://localhost:8080/foods?id=${no}`);
  };
  const allFoods = () => {
    setUrl("http://localhost:8080/foods");
  };
  //Main JSX
  return (
    <>
      {show ? (
        <div className="food-list-component">
          {isPending && (
            <div>
              <h1>Your Page is loading please wait</h1>
            </div>
          )}
          {error && <Errorpage err={error} />}
          {!isPending && (
            <>
              <h1 className="header">All Foods Are Listed here</h1>
              <button className="random-food" onClick={randomFood}>
                Random Food
              </button>
              <button className="random-food" onClick={allFoods}>
                All Foods
              </button>
              <button className="random-food" onClick={() => setShow(false)}>
                Home
              </button>
              <ItemsListShow showFoods={showFoods} />
            </>
          )}
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};
