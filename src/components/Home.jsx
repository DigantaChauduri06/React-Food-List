import React, { useState } from "react";
import { FoodList } from "./FoodList";

export const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <>
          <h1>Welcome To Foodmela</h1>
          <h3>Click here to go to our menu</h3>
          <button onClick={() => setShow(false)}>click</button>
        </>
      ) : (
        <FoodList />
      )}
    </div>
  );
};
