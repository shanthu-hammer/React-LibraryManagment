import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../../Components/messagePopUp/MessagePopUp.css";
const MessagePopUp = (probs) => {
  console.log(probs.userInfo);

  const [show, setShow] = useState(false);

  const showHideSwap = () => {
    setShow(!show);
  };

  return (
    <>
      <Nav.Link className="buttonStyle">
        {" "}
        <button
          className="text-button"
          onClick={() => {
            showHideSwap();
          }}
        >
          Messages
        </button>
      </Nav.Link>

      <Modal show={show} onHide={showHideSwap}>
        <Modal.Header>{probs.userInfo.name}'messages</Modal.Header>

        <Modal.Body> {probs.userInfo.message}</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              showHideSwap();
            }}
          >
            close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* {console.log(probs.data.message)} */}
    </>
  );
};

export default MessagePopUp;
