import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
const BooksDataView = (probs) => {
  const tableData = probs.tableData;

  console.log(tableData);

  const arrayChecker = (data) => {
    if (Array.isArray(data)) {
      console.log("Data is an array");
      console.log(data);
      const mappedData = data.map((item) => {
        console.log("ID:", item.id);
        console.log("Name:", item.name);
        console.log("Availability:", item.avalablity);
        console.log("Lender:", item.lender);
        console.log("---------------");
      });

      // Process data as an array
    } else {
      console.log("Data is not an array");
      console.log(data);
      // Handle the data as a different type
      // return (
      //   <>
      //     <h2>Data is NOTT array</h2>
      //   </>
      // );
    }
  };
  //arrayChecker(tableData);
  return (
    <>
      <Table striped bordered hover>
        {/* {console.log(probs.tableData)} */}
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Availability</th>
            <th>Lender</th>
            <th>Edit</th>            
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr >
              <td>{data.name}</td>
              <td>{data.id}</td>
              <td>{data.lender}</td>
              <td>{data.availability? "Available":"Not Available" }</td>
             
              <td>
                <button type="button" class="btn btn-dark">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BooksDataView;
{
  /* <td>{item.availability ? "Available" : "Not Available"}</td> */
}

//for js 