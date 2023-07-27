import React, { useState } from "react";

const Search = (probs) => {
  const [searchWord, setSearchWord] = useState("ummyy");
  let arr = probs.booksData;

  
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchWord(e.target.value);
   
  };
  for (let i = 0; i < arr.length; i++) {
    let foundData = "default";
  
    if (arr[i].name == searchWord) {
      
      foundData = arr[i];
      
    } else {
      foundData = "No Matching Books Available ";
    }
    console.log(foundData);
  }

  return (
    <>
      <input
        placeholder="default"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
    </>
  );
};

export default Search;
