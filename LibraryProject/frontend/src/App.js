import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import RoleSelector from "./Pages/roleSelecter/RoleSelector";
import AccessManager from "./Pages/accessManager/AccessManager";
import { Button } from "react-bootstrap";
import "../src/App.css";

function App() {
  const [role, setRole] = useState("default");
  const callBackRoleSelector = (data) => {
    setRole(data);
  };
  // const HandleClick = () => {
  //   //const navigate = useNavigate();
  //   //const navigate = useNavigate();

  // };
  return (
    <div className="custom-background">
      <div className="app">
        <div className="d-flex align-items-center justify-content-center"></div>

        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="d-flex align-items-center justify-content-center">
                  <RoleSelector callBackRoleSelector={callBackRoleSelector} />
                </div>
              }
            />
            <Route
              path="/dashboard/:userName"
              element={<AccessManager role={role} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
