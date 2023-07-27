import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import RoleUpdate from "../rolesUpdate/RolesUpdate";
const RolesEdit = (probs) => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let initialValue = probs.EditData;
  const [formdata, setFormdata] = useState(initialValue);

  const HandleEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(e.target.name);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    RoleUpdate(formdata);    
    handleClose();
  };

  return (
    <div>
      <Button className="btn btn-primary p-1" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Roles Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formdata.name}
                name="name"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="forid">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter ID"
                value={formdata.id}
                name="id"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                value={formdata.email}
                name="email"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formmessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder=" User's message here"
                value={formdata.message}
                name="message"
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Penality</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                value={formdata.penality}
                onChange={(e) => {
                  HandleEvent(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="forRole">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={formdata.role}
                name="role"
                onChange={(e) => HandleEvent(e)}
              >
                <option value="">Select a role</option>
                <option value="member">Member</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary mt-3"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RolesEdit;
