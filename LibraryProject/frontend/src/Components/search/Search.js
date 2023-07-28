import React, { useState } from "react";
import SearchResults from "../searchResults/SearchResults";
import { Button } from "react-bootstrap";

const Search = (probs) => {
  let tempArray = [];
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [resultsView, setResultsView] = useState(false);
  const handleSHowHide = () => {
    setResultsView(!resultsView);
  };
  let arr = probs.booksData;

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  const handleSumit = (e) => {
    handleSHowHide();
    e.preventDefault();
    console.log("search word is " + searchWord);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name == searchWord) {
        tempArray.push(arr[i]);
        setSearchResults(tempArray);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row m-5">
          <div className="col mx-5">
            <input
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
          <div className="col ">
            <Button
              className="btn-primary"
              onClick={(e) => {
                handleSumit(e);
              }}
            >
              Search
            </Button>
          </div>
        </div>
        {console.log(searchResults)}
        {resultsView && <SearchResults data={searchResults} />}
      </div>
    </>
  );
};

export default Search;
