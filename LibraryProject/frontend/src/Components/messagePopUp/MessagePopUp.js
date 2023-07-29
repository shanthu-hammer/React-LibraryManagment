import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { fetchBookData } from "../../Pages/crud/crud";
import { Nav } from "react-bootstrap";
import "../../Components/messagePopUp/MessagePopUp.css";
const MessagePopUp = (probs) => {
  let id = 3;
  //make this ID  be fetched from probs
  //UrL try to use that sys
  let initial = ["Default message", "Default message "];
  const [message, setMessage] = useState(initial);
  const [show, setShow] = useState(false);

  let userURL = process.env.REACT_APP_API_URL_USERROLE;
  const showHideSwap = () => {
    setShow(!show);
  };
  useEffect(() => {
    const Fetchmessage = async () => {
      try {
        let response = await fetchBookData(userURL);
        //console.log(response);
        setMessage([response[id].name, response[id].message]);
      } catch (error) {
        alert(error);
      }
    };
    Fetchmessage();
  }, []);

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
        <Modal.Header>{message[0]}'messages</Modal.Header>

        <Modal.Body> {message}</Modal.Body>
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
