import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from '@/components/button';
function ModalForm() {

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Solicita</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button click={handleClose} modifier="border-0 mr-2">
          Close
        </Button>
        <Button>Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ModalForm;
