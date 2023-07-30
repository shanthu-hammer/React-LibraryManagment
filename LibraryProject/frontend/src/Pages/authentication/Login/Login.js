import React, { useState } from "react";
import "../Login/Login.css";
import Validator from "../Validator/Validator";

const Login = () => {
  let result = false;
  let initialData = {
    email: null,
    password: null,
  };
  const [formData, setFormData] = useState(initialData);
  const [color, setColor] = useState(true);
  const HandleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.email == null || formData.password == null) {
      alert("Email and password cannot be empty ");
      setColor(false);
    } else {
      setColor(true);
      result = await Validator(formData);
      console.log(result);
      //result ? console.log("cleannnn") : console.log("OOPPSS");
      //call the email password checker function from
      //here and pass email and pass as arguments
    }
  };

  const dynamicBgColor = color ? "bg-primary" : "bg-danger";
  return (
    <>
      <div className="parentContainer">
        <div className={`p-5 ${dynamicBgColor}`}>
          <div className="container  text-center">
            <h2>Login Form</h2>
            <form>
              <div className="my-3">
                <input
                  onChange={(e) => {
                    HandleOnChange(e);
                  }}
                  className="form-control"
                  required
                  name="email"
                  placeholder="Email"
                  type="email"
                ></input>
              </div>
              <div className="my-3 ">
                <input
                  onChange={(e) => {
                    HandleOnChange(e);
                  }}
                  className="form-control"
                  name="password"
                  placeholder="password"
                  label="Password"
                  type="password"
                ></input>
              </div>
              <button
                onClick={(e) => {
                  HandleSubmit(e);
                }}
                className="btn btn-warning"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
