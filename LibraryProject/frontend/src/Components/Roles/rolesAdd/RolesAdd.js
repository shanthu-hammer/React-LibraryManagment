import React, { useEffect, useState } from "react";

import { Button, Modal, Form } from "react-bootstrap";
import { PostData } from "../../../Pages/crud/crud";
const RolesAdd = (probs) => {
  //console.log(probs.tableData);
  let a = {
    id: probs.tableData.length + 1,
    name: "first one ",
    avalablity: true,
    lender: 0,
  };
  const [show, setShow] = useState(false);
  const [formdata, setFormdata] = useState(a);

  useEffect(() => {
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
      id: probs.tableData.length + 1,
    })); //het an explination from chatgpt
  }, [probs.tableData.length]);

  const ShowHide = () => setShow(!show);

  const HandleEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    let url = "http://localhost:5000/useRoles";
    e.preventDefault();
    PostData(url, formdata);
    console.log(formdata);
  };

  return (
    <>
      {
        <Button
          onClick={(e) => {
            ShowHide(e);
          }}
          className="btn btn-warning m-5 p-3"
        >
          {" "}
          Add Users
        </Button>
      }
      <Modal show={show} onHide={ShowHide} centered>
        <Modal.Header>Add Users Form</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="User name"
                name="name"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your ID"
                value={formdata.id}
                name="id"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="forEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="User Email "
                name="email"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="forPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="User Password"
                name="password"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="forMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="User Message"
                name="message"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="forPeanlity">
              <Form.Label>Penality</Form.Label>
              <Form.Control
                type="number"
                placeholder="Penality Amount"
                name="penality"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>

            <Button
              variant="primary m-3 "
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              ShowHide();
            }}
            variant="secondary"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default RolesAdd;
