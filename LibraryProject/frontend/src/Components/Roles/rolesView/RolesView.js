import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import BooksEdit from "../../books/booksEdit/BooksEdit";
import RolesEdit from "../rolesEdit/RolesEdit";
import RolesDelete from "../rolesDelete/RolesDelete";
import "../rolesView/RolesView.css";
const RolesDataView = (probs) => {
  const tableData = probs.tableData;

  return (
    <>
      <div className="container">
        <h2 className="tableHead">USERS LIST </h2>
        <Table striped bordered hover>
          <thead className="text-center"></thead>
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Penality</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr className="text-center">
                <td>{data.name}</td>
                <td>{data.id}</td>
                <td>{data.penality}</td>
                <td>{data.message}</td>

                <td>
                  <RolesEdit EditData={data} />
                </td>
                <td>
                  <RolesDelete EditData={data} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default RolesDataView;
