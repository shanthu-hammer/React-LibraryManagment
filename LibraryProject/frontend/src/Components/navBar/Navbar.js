import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "../navBar/Navbar.css";
function Navbar(probs) {
  console.log("user: " + probs.appUser);
  console.log("message: " + probs.message);
  const Handleclick = (e) => {
    console.log(e.target.name);
  };

  let initialValue = " default ";
  const [app_User, setApp_User] = useState(initialValue);
  const updateUser = () => {
    setApp_User(probs.appUser);
  };
  //updateUser()
  return (
    <div className="navbar-custom">
      <Nav
        className="bg-dark p-3"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link
            name="user"
            onClick={(e) => {
              Handleclick(e);
            }}
            // href="/home"
          >
            Hi, {probs.appUser}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            name="home"
            onClick={(e) => {
              Handleclick(e);
            }}
            href="/home"
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            name="books "
            onClick={(e) => {
              Handleclick(e);
            }}
            eventKey="link-1"
          >
            Books
          </Nav.Link>
        </Nav.Item>
        {probs.appUser!='librarian'&&<Nav.Item>
          
          <Nav.Link
            name="Messages "
            onClick={(e) => {
              Handleclick(e);
            }}
            eventKey="link-2"
          >
            Messages
          </Nav.Link>
        </Nav.Item>}
        
        
      </Nav>
    </div>
  );
}

export default Navbar;
