import React, { useState } from "react";
import BooksDataView from "../booksDataView/BooksDataView";
import { Button, Modal, Form } from "react-bootstrap";
import { PostData } from "../../../Pages/crud/crud";
const BooksAdd = (probs) => {
  let a = {
    id: probs.NewBookID,
  };
  const [show, setShow] = useState(false);
  const [formdata, setFormdata] = useState(a);

  const ShowHide = () => setShow(!show);

  const HandleEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    let url = "http://localhost:5000/books";
    e.preventDefault();
    //PostData(url, formdata);
    console.log(probs.NewBookID);
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
          Add Books
        </Button>
      }
      <Modal show={show} onHide={ShowHide}>
        <Modal.Header>Add Books Form</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book name"
                // value={formdata.name}
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
              <Form.Control type="text" placeholder="Book's Availability " />
            </Form.Group>
            <Form.Group>
              <Form.Label>Lender</Form.Label>
              <Form.Control type="number" placeholder=" Lenders Id" />
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
      </Modal>
    </>
  );
};
export default BooksAdd;
