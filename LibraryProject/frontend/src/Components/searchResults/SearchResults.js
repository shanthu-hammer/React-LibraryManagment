import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../searchResults/SearchResults.css";
import { Table } from "react-bootstrap";
const SearchResults = (probs) => {
  let tableData = probs.data;
  return (
    <>
      <div className="containerSearchResult">
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr className="text-center">
                <td>{data.name}</td>
                {console.log(data.name)}
                <td>{data.id}</td>
                <td>{data.availability ? "Available" : "Not Available"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default SearchResults;
