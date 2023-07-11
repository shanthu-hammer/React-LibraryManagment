import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import BooksEdit from "../../booksEdit/BooksEdit";

const RolesDataView = (probs) => {
  const tableData = probs.tableData;

  return (
    <>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>User Roles Data</th>
          </tr>
        </thead>
        <thead className="text-center">
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Penality</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr className="text-center">
              <td>{data.name}</td>
              <td>{data.id}</td>
              <td>{data.penality}</td>

              <td>
                <BooksEdit EditData={data} />
                {/* <button className="btn btn-primary m-1">Edit</button> */}
                {/* <Librarian /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default RolesDataView;
