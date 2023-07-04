import React, { useState } from "react";
const RoleSelector = (probs) => {
  const handleClick = (e) => {
    console.log(e.target.name);
    probs.callBackRoleSelector(e.target.name);
    //console.log(probs);
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary m-3"
          name="librarian"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Librarian
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary m-3"
          name="member"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Member
        </button>
      </div>
      <div>
        <button
          className="btn btn-warning m-3"
          name="user"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          User
        </button>
      </div>
    </>
  );
};

export default RoleSelector;
