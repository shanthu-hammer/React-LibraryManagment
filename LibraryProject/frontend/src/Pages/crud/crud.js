import React from "react";
import axios from "axios";
// Fetch data from API
//http://localhost:5000/books
let booksUrl = " http://localhost:5000/product";
let data = "Default";
//  export const fetchData = async () => {
//    try {
//      const response = await fetch(booksUrl).
//then(data = await response.text()).then(console.log);

//     // console.log(data);
//    } catch (error) {
//      console.log("Error:", error);
//    }
//    return data;
//  };
//jjkkjn
export const fetchDataa= async () => {
  try {
    const response = await fetch("http://localhost:5000/product");
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching data");
  }
};

// Same one using AXIOS
export const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/books");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//  // Post Method
//  export const createData = async () => {
//    try {
//      const response = await fetch("https://example.com/api/data", {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//        },
//        body: JSON.stringify({ name: "New Data" }),
//      });
//      const createdData = await response.json();
//    } catch (error) {
//      console.log("Error:", error);
//    }
//  };

//  // Update data by id
//  export const updateData = async (id) => {
//    try {
//      const response = await fetch(`https://example.com/api/data/${id}`, {
//        method: "PUT",
//        headers: {
//          "Content-Type": "application/json",
//        },
//        body: JSON.stringify({ name: "Updated Data" }),
//      });
//      const updatedData = await response.json();
//    } catch (error) {
//      console.log("Error:", error);
//    }
//  };

//  //Delete By ID
//  export const deleteData = async (id) => {
//    try {
//      await fetch(`https://example.com/api/data/${id}`, {
//        method: "DELETE",
//      });
//    } catch (error) {
//      console.log("Error:", error);
//    }
//  };
