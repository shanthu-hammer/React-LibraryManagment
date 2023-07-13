import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import BooksUpdate from "../booksUpdate/BooksUpdate";
const BooksEdit = (probs) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let initialValue = probs.EditData;

  const [formdata, setFormdata] = useState(initialValue);

  const HandleEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    //console.log(formdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BooksUpdate(formdata);
    //  \{^_^}/
    handleClose();
  };

  const handleDelete=()=>{

  }

  return (
    <div>
      <Button className="btn btn-primary p-1" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Books Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book name"
                value={formdata.name}
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
            <Form.Group>
              <Form.Label>Availability</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book's Availability "
                value={probs.EditData.availability}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Lender</Form.Label>
              <Form.Control
                type="number"
                placeholder=" Lenders Id"
                value={probs.EditData.lender}
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
            {/* <Button
              variant="danger m-3"
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Delete
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BooksEdit;
