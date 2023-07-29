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
import Parent from "./Pages/testing/parent";
import Login from "./Pages/authentication/Login/Login";
//npx json-server --watch src/database/store.json --port 5000
function App() {
  const [role, setRole] = useState("default");
  const callBackRoleSelector = (data) => {
    setRole(data);
  };

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
            <Route path="/test" element={<Parent role={role} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
