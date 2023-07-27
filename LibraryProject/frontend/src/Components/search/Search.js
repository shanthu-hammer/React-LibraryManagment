import React, { useState } from "react";
import SearchResults from "../searchResults/SearchResults";

const Search = (probs) => {
  const [searchWord, setSearchWord] = useState("ummyy");
  const [searchResults, setSearchResults] = useState();
  let arr = probs.booksData;
  let foundData = "default";
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchWord(e.target.value);
  };
  for (let i = 0; i < arr.length; i++) {
   

    if (arr[i].name == searchWord) {
      foundData = arr[i];
    } else {
      foundData = "No Matching Books Available ";
    }
    console.log(foundData);
    //setSearchResults(foundData);
  }

  return (
    <>
      <input
        placeholder="default"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <SearchResults data={foundData} />
    </>
  );
};

export default Search;
