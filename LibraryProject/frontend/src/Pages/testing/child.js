import React from "react";
import "../testing/Child.css";
const Child = (probs) => {
  const value = probs.data;
  console.log(value);

  return (
    <>
      <div className="diff">
        {" "}
        <h1>{value[0].id}</h1>
        <h1>{value[0].name}</h1>
        <h1>{value[0].lender}</h1>
      </div>
    </>
  );
};

export default Child;
