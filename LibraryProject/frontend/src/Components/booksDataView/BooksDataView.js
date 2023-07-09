import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
const BooksDataView = (probs) => {
  const tableData = probs.data;

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
  arrayChecker(tableData);
  return (
    <>
      <Table striped bordered hover>
        {/* {console.log(probs.tableData)} */}
        <thead>
          <tr>
            <th>name</th>
            <th>color</th>

            <th>id</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.color}</td>
              <td>{data.id}</td>
              <td>{data.price}</td>
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
