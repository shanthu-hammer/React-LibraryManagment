import logo from "./logo.svg";
import "./App.css";
import RoleSelector from "./Pages/roleSelecter/RoleSelector";
import { useState } from "react";
function App() {
  const [role, setRole] = useState("default");
  const callBackRoleSelector = (data) => {
    // console.log(role + "from app");
    setRole(data);
    //console.log(role);
    //hello
  };

  return (
    <div className="App">
      <RoleSelector callBackRoleSelector={callBackRoleSelector} />
    </div>
  );
}

export default App;
