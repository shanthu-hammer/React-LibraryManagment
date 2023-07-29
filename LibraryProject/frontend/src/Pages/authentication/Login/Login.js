import React, { useState } from "react";
import "../Login/Login.css";
const Login = () => {
  const [formData, setFormData] = useState("");
  const [color, setColor] = useState(true);
  const HandleOnChange = (e) => {
    let initialData = {
      email: null,
      password: null,
    };
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.emailc == null || formData.password == null) {
      alert("Email and password cannot be empty ");
      setColor(false);
    } else {
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
