import React, { useState } from "react";
import SearchResults from "../searchResults/SearchResults";
import { Button } from "react-bootstrap";

const Search = (probs) => {
  let tempArray = [];
  let initialData = [
    {
      id: 200,
      name: "default",
      availability: true,
      lender: 1,
    },
  ];
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState(initialData);
  let arr = probs.booksData;
  //console.log(arr);

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  const handleSumit = (e) => {
    e.preventDefault();
    console.log("search word is " + searchWord);
    //console.log("data to search is " + arr[1].name);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name == searchWord) {
        tempArray.push(arr[i]);
        setSearchResults(tempArray);
        // setSearchResults([[...searchResults], tempArray]);
        //     foundData = arr[i];
        //     searchResults([...SearchResults], foundData);
      }
      //else {
      //     foundData = "No Matching Books Available ";
      // }
      //   //console.log(searchResults);
      //   //setSearchResults(foundData);
    }
    //setSearchResults([[...searchResults], tempArray]);
    console.log(searchResults);
  };

  return (
    <>
      <div className=" ">
        <div className="row m-5">
          <div className="col mx-5">
            <input
              placeholder="default"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
          <div className="col ">
            <Button
              onClick={(e) => {
                handleSumit(e);
              }}
            >
              Search
            </Button>
          </div>
        </div>
        {console.log(searchResults)}
        <SearchResults data={searchResults} />
      </div>
    </>
  );
};

export default Search;
