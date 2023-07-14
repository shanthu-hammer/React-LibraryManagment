import React from "react";
import axios from "axios";
// Fetch data from API

let uurl = "http://localhost:5000/books";
let userRolesUrl = "http://localhost:5000/useRoles";
let data = "Default";

// Fetch data from API
export const fetchBookData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const PostData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return "posted successully \n  {^_^}/";
  } catch (error) {
    console.log(error);
  }
};

export const UpdateData=async(url,data)=>{
  try{
    const response=await axios.put(url + "/" + data.id,data)
  }catch{}
}

export const DeleteData = async (url, id) => {
  try {
    const response = await axios.delete(url + "/" + id);
  } catch (error) {
    console.log(error);
  }
};

