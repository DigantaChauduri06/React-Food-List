import React from "react";

export const ItemsListShow = ({ showFoods }) => {
  return (
    <React.Fragment>
      <ul className="items">
        {showFoods &&
          showFoods.map((food) => {
            return (
              <li key={food.id} className="banner">
                <h1 className="food-name">{food.name}</h1>
                <button className="btn"> &#8377; {food.price} </button>
              </li>
            );
          })}
      </ul>
    </React.Fragment>
  );
};
