import React, { useState } from "react";
import "../roleSelecter/RoleSelector.css";
import { useNavigate } from "react-router-dom";

const RoleSelector = (probs) => {
  const navigate = useNavigate();
  const HandleClick = (e) => {
    console.log(e.target.name);
    probs.callBackRoleSelector(e.target.name);

    navigate("/dashboard/"+e.target.name);
    //console.log(probs);
  };

  return (
    <div className="custom">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-sm-8 col-md-12">
          <div className="row btn-block">
            <button
              className="btn btn-primary m-3"
              name="librarian"
              onClick={(e) => {
                HandleClick(e);
              }}
            >
              Librarian
            </button>
          </div>
          <div className="row">
            <button
              className="btn btn-primary m-3"
              name="member"
              onClick={(e) => {
                HandleClick(e);
              }}
            >
              Member
            </button>
          </div>
          <div className="row">
            <button
              className="btn btn-warning m-3"
              name="user"
              onClick={(e) => {
                HandleClick(e);
              }}
            >
              User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
