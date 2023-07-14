import React from "react";
import { PostData,UpdateData } from "../../../Pages/crud/crud";
const BooksUpdate = (probs) => {
  console.log(probs);
  let BooksData = probs; //value

  //Update data function call
  let url = "http://localhost:5000/books";
  let data = probs;
  try {
    let response = UpdateData(url, data);
  } catch (error) {
    console.log(error);
  }

  return <>{console.log("{^_^}/  \n the books values has been uodated ")}</>;
};

export default BooksUpdate;
