
import { useEffect, useState } from "react";
import Navbar from "../../Components/navBar/Navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const AccessManager = (probs) => {
  const [appUser, setAppUser] = useState("default");
  const params = useParams();

  useEffect(() => {
    setAppUser(params.userName);
  }, [probs.role]);
  return (
    <>
      <Navbar appUser={appUser} />
    </>
  );
};

export default AccessManager;
