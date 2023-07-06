import logo from "./logo.svg";
import "./App.css";
import RoleSelector from "./Pages/roleSelecter/RoleSelector";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import { Router, Routes, Route} from "react-router-dom";
import AccessManager from "./Pages/accessManager/AccessManager";
function App() {
  const [role, setRole] = useState("default");
  const callBackRoleSelector = (data) => {
    // console.log(role + "from app");
    setRole(data);
    //console.log(role);
    //testing
  };

  return (
    <div className="custom-background">
      <div className="app">
        <div className="d-flex align-items-center justify-content-center">
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <RoleSelector callBackRoleSelector={callBackRoleSelector} />
                  // <AccessManager />
                }
              />
              <Route path="/role-selector" element={<AccessManager />}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
