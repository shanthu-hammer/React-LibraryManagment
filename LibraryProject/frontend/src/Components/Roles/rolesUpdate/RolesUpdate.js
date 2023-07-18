import React from "react";
import { UpdateData } from "../../../Pages/crud/crud";
const RoleUpdate = (probs) => {
  console.log(probs);
  let BooksData = probs; //value

  //Update data function call
  let url = "http://localhost:5000/useRoles";
  let data = probs;
  try {
    let response = UpdateData(url, data);
  } catch (error) {
    console.log(error);
  }

  return <>{console.log("{^_^}/  \n the books values has been uodated ")}</>;
};

export default RoleUpdate;
