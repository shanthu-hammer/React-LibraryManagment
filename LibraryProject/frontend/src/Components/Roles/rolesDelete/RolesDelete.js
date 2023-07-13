import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { DeleteData } from "../../../Pages/crud/crud";
const RolesDelete = (probs) => {
  let initialData = probs.EditData;
  const [show, setShow] = useState(false);
  const [formdata, setFormdata] = useState(initialData);
  const showHideBtn = () => setShow(!show);

  const handleDelete = (e) => {
    console.log(formdata.id);
    let url = "http://localhost:5000/useRoles";
    e.preventDefault();
    DeleteData(url, formdata.id);
  };

  return (
    <>
      <Button
        className="btn btn-danger "
        onClick={(e) => {
          showHideBtn();
        }}
      >
        Delete
      </Button>

      <Modal show={show} onHide={showHideBtn} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Books Form</Modal.Title>
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
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your ID"
                value={formdata.id}
                name="id"
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
              variant="danger mt-3"
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Delete
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RolesDelete;
