import React from "react";

export const Errorpage = ({ err }) => {
  return (
    <div>
      <h1>OOPS SOMETHING IS WRONG</h1>
      <p>{err}</p>
    </div>
  );
};
