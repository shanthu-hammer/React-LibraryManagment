import React, { useState } from "react";
import Modal, { Button,ModalBody, ModalHeader } from "react-bootstrap";
const MessagePopUp = (probs) => {
const [message,setMessage] = useState("Default message ")


  return (
    <>

<Button>

</Button>
      {console.log(probs.data.message)}
      <Modal>
        <ModalHeader>{Probs.data.names}'messages</ModalHeader>
        <ModalBody> {probs.data.message}</ModalBody>
      </Modal>
    </>
  );
};

export default MessagePopUp;
