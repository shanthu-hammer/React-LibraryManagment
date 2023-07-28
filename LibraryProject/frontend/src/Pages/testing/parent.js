import React, { useState } from "react";
import Child from "./child";
const Parent = (probs) => {
  let initial = [
    {
      id: 200,
      name: "default",
      availability: true,
      lender: 1,
    },
  ];
  const [data, setData] = useState(initial);
  const handleClick = (e) => {
    let i = [
      {
        id: 1000,
        name: "Newnone ",
        availability: false,
        lender: 20,
      },
    ];
    setData(i);
  };
  return (
    <>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        TESTTT
      </button>
      <div className="row">
        <Child data={data} />
      </div>
    </>
  );
};

export default Parent;
