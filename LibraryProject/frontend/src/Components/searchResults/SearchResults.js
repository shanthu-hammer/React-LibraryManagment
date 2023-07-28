import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../searchResults/SearchResults.css";
import { Table } from "react-bootstrap";
const SearchResults = (probs) => {
  console.log(probs.data);
  let tableDataa = [
    {
      id: 200,
      name: "default",
      availability: true,
      lender: 1,
    },
  ];

  let tableData = probs.data;
  const tableDataaa = [
    {
      id: 0,
      name: "Clover",
      availability: true,
      lender: 1,
    },
    {
      id: 1,
      name: "BullsCLASS",
      availability: false,
      lender: 1,
    },
    {
      id: 2,
      name: "Bulls",
      availability: false,
      lender: 1,
    },
  ];
  let initialData = probs.data;
  console.log(probs.data);
  //const [formdata, setFromdata] = useState(initialData);

  // useEffect(() => {
  //   // setFromdata([...formdata], probs.data);
  //   //setFromdata(probs.data);
  // }, []);
  // if (formdata == "No Matching Books Available") {
  //   return <>{alert("nothing ")}</>;
  // }
  return (
    <>
      <div className="containerSearchResult">
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>ID</th>
              {/* <th>Availability</th>
              <th>Lender</th> */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr className="text-center">
                <td>{data.name}</td>
                {console.log(data.name)}
                <td>{data.id}</td>
                {/* <td>{data.lender}</td> */}
                {/* <td>{data.availability ? "Available" : "Not Available"}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default SearchResults;
