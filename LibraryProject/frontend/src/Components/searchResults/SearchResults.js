import React, { useState } from "react";
import { Form } from "react-bootstrap";
const SearchResults = (probs) => {
  let initialData = probs.data;
  console.log(probs.data);
  const [formdata, setFromdata] = useState(initialData);
  if (formdata == "No Matching Books Available") {
    return (<>{alert("nothing ")}</>)
  }
  return (
    <>
      <Form>
        {/* <Form.Group controlId="formName">
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
        </Form.Group> */}

        {/* <Button
              variant="danger m-3"
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Delete
            </Button> */}
      </Form>
    </>
  );
};

export default SearchResults;
