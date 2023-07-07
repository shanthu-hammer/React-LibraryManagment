//import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Nav} from 'react-bootstrap';
import "../navBar/Navbar.css";
function Navbar(probs) {
 
  const Handleclick = (e) => {
    console.log(e.target.name);
  };
  return (
    <div className="navbar-custom">
      <Nav
        className="bg-dark p-3"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link
            name="user "
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
        <Nav.Item>
          <Nav.Link
            name="Messages "
            onClick={(e) => {
              Handleclick(e);
            }}
            eventKey="link-2"
          >
            Messages
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;