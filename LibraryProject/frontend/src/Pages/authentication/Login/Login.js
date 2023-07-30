import React, { useState } from "react";
import "../Login/Login.css";
import Validator from "../Validator/Validator";
import AccessManager from "../../accessManager/AccessManager";
import { useNavigate } from "react-router-dom";
const Login = (probs) => {
  let result = false;
  let initialData = {
    email: null,
    password: null,
  };
  const [formData, setFormData] = useState(initialData);
  const [color, setColor] = useState(true);
  const [userInfo, setUserInfo] = useState("");
  const navigate = useNavigate();

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
      console.log(result[0]);
      if (result[0]) {
        probs.callBackRoleSelector(result[1]);
        navigate("/dashboard/" + result[1].role);
      } else {
        alert("please check your email and password ");

        setColor(false);
      }
      // result[0]
      //   ? (probs.callBackRoleSelector(result[1]),
      //     navigate("/dashboard/" + result[1].role))
      //   : console.log("false");
      //probs.callBackRoleSelector(result[1]);
      // navigate("/dashboard/" + result[1].role);
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
