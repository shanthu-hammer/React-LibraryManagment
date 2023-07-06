
import { useEffect, useState } from "react";
import Navbar from "../../Components/navBar/Navbar";
import { useNavigate } from "react-router-dom";
const AccessManager = (probs) => {
  const [appUser, setAppUser] = useState("default");
  //setAppUser(probs.role);
  useEffect(() => {
    setAppUser(probs.role);
  }, [probs.role]);
  return (
    <>
      <Navbar appUser={appUser} />
    </>
  );
};

export default AccessManager;
